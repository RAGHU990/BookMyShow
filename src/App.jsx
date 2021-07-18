import {Route} from "react-router-dom";

//HOC
import DefaultHOC from "./HOC/Default.HOC";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Components
import Temp from "./components/temp";



function App() {
  return (
     <> 
     <Route/>
       <DefaultHOC  path ="/" component={Temp}/>
       
     </>
      
    
  );
}

export default App;
