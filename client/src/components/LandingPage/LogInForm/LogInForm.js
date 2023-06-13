import React, { useState } from "react";
import { motion } from "framer-motion";

const LogInForm = ({ handleLogIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogIn({ username, password });
  };

  return (
    <motion.div
      className="animateDiv"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.25 }}
    >
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="submit" type="submit">
          Log In
        </button>
      </form>
    </motion.div>
  );
};

export default LogInForm;
