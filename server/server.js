const express = require('express');
const path = require('path');
const { ApolloServer } = require('apollo-server-express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { authMiddleware } = require('./utils/auth');
const cors = require('cors');

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');
const User = require('./models/User');

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors());


app.post('/signup', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    
    const existingUser = await User.findOne({ email });
    if(existingUser) {
      return res.status(409).json({ message: 'User already exists' });
    }
    
    
    const newUser = await User.create({ username, email, password });
    
    res.status(201).json({ user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});


app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    console.log("Username:", username); //! REMOVE
    console.log("Password:", password); //! REMOVE
        
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: 'Invalid username' });
    }
    
    const trimmedPassword = password.trim();
    const isPasswordValid = await user.isCorrectPassword(trimmedPassword);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    console.log("User ID:", user._id); //! REMOVE
    
    const token = jwt.sign({ userId: user._id, username: user.username }, 'mysecretssshhhhhhh');

    console.log("Token:", token); //! REMOVE
    
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

app.get('/home', async (req, res) => {
  if (!req.user) {
    return res.status(401).json({ message: "Not Allowed." });
    }

    try {
      const user = await User.findOne(req.user.userId);

      if (!user) {
        return res.status(404).json({ message: "User not found." });
      }

      res.json({ message: "Welcome to the home page!", user: userData });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error." });
    }
});

app.post('/logout', (req, res) => {
  res.clearCookie('token')
  res.status(200).json({ message: 'Logged out' });
});

const startApolloServer = async () => {
  await server.start();
  server.applyMiddleware({ app });

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    });
  });
};


startApolloServer();