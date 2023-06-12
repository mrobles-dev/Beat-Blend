const db = require("../config/connection");
const { User } = require("../models");

const userSeeds = [
  {
    username: "John Doe",
    email: "johndoe@example.com",
    password: "password123",
  },
  {
    username: "Jane Smith",
    email: "janesmith@example.com",
    password: "password456",
  },
];

db.once("open", async () => {
  try {
    await User.deleteMany({});

    await User.create(userSeeds);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log("Seeding complete!");
  process.exit(0);
});
