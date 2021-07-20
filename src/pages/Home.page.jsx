import React from "react";

//component
import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard.component";
import { PosterSlider } from "../components/PosterSlider/Posterslider.component";

//config
import TempPoster from "../config/TempPoster.config"

const Homepage = () => {
    return <> 
    <div className="flex flex-col gap-10">
      <div className="container mx-auto px-4 ">

        <h1 className="text-2xl font-bold text-gray-800 my-3">
            The Best of Entertainment
        </h1>
        <EntertainmentCardSlider />
     </div>

     <div className="bg-bms-800 py-16">
         

        <div className="container mx-auto  px-4 flex flex-col gap-3 ">
        <div className=" hidden  md:flex">
             <div className="w-full h-full">
                 <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
                  alt="premier logo" 
                  className="w-full h-full" />
             </div>
             
         </div>
        <PosterSlider  images={TempPoster} title="Premieres" subtitle="Brand new releases every Friday"/>
        </div>
    
     </div>
       
    </div>
    
    </>
};

export default Homepage;