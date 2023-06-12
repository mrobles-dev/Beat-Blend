import React from "react";
import { motion } from "framer-motion";

const LogInForm = () => {
  return (
    <motion.div
      className="animateDiv"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.25 }}
    >
      <form>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button className='submit' type='submit'>Log In</button>
      </form>
    </motion.div>
  );
};

export default LogInForm;
