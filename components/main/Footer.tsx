import React from 'react'
import { RxDiscordLogo, RxGithubLogo, RxTwitterLogo, RxInstagramLogo, RxLinkedinLogo } from 'react-icons/rx'
import { FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
<div className='w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]'>
  <div className='w-full flex flex-col items-around justify-center m-auto'>

    <div className='flex flex-wrap justify-around gap-14'>

      <div className='min-w-[200px] h-auto flex flex-col items-center justify-start'>
        <div className="font-bold text-[16px]">Community</div>
        <p className="flex flex-row items-center my-[15px] cursor-pointer">
          <FaYoutube />
          <span className='text-[15px] ml-[6px]'>Youtube</span>
        </p>
        <p className="flex flex-row items-center my-[15px] cursor-pointer">
          <RxGithubLogo />
          <span className='text-[15px] ml-[6px]'>Github</span>
        </p>
        <p className="flex flex-row items-center my-[15px] cursor-pointer">
          <RxDiscordLogo />
          <span className='text-[15px] ml-[6px]'>Discord</span>
        </p>
      </div>

      <div className='min-w-[200px] h-auto flex flex-col items-center justify-start'>
        <div className="font-bold text-[16px]">Social Media</div>
        <p className="flex flex-row items-center my-[15px] cursor-pointer">
          <FaYoutube />
          <span className='text-[15px] ml-[6px]'>Instagram</span>
        </p>
        <p className="flex flex-row items-center my-[15px] cursor-pointer">
          <RxTwitterLogo />
          <span className='text-[15px] ml-[6px]'>Twitter</span>
        </p>
        <p className="flex flex-row items-center my-[15px] cursor-pointer">
          <RxLinkedinLogo />
          <span className='text-[15px] ml-[6px]'>LinkedIn</span>
        </p>
      </div>

      <div className='min-w-[200px] h-auto flex flex-col items-center justify-start'>
        <div className="font-bold text-[16px]">About</div>
        <p className="flex flex-row items-center my-[15px] cursor-pointer">
          <span className='text-[15px] ml-[6px]'>Sponsor</span>
        </p>
        <p className="flex flex-row items-center my-[15px] cursor-pointer">
          <span className='text-[15px] ml-[6px]'>Learning About Me</span>
        </p>
        <p className="flex flex-row items-center my-[15px] cursor-pointer">
          <span className='text-[15px] ml-[6px]'>mo7ammed.sabre@gmail.com</span>
        </p>
      </div>

    </div>

    <div className='text-[15px] mb-3 text-center pt-10'>
      &copy; Made with <span className='text-red-500'>❤</span>. All rights reserved
    </div>

  </div>
</div>
  )
}

export default Footer