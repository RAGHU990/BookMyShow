
import axios from "axios";

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

// axios default settings
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;

function App() {
  return (
     <> 
    
       <DefaultHOC  path ="/" exact component={Homepage}/>
       <MovieHOC path ="/movie/:id" exact component={Moviepage}/>
       <DefaultHOC path ="/plays" exact component={Plays}/>
       
     </>
      
    
  );
}

export default App;
