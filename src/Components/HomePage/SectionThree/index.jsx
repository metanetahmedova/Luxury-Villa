import React from 'react'
import {HiOutlineArrowNarrowRight} from "react-icons/hi"

const Sectionthree
 = () => {
  return (
    <div className=' h-[100vh] py-14 flex flex-col mobile:flex-col-reverse mobile:items-center mobile:mt-[60vw] tablet:flex-col-reverse tablet:items-center tablet:mt-[60vw]  tabletlg:flex-col-reverse  tabletlg:items-center tabletlg:mt-[50vw] tabletxl:mt-[60vw] tabletxl:flex-col-reverse tabletxl:items-center laptop:flex-col-reverse laptop:items-center    laptop:mt-[60vw] desktop:flex-col-reverse desktop:items-center desktop:mt-[45vw] large:flex-col-reverse large:items-center large:mt-[52vw] '>
        <div>
        <h3 className='font-bold text-3xl pl-20'>View our newest Homes</h3>
        </div>
        <div className='flex justify-center gap-24 py-8 mobile:flex-col-reverse  mobile:items-center mobile:gap-6 tablet:flex-col-reverse  tablet:items-center tablet:gap-6 tabletlg:flex-col-reverse tabletlg:items-center tabletlg:gap-8 tabletxl:flex-col-reverse tabletxl:items-center tabletxl:gap-8 laptop:flex-col-reverse laptop:items-center laptop:gap-8'>
        <div className='flex gap-2 flex-col mobile:ml-8 '>
            <img src="https://www.theprivateworld.com/wp-content/uploads/2022/08/70-By-Night.jpg" className='w-104 h-72 mobile:w-[75vw] mobile:h-[95vw] tablet:w-[75vw] tablet:h-[60vw] tabletlg:w-[80vw] tabletlg:h-[75vw] tabletxl:w-[80vw] tabletxl:h-[75vw] laptop:w-[60vw] laptop:h-[35vw]' alt="" />
            <p className='font-medium text-xl capitalize mobile:text-lg tablet:text-lg tabletlg:text-lg'>8 bed 10 bath house in venica, california</p>
            <button className='bg-transparent w-36 h-11 capitalize pr-3 font-medium'>view details</button>
            <span className='relative left-28 bottom-9 font-medium'><HiOutlineArrowNarrowRight/></span>
         </div>

         <div className='flex gap-2 flex-col mt-24'>
            <img src="https://www.trulyclassy.com/wp-content/uploads/2019/05/villa-padma-phuket-featured-1.jpg" className='w-104 h-72 mobile:w-[75vw] mobile:h-[95vw] tablet:w-[75vw] tablet:h-[60vw] tabletlg:w-[80vw] tabletlg:h-[75vw] tabletxl:w-[80vw] tabletxl:h-[100vw] laptop:w-[60vw] laptop:h-[35vw]' alt="" />
            <p className='font-medium text-xl capitalize mobile:text-lg tablet:text-lg tabletlg:text-lg'>4 bed 2 bath house in Miami, florida</p>
            <button className='bg-transparent w-36 h-11 capitalize pr-3  font-medium '>view details</button>
            <span className='relative left-28 bottom-9 font-medium'><HiOutlineArrowNarrowRight/></span>
         </div>
        </div>

    </div>
  )
}

export default Sectionthree
