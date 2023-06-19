import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Navigation } from "swiper";
import "./swiper.css";
import {RxArrowLeft} from "react-icons/rx";
import {RxArrowRight} from "react-icons/rx";

import Features from "../Features";



const SectionOne = () => {
  const data=[{
    id:1,
    title: "Luxury villa in bali,indonesia",
    price: "$4,280,000",
    image: "https://cdn.lecollectionist.com/lc/production/uploads/photos/house-1910/2018-04-30-214088d759242733859024dd8690041f.jpg?q=65"

  },
  {
    id:2,
    title: "Luxury villa in bali,indonesia",
    price: "$4,280,000",
    image: "https://images.posarellivillas.com/property_posarelli/96037/xwide/dsc-5357-easyhdr.jpg"

  },
  {
    id:3,
    title: "Luxury villa in bali,indonesia",
    price: "$4,280,000",
    image: "https://images.posarellivillas.com/property_posarelli/96037/xwide/dsc-5357-easyhdr.jpg"

  },
  {
    id:4,
    title: "Luxury villa in bali,indonesia",
    price: "$4,280,000",
    image: "https://www.myluxoria.com/storage/app/uploads/public/610/c46/c1c/610c46c1cf95c327527993.jpg"

  },
]
  const[mySwiper,setmySwiper] = useState({});


  const prev = () => mySwiper.slidePrev();
  const next = () => mySwiper.slideNext();
   

  return (
   
<div className="main">

  

<Swiper

spaceBetween={50}
slidesPerView={1} 
pagination={{
  type: "fraction",
}}
navigation={true}
modules={[Pagination, Navigation]}
className="mySwiper"
onInit={(event) => setmySwiper(event)}
>


{data.map(item =>(
  
  <SwiperSlide key={item.id}>
    
  <div style={{backgroundImage:`url(${item.image})`}} className={`flex items-center w-full h-[100vh] bg-cover `}>
   <Features/>
        <div className='flex flex-col items-start  justify-center gap-2 ml-24 mobile:ml-0 mobile:items-center tablet:items-center tabletlg:ml-20 tabletxl:ml-24 laptop:ml-24 desktop:ml-24 text-white  '>
          <h1 className='font-bold text-5xl uppercase mobile:text-2xl tablet:text-4xl tabletlg:text-4xl tabletxl:text-4xl laptop:text-4xl desktop:text-4xl'>{item.title}</h1>
          <span className='text-lg  font-bold'>{item.price}</span>
          <button className='bg-black w-36 h-11 capitalize pr-3 hover:bg-yellow-700'>view home</button>
        
        </div>
        <div className="button z-40  relative top-80 left-96 text-white text-2xl flex gap-3 ">
          <button onClick={prev} >
             <RxArrowLeft/>
          </button>
          <button onClick={next}>
            <RxArrowRight/>
          </button>
      </div>
    </div>
  </SwiperSlide>
))}


</Swiper>

</div>




  );
};

export default SectionOne; 


/*

  import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Navigation } from "swiper";
import "./swiper.css";
import {RxArrowLeft} from "react-icons/rx";
import {RxArrowRight} from "react-icons/rx";
import { Link } from "react-router-dom";
import {BiChevronRight} from "react-icons/bi"



const SectionOne = () => {
  const data=[{
    id:1,
    title: "Luxury villa in bali,indonesia",
    price: "$4,280,000",
    image: "https://cdn.lecollectionist.com/lc/production/uploads/photos/house-1910/2018-04-30-214088d759242733859024dd8690041f.jpg?q=65"

  },
  {
    id:2,
    title: "Luxury villa in bali,indonesia",
    price: "$4,280,000",
    image: "https://images.posarellivillas.com/property_posarelli/96037/xwide/dsc-5357-easyhdr.jpg"

  },
  {
    id:3,
    title: "Luxury villa in bali,indonesia",
    price: "$4,280,000",
    image: "https://images.posarellivillas.com/property_posarelli/96037/xwide/dsc-5357-easyhdr.jpg"

  },
  {
    id:4,
    title: "Luxury villa in bali,indonesia",
    price: "$4,280,000",
    image: "https://www.myluxoria.com/storage/app/uploads/public/610/c46/c1c/610c46c1cf95c327527993.jpg"

  },
]
  const[mySwiper,setmySwiper] = useState({});


  const prev = () => mySwiper.slidePrev();
  const next = () => mySwiper.slideNext();
   

  return (
   
<div className="main">

  

<Swiper

spaceBetween={50}
slidesPerView={1} 
pagination={{
  type: "fraction",
}}
navigation={true}
modules={[Pagination, Navigation]}
className="mySwiper"
onInit={(event) => setmySwiper(event)}
>


{data.map(item =>(
  
  <SwiperSlide key={item.id}>
    
  <div style={{backgroundImage:`url(${item.image})`}} className={`flex items-center w-full h-[100vh] bg-cover `}>
  <div className="w-36 h-40 bg-white mb-[25vw] flex flex-col gap-4 pl-2 pt-4">
  
       <div className='flex'>
       <Link to="/about">category</Link>
       <span className='mt-1'><BiChevronRight/></span>
       </div>
       <div className='flex'>
       <Link to="/rentals">category</Link>
       <span className='mt-1'><BiChevronRight/></span>
       </div>
        <div className='flex'>
        <Link to="/test">category</Link>
        <span className='mt-1'><BiChevronRight/></span>
        </div>

</div>
        <div className='flex flex-col items-start  justify-center gap-2 ml-24 mobile:ml-0 mobile:items-center tablet:items-center tabletlg:ml-20 tabletxl:ml-24 laptop:ml-24 desktop:ml-24 text-white  '>
          <h1 className='font-bold text-5xl uppercase mobile:text-2xl tablet:text-4xl tabletlg:text-4xl tabletxl:text-4xl laptop:text-4xl desktop:text-4xl'>{item.title}</h1>
          <span className='text-lg  font-bold'>{item.price}</span>
          <button className='bg-black w-36 h-11 capitalize pr-3 hover:bg-yellow-700'>view home</button>
        
        </div>
        <div className="button z-40  relative top-80 left-96 text-white text-2xl flex gap-3 ">
          <button onClick={prev} >
             <RxArrowLeft/>
          </button>
          <button onClick={next}>
            <RxArrowRight/>
          </button>
      </div>
    </div>
  </SwiperSlide>
))}


</Swiper>

</div>




  );
};

export default SectionOne; 





*/


