import React from "react";
import {Outlet} from "react-router-dom";
import Navbar from "../Components/HomePage/Navbar";

const FixedComponent = ()=>{
    return(
        <div>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default FixedComponent; 


