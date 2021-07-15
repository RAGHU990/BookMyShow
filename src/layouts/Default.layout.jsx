import React from "react";

const Defaultlayout = (props) => {
return ( 
      <>  
          <h1 className="text-xl">Default layout</h1>
          {props.children}
      </>
     );
};
 export default Defaultlayout;