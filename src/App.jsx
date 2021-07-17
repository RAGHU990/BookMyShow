import {Route} from "react-router-dom";

//HOC
import DefaultHOC from "./HOC/Default.HOC";

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
