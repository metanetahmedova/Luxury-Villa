import React from 'react'
import { Link } from "react-router-dom";
import {BiChevronRight} from "react-icons/bi"

const Features = () => {

    const categories =[
        {name:"category", id:1},
        {name:"category", id:2},
        {name:"category", id:3}
    ]
  return (

 <div>
    
       

        <div className="w-36 h-40 bg-black mb-[25vw] flex flex-col gap-4 pl-2 pt-4">

        {categories.map(item => (
  
        <div>
        <div className='flex text-white'>
          <div key={item.id}>
             <Link to={`/categories/${item.name}${item.id}`}>{item.name}</Link>  
          </div>
          

           <span className='mt-1'><BiChevronRight/></span>{item.id}
        </div>
      
        </div>
    
    )
       
    )

    }
     </div>


 </div>
  )
}

export default Features


