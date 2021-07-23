import {Route} from "react-router-dom";

//HOC
import DefaultHOC from "./HOC/Default.HOC";
import MovieHOC from "./HOC/Movie.HOC";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Pages
import Homepage from "./pages/Home.page";
import Moviepage from "./pages/Movie.page";
import Plays from "./pages/Plays.page";


function App() {
  return (
     <> 
     <Route/>
       <DefaultHOC  path ="/" exact component={Homepage}/>
       <MovieHOC path ="/movie/:id" exact component={Moviepage}/>
       <DefaultHOC path ="/plays" exact component={Plays}/>
       
     </>
      
    
  );
}

export default App;
