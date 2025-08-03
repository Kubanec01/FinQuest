import { easeIn, easeInOut, easeOut, motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const Hero = () => {
  return (
    <section className="w-full h-[800px] overflow-hidden">
      <div className="w-[90%] max-w-[1300px] mt-[190px] mx-auto relative">
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
          Learn to invest.
          <br />
          With FinQuest.
        </motion.h1>
        <motion.span
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          transition={{ duration: 0.25, delay: 0.8 }}
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="absolute -bottom-[300px] -left-[80px] -z-10 font-sans font-bold text-6xl text-[#00000020]"
        >
          Invest Smart
        </motion.span>
        <motion.span
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          transition={{ duration: 0.25, delay: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="absolute -bottom-[100px] left-[190px] -z-10 font-sans font-bold text-6xl text-[#00000015]"
        >
          Grow wealth
        </motion.span>
        <motion.span
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          transition={{ duration: 0.25, delay: 0.6 }}
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="absolute -bottom-[120px] right-[40px] -z-10 font-sans font-bold text-5xl text-[#0000002b]"
        >
          Own Tomorrow
        </motion.span>
        <motion.span
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          transition={{ duration: 0.25, delay: 0.4 }}
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="absolute top-[100px] -left-[230px] -z-10 font-sans font-bold text-5xl text-[#00000015]"
        >
          BUild <span className="text-[#0000002b]">Freedom</span>
        </motion.span>
        <motion.span
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          transition={{ duration: 0.25, delay: 0.7 }}
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="absolute -bottom-[270px] right-[240px] -z-10 font-sans font-bold  text-6xl text-[#00000015]"
        >
          Risk <span className="text-5xl">wisely</span>
        </motion.span>
        <motion.span
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          transition={{ duration: 0.25, delay: 0.3 }}
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="absolute -top-[45px] -right-[160px] -z-10 font-sans font-bold text-5xl text-[#00000015]"
        >
          Think <span className="text-[#0000002b]">PROFIT</span>
        </motion.span>
      </div>
    </section>
  );
};

export default Hero;

// v tejto sekcii budu vsade mozne a rozne ulozene napisy ohladom ucenia a investovania ktore sa budu rozsvecovat individualne na striedacku zo sedej na zelenu

// #00000039
