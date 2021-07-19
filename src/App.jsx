import {Route} from "react-router-dom";

//HOC
import DefaultHOC from "./HOC/Default.HOC";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Pages
import Homepage from "./pages/Home.page";



function App() {
  return (
     <> 
     <Route/>
       <DefaultHOC  path ="/" component={Homepage}/>
       
     </>
      
    
  );
}

export default App;
