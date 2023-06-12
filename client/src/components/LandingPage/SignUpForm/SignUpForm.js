import React from "react";
import { motion } from "framer-motion";

const SignUpForm = () => {
  return (
    <motion.div
      className="animateDiv"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.25 }}
    >
      <form>
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
        <button className='submit' type='submit'>Sign Up</button>
      </form>
    </motion.div>
  );
};

export default SignUpForm;
