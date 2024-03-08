'use client';
import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motions'
import { SparklesIcon } from '@heroicons/react/16/solid'
import Image from 'next/image';

const HeroContent = () => {
    return (
        <motion.div initial='hidden'
        animate='visible'
        className='flex flex-row item-center justify-center px-20 mt-40 w-full z-[20]'>
          <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start'>
              {/* First Animation  */}
            <motion.div
                  variants={slideInFromRight(0)}
              className='py-[8px]  opacity-[0.5]'
              >
                    <h1 className='Welcome-text text-[35px]'>
                        Hi, I&#39;m <span className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500'>Eng. Mohamed Sabry</span></h1>
            </motion.div>
            <motion.div
                  variants={slideInFromTop}
              className='Welcome-box py-[8px] px-[10px] border border-[#7042f88b] opacity-[0.9]'
              >
                  <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5'/>
                  <h1 className='Welcome-text text-[13px]'>FrontEnd Developer Portfolio</h1>
            </motion.div>

              {/* Second Animation */}
                <motion.div
                    variants={slideInFromLeft(0.5)}
                className='flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto'
                ><span>
                        
                     Providing 
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'> the best </span>
                </span>
                    project experience
                </motion.div>
                
                {/* Third Animation  */}
                <motion.p
                    variants={slideInFromLeft(0.8)}
                className='text-lg text-gray-400 my-5 max-w-[600px]'>
                I&apos;m a FrontEnd Developer. I specialize in building (and occasionally designing) exceptional digital experiences.
                </motion.p>

                {/* Fourth Animation */}
                <motion.a
                    variants={slideInFromLeft(1)}
                    className='py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]'
                    // href='https://github.com/MS-Samuel/portfolio'
                > Learn More!</motion.a>
            </div>
            <motion.div
                variants={slideInFromRight(0.8)}
            className='w-full h-full flex justify-center items-center'>
                <Image
                    src='/mainIconsdark.svg'
                    width={560}
                    height={560}
                    alt='work icons' />
            </motion.div>
        </motion.div>
    
                
  )
}

export default HeroContent