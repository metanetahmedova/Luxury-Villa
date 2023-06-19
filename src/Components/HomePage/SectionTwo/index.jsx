import React from 'react';



const SectionTwo = () => {
  
  return (
    <div className='flex h-screen py-20 justify-center gap-28 mobile:flex-col-reverse mobile:items-center mobile:gap-10 tablet:flex-col-reverse tablet:items-center  tablet:gap-8 tabletlg:flex-col-reverse tabletlg:items-center tabletlg:mt-8 tabletlg:gap-8 tabletxl:flex-col-reverse tabletxl:items-center tabletxl:mt-8 tabletxl:gap-8 laptop:flex-col-reverse laptop:items-center laptop:gap-6 laptop:mt-24 desktop:flex-col-reverse desktop:items-center desktop:gap-6 desktop:mt-24 large:flex-row '>
       <div className='flex  flex-col gap-2 justify-center mobile:items-center mobile:gap-3 tablet:items-center tabletlg:items-center tabletlg:gap-3 tabletxl:gap-3 tabletxl:items-center laptop:gap-3 laptop:items-center'>
           <h3 className='font-bold text-3xl mobile:text-center mobile:text-2xl tablet:text-3xl tabletlg:text-3xl tabletxl:text-3xl laptop:text-3xl'>Explore  our beatiful homes</h3>
           <p className='text-lg  mobile:text-base mobile:px-14 tablet:text-base tabletlg:text-base tabletxl:text-base laptop:text-base large:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos <br /> quidem earum nesciunt cumque voluptas rem at praesentium <br /> adipisci fuga minus repudiandae, </p> <br />
           <p className='text-lg mobile:text-base mobile:px-14 tablet:text-base tabletlg:text-base tabletxl:text-base laptop:text-base large:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit  Quos <br /> quidem earum nesciunt cumque voluptas rem at praesentium </p>
           <button className='w-28 h-10 bg-black text-white capitalize text-base'>view homes</button>
       </div>
       <div>
           <img src="https://s3.ap-southeast-2.amazonaws.com/assets.stannard-homes-2019/app/uploads/2021/02/12154407/locvTgig-1024x947.jpeg" 
           className='w-[70vw] h-[20vw] object-cover  mobile:w-[75vw] mobile:h-[70vw]  tablet:w-[75vw] tablet:h-[70vw] tabletlg:w-[70vw] tabletlg:h-[80vw] tabletxl:w-[70vw] tabletxl:h-[90vw] laptop:w-[70vw] laptop:h-[50vw] desktop:w-[70vw] desktop:h-[45vw] large:w-[45vw] large:h-[45vw]' alt="" />
       </div>
        
    </div>
  );
};

export default SectionTwo;