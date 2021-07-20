import React from 'react'
import Slider from 'react-slick';

//component 
import Poster from '../Poster/poster.component';

//Configs
import PosterCarosalsettings from '../../config/PosterCarosal.config';

export const PosterSlider = (props) => {
    return (
        <>
            <div className="flex flex-col items-start px-2"> 
       <h3  className="text-white text-xl font-bold">
        {props.title}
        </h3>
       <p className="text-white text-sm ">
        {props.subtitle}
        </p>
       </div>
       
       <Slider {...PosterCarosalsettings}>
       {props.images.map((image) => (
           <Poster {...image} isDark />
       ) )}
       </Slider>
        </>
    );
}

export default Poster;