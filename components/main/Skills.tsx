// import { transform } from 'next/dist/build/swc'
import { Backend_skill, Frontend_skill, Full_stack, Other_skill, Skill_data } from '../constants'
import React from 'react'
import SkillDataProvider from '../sub/SkillDataProvider'
import SkillText from '../sub/SkillText'

const Skills = () => {
  return (
      <section
        id='skills'
        className='flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20 pb-80'
        style={{transform:"scale(0.9)"}}
    >
      <SkillText />
        <div className='flex flex-row justify-around flex-wrap  gap-5 items-center'>
          {/* {Skill_data.map((image, index) => (
              <SkillDataProvider
              key={index}
                src={image.Image}
                width={image.width}
                height={image.height}
                index={index}
              />
          ))} */}

          {Frontend_skill.map((image, index) => (
              <SkillDataProvider
              key={index}
                src={image.Image}
                width={image.width}
                height={image.height}
                index={index}
              />
          ))}
          {/* {Backend_skill.map((image, index) => (
              <SkillDataProvider
              key={index}
                src={image.Image}
                width={image.width}
                height={image.height}
                index={index}
              />
          ))}
          {Full_stack.map((image, index) => (
              <SkillDataProvider
              key={index}
                src={image.Image}
                width={image.width}
                height={image.height}
                index={index}
              />
          ))} */}
          {/* {Other_skill.map((image, index) => (
              <SkillDataProvider
              key={index}
                src={image.Image}
                width={image.width}
                height={image.height}
                index={index}
              />
          ))} */}
      </div>
      
      <div className='w-full h-full absolute'>
        <div className='w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover'>
          <video className='w-full h-auto'
            preload='false'
            autoPlay
            muted
            loop
            playsInline
            src="/cards-video.webm"></video>
        </div>
      </div>
      </section>
           
  )
}

export default Skills