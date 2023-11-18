/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/no-unknown-property */
import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}> Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        <div className=" mb-5">
          <p className="mb-5">
            Passionate Front-End Developer with
            <span className="font-bold">
              &nbsp; 3+ years of professional working experience &nbsp;
            </span>
            with on building, fixing and optimize responsive, mobile first and
            high conversion rate website in the top companies of Tech and
            E-Commerce industry in fast-paced, collaborative environments.
            <br /> I focus on creating better mobile-friendly responsive designs
            with best practice and maximum performance by taking innovator and
            creative problem-solving approach using BrowserStack and Lighthouse.
            Love to work being collaborative team.
          </p>
          <h2 className="font-bold">TECHNICAL SKILLS:</h2>
          <div className="mb-5 list-disk ml-5 space-y-1">
            <li>
              Specialized in JavaScript, React.js, Next.js, Typescript, Three.js
            </li>
            <li>
              Tailwind, Material UI, Bootstrap, Sass, Node.js, HTML, CSS,
              JavaScript, Mongo, Git
            </li>
          </div>
          <h2 className="font-bold">PROFESSIONAL HIGHLIGHTS:</h2>
          <ul className="mb-5 list-none ml-5 space-y-3">
            <li>
              <span className="text-3xl">💯</span> 100% customer satisfaction
              for 1-year period on Zendesk ticket management system (World-wide
              customers as Singapur Airlines, Samsung, Allianz, CNN, Adidas,
              Coco-Cola, and Toyota...).
            </li>
            <li>
              <span className="text-3xl">📈 </span> Increased the completion
              speed of each website opened for different regions of a global
              brand by 70% with the innovative scripts and automations I have
              designed.
            </li>
            <li>
              <span className="text-3xl"> 📉 </span> Decreased Similar Website
              development processes for teams by 60% for with the technical
              documents, case studies and templates I have created.
            </li>
          </ul>
        </div>
      </motion.p>

      <div className=" mt-10 flex flex-wrap gap-10 xs:justify-center">
        {services.map((service, index) => (
          <ServiceCard key={services.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
