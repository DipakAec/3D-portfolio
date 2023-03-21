import React from 'react'
import { useState,useRef } from 'react'
import emailjs from "@emailjs/browser"
import { motion } from 'framer-motion'
import { SectionWrapper } from '../hoc'
import { EarthCanvas } from './canvas'
import { slideIn } from '../utils/motion'
import { styles } from '../styles'

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name:"",
    email:"",
    message:"",
  });

  const [loading, setLoading] = useState(false);

  const handelChange =(e) => {
    const {name,value}=e.target
    setForm({...form , [name]:value})
  }
  const handelSubmit =(e) => {
    e.preventDefault()
    setLoading(true)
    emailjs.send('service_2w82hmp','template_dc99dqi',
    {
      from_name:form.name,
      to_name:'Dipak',
      from_email:form.email,
      to_email:'pauldipakkr@gmil.com',
      message:form.message
    },'5tJkrDVmYllRswhYi'
    )
    .then(
      () => {
        setLoading(false);
        alert("Thank you. I will get back to you as soon as possible.");

        setForm({
          name: "",
          email: "",
          message: "",
        });
      },
      (error) => {
        setLoading(false);
        console.error(error);

        alert("Ahh, something went wrong. Please try again.");
      }
    );
  }

  //template_dc99dqi
  //service_2w82hmp
  //5tJkrDVmYllRswhYi
  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
      variants={slideIn("left","tween",0.2,1)}
      className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in Touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>
        <form
        ref={formRef}
        onSubmit={handelSubmit}
        className="mt-12 flex flex-col gap-8"
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input 
            type="text"
            name='name'
            value={form.name}
            onChange={handelChange}
            placeholder="what's your Name?"
            className='bg-tertiary py-4 px-6
                       placeholder:text-secondary text-white 
                        rounded-lg outlined-none 
                        border-none font-medium'
             />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input 
            type="email"
            name='email'
            value={form.email}
            onChange={handelChange}
            placeholder="what's your Email?"
            className='bg-tertiary py-4 px-6
                       placeholder:text-secondary text-white 
                        rounded-lg outlined-none 
                        border-none font-medium'
             />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <textarea 
            rows='7'
            name='message'
            value={form.message}
            onChange={handelChange}
            placeholder="what's your Message?"
            className='bg-tertiary py-4 px-6
                       placeholder:text-secondary text-white 
                        rounded-lg outlined-none 
                        border-none font-medium'
             />
          </label>

          <button
          type='submit'
          className='bg-tertiary  py-3 px-8
          outline-none w-fit text-white font-bold
          shadow-md shadow-primary roundex-xl'
          >
              {loading ? 'sending..' : 'sent'}
          </button>
        </form>
      </motion.div>

      <motion.div
      variants={slideIn("right","tween",0.2,1)}
      className='xl:flex flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas/>
      </motion.div>


    </div>
  )
}

export default SectionWrapper(Contact, "contact")