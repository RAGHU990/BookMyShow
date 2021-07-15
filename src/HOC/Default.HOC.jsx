import React from "react";
import { Route } from "react-router-dom";

//layouts

import Defaultlayout from "../layouts/Default.layout";
 
const DefaultHOC = ({component: Component, ...rest}) => {
 return ( <> 
              <Route 
               {...rest}
                  component={(props) => (
                    <Defaultlayout>
                       <Component {...props}/>
                    </Defaultlayout>
               )}
               />
          </>
        );
};
export default DefaultHOC;