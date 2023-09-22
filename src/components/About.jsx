/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/no-unknown-property */
import React from 'react'
import Tilt from 'react-parallax-tilt';
import {motion} from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import {fadeIn, textVariant} from '../utils/motion';

import {SectionWrapper} from '../hoc';

const ServiceCard = ({index,title,icon}) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div 
      variants={fadeIn('right', 'spring',0.5*index,0.75)} 
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div options={{
            max:45,
            scale:1,
            speed:450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>


        </div>

      </motion.div>
    </Tilt>
  )
}


const About = () => {
  return (
    <>
        <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}> Introduction</p>
            <h2 className={styles.sectionHeadText}>Overview</h2>
        </motion.div>

        <motion.p variants={fadeIn("","",0.1,1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'> 
           <p className=' mb-5'>As an experienced Front-End Developer with over 3 years in the field, I have a proven track record working on global projects for major partners such as Samsung, Singapore Airlines, Alliance, and Hyundai across over 60 countries. I'm skilled in JavaScript, React, Node.js, CSS, Sass, and SQL, dedicated to developing high-quality software solutions that meet business needs.</p> 

<h2 className='font-bold'>Key Skills:
</h2> 
<ul className=' list-disc ml-5 space-y-1'>
  <li>
  JavaScript (Object-Oriented Programming, Functional Programming, DOM Manipulation, Error Handling, etc.)
  </li>
  <li>React.js, Node.js, TypeScript
</li>
  <li>HTML5, CSS3, Sass</li>
  <li>Git, Performance Optimization, Critical Render Path</li>
</ul>
        </motion.p>

        <div className=' mt-10 flex flex-wrap gap-10 xs:justify-center'>
          {services.map((service,index)=> (<ServiceCard key ={services.title} index={index} {...service}/>))}
        </div>
    </>
  )
}

export default SectionWrapper(About,"about")