import React from "react";

//Component 
import Navbar from "../components/Navbar/navbar.component";
import HeroCarosal from "../components/HeroCarosal/HeroCarosal.component";

const Defaultlayout = (props) => {
return ( 
      <>  
          <Navbar />
          <HeroCarosal/>
          {props.children}
      </>
     );
};
 export default Defaultlayout;