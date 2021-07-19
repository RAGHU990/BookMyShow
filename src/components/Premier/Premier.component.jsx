import React from 'react'
import Slider from 'react-slick';

//component 
import Poster from '../Poster/poster.component';

export const Premier = () => {
              
  const settings = {
    infinite: false,
    autoplay: false,
    slidesToShow: 5,
    slidesToScroll: 2,
    InitialSlide: 0,
    responsive: [
      {
        breakpoints: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoints: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          InitialSlide: 1,
        },
      },
      {
        breakpoints: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const PremierImages = [
      {
         src:"https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/wonder-woman-1984-et00077622-22-02-2021-07-00-29.jpg",
         alt: "Wonder Women",
         title:"Wonder Women",
         subtitle:"English",
      },

      {
        src:"https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/wonder-woman-1984-et00077622-22-02-2021-07-00-29.jpg",
        alt: "Wonder Women",
        title:"Wonder Women",
        subtitle:"English",
     },

     {
        src:"https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/wonder-woman-1984-et00077622-22-02-2021-07-00-29.jpg",
        alt: "Wonder Women",
        title:"Wonder Women",
        subtitle:"English",
     },

     {
        src:"https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/wonder-woman-1984-et00077622-22-02-2021-07-00-29.jpg",
        alt: "Wonder Women",
        title:"Wonder Women",
        subtitle:"English",
     },

     {
        src:"https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/wonder-woman-1984-et00077622-22-02-2021-07-00-29.jpg",
        alt: "Wonder Women",
        title:"Wonder Women",
        subtitle:"English",
     },

     {
        src:"https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/wonder-woman-1984-et00077622-22-02-2021-07-00-29.jpg",
        alt: "Wonder Women",
        title:"Wonder Women",
        subtitle:"English",
     },

     {
        src:"https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/wonder-woman-1984-et00077622-22-02-2021-07-00-29.jpg",
        alt: "Wonder Women",
        title:"Wonder Women",
        subtitle:"English",
     },
      
         
  ]

   return  (
       <> 
       <Slider {...settings}>
       {PremierImages.map((image) => (
           <Poster {...image}/>
       ) )}
       </Slider>
        </>
   );
        
    
};

export default Premier;
