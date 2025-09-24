import React from "react";
import { motion } from "framer-motion";
import { FaTelegram, FaTwitter, FaLinkedin, FaMedium } from "react-icons/fa";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const socials = [
    {
      icon: <FaTelegram />,
      href: "https://t.me/Ferhat_N",
      color: "hover:text-blue-400",
    },
    {
      icon: <FaTwitter />,
      href: "https://x.com/crypto_meii",
      color: "hover:text-sky-400",
    },
    {
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/ferhat-nazli-44a943275/",
      color: "hover:text-blue-500",
    },
    {
      icon: <FaMedium />,
      href: "https://medium.com/@Cryptomeii",
      color: "hover:text-green-400",
    },
  ];

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      {/* Левая часть — соцсети */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl flex flex-col items-center justify-center gap-6'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <div className="flex gap-8 mt-8 text-white text-4xl">
          {socials.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${social.color} transition-colors`}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 * index, duration: 0.6, type: "spring" }}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Правая часть — шар */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
