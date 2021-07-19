import React from "react";

//component
import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard.component";
import Premier from "../components/Premier/Premier.component";

const Homepage = () => {
    return <>  <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold text-gray-800 my-3">
            The Best of Entertainment
        </h1>
    <EntertainmentCardSlider />
    <Premier />
    </div>
    </>
};

export default Homepage;