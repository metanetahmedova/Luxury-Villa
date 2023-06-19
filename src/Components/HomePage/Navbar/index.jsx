import React, { useState } from 'react';
import { Link } from 'react-router-dom';



const Navbar = () => {
     const [show,setShow] = useState(false)
     window.onscroll =()=>{
          if(window.pageYOffset > 30) {
               setShow(true)
          }
          else{
               setShow(false)
          }
     }
  return (
    <div className={`${show ? "bg-yellow-700" : "bg-transparent"} z-50 flex justify-between px-20 py-4 mobile:px-4 tabletlg:px-32 tabletxl:px-32 laptop:px-36 desktop:px-36  items-center fixed  w-full bg-black`}>

    <div>
         <Link to="/" className='font-bold text-white  text-2xl mobile:text-2xl tablet:3xl tabletlg:text-2xl tabletxl:text-2xl laptop:text-2xl  desktop:text-2xl  '>ELIXR</Link>
    </div>
   <div className='flex gap-6 text-lg font-medium text-white mobile:hidden laptop:flex'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/rentals">Rentals</Link>
        <Link to="/test">TestPage</Link>
   </div>
   <div className='mt-3 mobile:hidden laptop:flex'>
        <button className='bg-black text-white font-medium py-2 px-5 mb-2'>Contact Us</button>
   </div>
   
 </div>
  );
}; 

export default Navbar;
     
 