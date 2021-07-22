import React from "react";
import {BiShareAlt , BiSearch, BiMenu, BiChevronDown} from "react-icons/bi";

    //MOBILE DEVICES//
const NavSm = () => {
    return <> 
    <div className="text-white flex items-center justify-between">
        <div>
            <h3 className="text-xl">Its All starts here</h3>
            
        </div>
          <div className="w-8 h-8">
             <BiShareAlt className="w-full h-full"/>
          </div>
    </div>
    
    </>;
};

    

   //LARGE DEVICES//
const NavLg = () => {
return <>
<div className="container mx-auto px-4 flex items-center justify-between">
    <div className="flex items-center w-1/2 gap-3">
        <div className="w-12 h-12">
            <img src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png" alt="MyLogo" // Navbar images //
            className="w-full h-full" />
        </div>
        <div className="w-full flex items-center gap-3 bg-white px-3 py-2 rounded-md">
             <BiSearch/>
                 <input type="search" className="w-full bg-transparent border-none focus:outline-none"
                 placeholder="Search for Movies, Plays,Events,Sports and Activities" />
         </div>

    </div>
    <div >
        <div className=" flex items-center gap-3" >
        <span className="text-gray-400 text-xs flex items-center hover:text-white cursor-pointer" >
                Madurai <BiChevronDown/>
            </span>
            <div>
            <button className="bg-red-600 text-white px-1 py-1 text-sm rounded">Sign in</button>
            </div>
            <div className="text-white w-8 h-8">
                <BiMenu className="w-full h-full flex items-center"/>
            </div>
           
            
        </div>
    
    </div>
</div>
 </>;
};
  //MAIN NAVBAR//
const MovieNavbar = () => {
    return  <> 
       <nav className=" absolute inset-x-0 z-30 bg-opacity-10 backdrop-filter backdrop-blur-lg lg:relative lg:bg-bms-700 p-4">
       <div className="md:hidden">{/*MOBILE SCREEN*/}
       <NavSm/>
       </div>
       <div className="hidden md:block lg:hidden">{/*Midium SCREEN*/}
       <NavSm/>
       </div>
       <div className="hidden lg:flex"> {/*Large SCREEN*/}
       <NavLg/>
       </div>
      </nav> 
    </>;
};

export default MovieNavbar;