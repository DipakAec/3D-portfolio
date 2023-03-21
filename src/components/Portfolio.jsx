import React from 'react'
import Tilt from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { github } from '../assets'
import {website} from "../assets"
import { jobs } from '../constants'
import { fadeIn,textVariant } from '../utils/motion'

const JobCard = ({index, name, description, tags, image, source_code_link,website_link,role}) => {
  return(
    <motion.div
    variants={fadeIn("up","spring",index*0.5,0.75)}
    >
      <Tilt
      options={{
        max:45,
        scale:1,
        speed:450
      }}
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
    <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-between m-3 card-img_hover'>
            <div
              onClick={() => window.open(website_link, "_blank")}
              className='bg-white w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={website}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
      </div>

        <div className='mt-3'>
          <h3 className='text-white font-bolt text-[24px]'>{name}</h3>
          <p className='text-secondary text-[15px]'>{description}</p>
        </div>
        <div>
            <h5 className='text-white font-bolt text-[15px] mt-4'>Work Role: <span className='text-white font-semibold text-[15px]'>{role}</span> </h5>
        </div>
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag)=>(
            <p key={tag.name}
               className={`text-[15px] ${tag.color}`} 
            >
               #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Portfolio = () => {
  return (
    <>
        <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          My Professional Works 
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Works
        </h2>
      </motion.div>
      <div className='w-full flex'>
        <motion.p
        variants={fadeIn("right","",0.1,1)}
        className="mt-3 text-secondary text-[18px] max-w-6xl leading-[30px] text-justify"
        > 
        Following projects showcases my skills and experience through
        real-world examples of my work. Each project is briefly described with
        links to code repositories and live demos in it. It reflects my
        ability to solve complex problems, work with different technologies,
        and manage projects effectively.   
        </motion.p> 
      </div>
      <div className='mt-20 flex flex-wrap gap-7'>
        {jobs.map((job,index)=>(
            <JobCard
            key={`jobs-${index}`}
            index={index}
            {...job}
            />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Portfolio,"portfolio")