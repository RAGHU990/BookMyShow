import React from "react";

//Component //
import Navbar from "../components/Navbar/navbar.component";

const Defaultlayout = (props) => {
return ( 
      <>  
          <h1 className="text-xl"></h1>
          <Navbar />
          {props.children}
      </>
     );
};
 export default Defaultlayout;