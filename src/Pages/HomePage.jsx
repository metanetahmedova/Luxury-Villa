import React, { useState } from 'react';
import SectionOne from '../Components/HomePage/SectionOne';
import Sectionthree from '../Components/HomePage/SectionThree';
import SectionTwo from '../Components/HomePage/SectionTwo';
import Footer from '../Components/HomePage/Footer';



const HomePage = () => {

  const[buttonSHow,setButtonShow] = useState(false)

  window.onscroll =()=>{
    if(window.pageYOffset > 50){
      setButtonShow(true)
    }
    else {
      setButtonShow(false)
    }
  }
  return (
   <div>
     <SectionOne/>
     <SectionTwo/>
     <Sectionthree/>
     <Footer/>

     <button onClick={()=> window.scrollTo(0,0)} className={`${buttonSHow ? "block" : "hidden"} fixed bottom-[10vh] right[10vh] bg-yellow-700 h-10 w-20`}>Up</button>
    
   </div>
  );
}; 

export default HomePage;