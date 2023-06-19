import React from 'react'
import {ImFacebook} from "react-icons/im"
import {BsInstagram,BsYoutube,BsTwitter} from "react-icons/bs"
import {HiOutlineArrowNarrowRight} from "react-icons/hi"

const Footer = () => {
  return (
    <div className='bg-black py-32'>
          <div className='flex justify-center items-center gap-48 mobile:gap-14 mobile:flex-col tablet:gap-14 tablet:flex-col tabletlg:flex-col tabletlg:gap-14 tabletxl:flex-col tabletxl:gap-14 laptop:flex-row laptop:justify-center laptop:items-center laptop:gap-32 desktop:flex-row desktop:justify-center desktop:items-center desktop:gap-52 '>
             <div>
                   <h3 className='text-white text-7xl font-bold mobile:text-2xl tablet:text-3xl tabletlg:text-4xl tabletxl:text-4xl laptop:text-5xl desktop:text-6xl'>Lets find <br /> your Dream Home</h3>
             </div>
              <div className='flex gap-48 mobile:gap-24 tablet:gap-24 tabletlg:gap-32 tabletxl:gap-36'>

              <div className='text-white list-none'>
            <h4 className='font-bold text-xl mb-4 desktop:text-2xl'>Contact Us</h4>
             <ul className='flex flex-col gap-6 mobile:gap-3 tablet:gap-3 tabletlg:gap-3 tabletxl:gap-3 desktop:text-lg'>
                <li><a href="">FAQ</a></li>
                <li><a href="">Support</a></li>
                <li><a href="">Question</a></li>
             </ul>
        </div>

        <div className='text-white list-none'>
            <h4 className='font-bold text-xl mb-4 desktop:text-2xl'>Offices</h4>
            <ul className='flex flex-col gap-6  mobile:gap-3 tablet:gap-3 tabletlg:gap-3 tabletxl:gap-3 desktop:text-lg '>
                <li><a href="">Unites States</a></li>
                <li><a href="">Europe</a></li>
                <li><a href="">Canada</a></li>
             </ul>
            
        </div>


              </div>

          </div>
        <div className='flex  justify-between px-32 mt-28 mobile:px-10 mobile:flex-col mobile:gap-6 tablet:px-10 tablet:flex-col tablet:gap-6 tabletlg:flex-col tabletlg:gap-6 tabletlg:px-52 tabletxl:flex-col tabletxl:gap-6 tabletxl:px-64 laptop:flex-row laptop:gap-36 desktop:flex-row '>
          <div className='flex gap-5  text-yellow-700 text-2xl mobile:text-xl '>
           <ImFacebook/>
            <BsInstagram/>
            <BsYoutube/>
            <BsTwitter/>
          </div>

          <div className='text-white text-base'>
            <button className='bg-yellow-700 w-36 h-11 capitalize pr-3'>view home</button>
            <span className='relative left-28 bottom-7'><HiOutlineArrowNarrowRight/></span>
        </div>

          </div>
    </div>
  )
}

export default Footer