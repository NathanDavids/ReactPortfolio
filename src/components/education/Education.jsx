import React, { useRef } from 'react'
import '../education/Education.css'
import '../../App.css'
import LiIcon from '../education/LiIcon'
import { motion, useScroll } from "framer-motion"


const Details = ({position, company, time, address, work}) => {
    const ref = useRef(null);
    return (<li className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex-col items-center justify-between'>

        <LiIcon reference={ref}/>
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:"spring"}}
        >
            <h3 className='capitalize font-bold text-3xl'>{position}&nbsp;<a href="www.google.com" target='_blank' className='text-[#D9171F] capitalize text-2xl'>@{company}</a></h3>
            <span className='capitalize font-semibold text-dark/75'>
                {time} | {address}
            </span>
            <p className='font-medium w-full'>
                {work}
            </p>
        </motion.div>
    </li>
    )
}

const Education = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
    return (
      <>
      <div className='my-50 mt-20 mb-20 bg-white'>
        <h2 className='font-bold text-8xl mb-20 w-full text-center'>
            Education
        </h2>

        <div ref={ref} className='w-[75%] mx-auto relative'>

            <motion.div style={{scaleY: scrollYProgress}} className='absolute left-9 top-1 w-[4px] h-full bg-black origin-top'/>

            <ul className='w-full flex flex-col items-start justify-between ml-4'>
                <Details
                position="Information Management " company="Damelin"
                time="2018 - 2021" address="mowbray, cape town"
                work="A Bachelor of Commerce in Information Management blends business knowledge with technical skills to manage data effectively. Graduates learn to design efficient information systems, make data-driven decisions, and ensure data security. Career options include data analysts, IT consultants, and information systems managers."
                />

                <Details
                position="Information Systems" company="University of the Western Cape"
                time="2021 - 2021" address="bellville, cape town"
                work="A Bachelor of Commerce Honours in Information Systems provides advanced knowledge in managing complex IT solutions and data analysis. Graduates align information systems with organizational strategies, ensuring a competitive edge through innovation. The program emphasizes cybersecurity, emerging technologies, and practical experience, preparing students for leadership roles in the technology-driven business landscape."
                />

                <Details
                position="CompTIA Security +" company="CompTIA"
                time="2022 - 2022" address="milnerton, cape town"
                work="The CompTIA Security+ certificate offers a practical education in cybersecurity fundamentals, recognized globally by employers. It covers a wide range of security topics, preparing individuals for various cybersecurity roles. This certification serves as a stepping stone for advanced cybersecurity credentials and opens doors to entry-level cybersecurity positions. Graduates gain hands-on skills to address real-world security challenges and contribute to securing IT infrastructures effectively."
                />
            </ul>

        </div>
      </div>
      </>
    )
  }
  
  export default Education