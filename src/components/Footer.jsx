import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaRegCopy } from "react-icons/fa";

const Footer = () => {
  const wallet = "0x1234...ABCD"; // твой кошелёк
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(wallet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="w-full mt-16 bg-black-100 p-6 flex flex-col items-center justify-center">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring" }}
        className="bg-tertiary p-6 rounded-2xl shadow-lg flex flex-col items-center gap-4"
      >
        <span className="text-white text-lg font-bold">
          🚀 Buy me a coffee (or a pizza 🍕)
        </span>
        <div className="flex items-center gap-3 bg-black-200 px-4 py-2 rounded-lg">
          <code className="text-secondary">{wallet}</code>
          <button
            onClick={handleCopy}
            className="text-white hover:text-green-400 transition"
          >
            <FaRegCopy />
          </button>
        </div>
        {copied && <span className="text-green-400 text-sm">Copied!</span>}
      </motion.div>

      <p className="text-secondary text-sm mt-6">
        © {new Date().getFullYear()} All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
