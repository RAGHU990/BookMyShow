import React from 'react'

//icons
import {FaApplePay, FaCcVisa} from "react-icons/fa"

//component
import MovieHero from '../components/MovieHero/MovieHero.component';
import Cast from '../components/Cast/Cast.component';
import { PosterSlider } from "../components/PosterSlider/Posterslider.component";

//config
import TempPoster from "../config/TempPoster.config"


 const Moviepage = () => {

    const settings = {
        infinite: false,
        speed:500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesTocroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
        ],
      };
    

    return (
         <>
            <MovieHero/>
         <div className="container my-12 px-4 lg:ml-20 lg:w-2/3 ">
           <div className="flex flex-col items-start gap-3">
             <h2 className="text-gray-800 font-bold text-2xl">About the movie</h2>
              <p>
                  Bruce Wayne and Diana Prince try to bring the metahumans of Earth together 
                  after the death of Clark Kent. Meanwhile, Darkseid sends Steppenwolf to 
                  Earth with an army to subjugate humans.
              </p>
           </div>
           <div className="my-8">  
               <hr/>
           </div>
         
         <div className="my-8">
             <h2 className="text-gray-800 font-bold text-2xl mb-3">
                 Applicable offers
             </h2>

             <div className="flex flex-col gap-3 lg:flex-row"> 

             <div className="flex items-start gap-2 bg-yellow-100 p-3 border-2 border-yellow-400 border-dashed rounded-xl">
                 <div className="w-8 h-8"> 
                 <FaCcVisa className="w-full h-full" />
                 </div>
                 
                 <div className="flex flex-col items-start">
                     <h3 className="text-gray-700 text-xl font-bold">
                         Visa Stream Offers
                     </h3>
                     <p className="text-gray-600 "> 
                          Get 50% off up to INR 150 on all RuPay cards* 
                          on BookMyShow Stream.
                     </p>
                 </div>
             </div>

             <div className="flex items-start gap-2 bg-yellow-100 p-3 border-2 border-yellow-400 border-dashed rounded-xl">
                 <div className="w-8 h-8"> 
                 <FaApplePay className="w-full h-full" />
                 </div>
                 
                 <div className="flex flex-col items-start">
                     <h3 className="text-gray-700 text-xl font-bold">
                         Filmy Pass
                     </h3>
                     <p className="text-gray-600"> 
                          Get Rs.75* off on 3 movies you buy/rent on Stream.
                          Buy Filmy Pass @Rs.99
                     </p>
                 </div>

             </div>

             <div className="my-8">
                <hr/>
             </div>

             </div>
             
         </div>
          
         <div className="my-8">  
               <hr/>
           </div>
          <div className="my-8">
          <h2 className="text-gray-800 font-bold text-2xl mb-4">Cast</h2>
          <div className="flex flex-wrap gap-4">

              <Cast image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/ben-affleck-292-12-09-2017-05-12-16.jpg"
                castName="Ben Affleck"
                role="Batman" />

             <Cast image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/henry-cavill-23964-04-05-2020-04-25-14.jpg"
                castName="Henry Cavill"
                role="Superman" />  

             <Cast image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/gal-gadot-11088-17-10-2017-11-45-36.jpg"
                castName="Gal Gadot"
                role="Wonder Women" /> 

             <Cast image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/jason-momoa-25617-24-03-2017-17-39-52.jpg"
                castName="Jason Momoa"
                role="Aquaman" /> 
          </div>

          </div>

         <div className="my-8">
         <PosterSlider 
         config={settings} 
          images={TempPoster} 
           title="You might also like"
           isDark={false}
         />
         </div>
         <div className="my-8">
         <PosterSlider 
         config={settings} 
          images={TempPoster} 
           title="BMS XCLUSIV"
           isDark={false}
         />
         </div>
          
         </div>
            
        </>
    )
}
 export default Moviepage;
