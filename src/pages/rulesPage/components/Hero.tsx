import { motion } from "framer-motion";
import React from "react";

const Hero = () => {
  return (
    <section className="w-full h-[500px] flex justify-center items-center">
      <div className="mt-[120px]">
        <motion.h1
          initial="highPosition"
          whileInView="normalPosition"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          transition={{ duration: 0.24 }}
          variants={{
            highPosition: { y: -10 },
            normalPosition: { y: 0 },
          }}
          className="text-9xl text-center w-[90%] mx-auto text-[#174a51] font-bold"
        >
          Rules.
        </motion.h1>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          transition={{ duration: 0.24, delay: 0.3 }}
          variants={{
            hidden: { opacity: 0, y: -10 },
            visible: { opacity: 1, y: 0 },
          }}
          className="text-[22px] font-sans font-medium text-[#174146] text-center w-[58%] mx-auto mt-[30px]"
        >
          Follow simple, step-by-step guidance to understand the rules, master
          the mechanics, and play with confidence.
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
