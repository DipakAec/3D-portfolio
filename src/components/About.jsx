import React from 'react'
import Tilt from 'react-tilt'
import { motion } from 'framer-motion'
import {styles} from '../styles'
import {services} from '../constants'
import {fadeIn,textVariant} from '../utils/motion';
import { SectionWrapper } from '../hoc'

const ServiceCard =({index,title,icon}) =>{
  return(
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div 
      variants={fadeIn("right","spring",0.5*index,0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div 
         options={{
          max:45,
          scale:1,
          speed:450
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
          <img src={icon} alt="icon" className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[22px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
    <p className={styles.sectionSubText}>Introduction</p>
    <h2 className={styles.sectionHeadText}>Overviews</h2>
    </motion.div>
    <motion.p
    variants={fadeIn("","",0.1,1)}
    className='mt-4 text-secondary text-[18px] max-w-3xl leading-[30px]'
    >
      Hi,I am Dipak Kumar Paul and I am a web developer based in Kolkata, India. <br/>Currently, I am working at MindBrew Studio where I utilize my skills in HTML, CSS, JavaScript, React JS, PHP, MySQL, and WordPress to create high-quality websites and web applications.
      <br/><br/>
      Throughout my career, I have gained valuable experience in developing responsive and user-friendly websites that deliver an exceptional user experience. I am passionate about staying up-to-date with the latest web development trends and technologies, which enables me to incorporate innovative solutions into my work.
    </motion.p>
    <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service,index)=>(
        <ServiceCard key={services.title} index={index} {...service}/>
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(About,"about");