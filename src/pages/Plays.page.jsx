import React from 'react'

//component 
import Poster from "../components/Poster/poster.component"
import PlaysFilter from '../components/PlaysFilters/PlaysFilter.component'


const Plays = () => {
    return (
        <>
            <div className="container mx-auto px-4">
            

                <div className="w-full  lg:flex flex-row-reverse">
                    <div className="lg:w-3/4 ">
                    <h2 className="text-2xl font-bold mb-4"> 
                        Plays in Madurai 
                    </h2>
                    
                    
                    <div className="flex flex-wrap  ">

                        <div className="w-1/2 my-3 lg:w-3/12 md:w-1/3">
                        <Poster src="https://in.bmscdn.com/nmcms/events/banner/weblisting/ellamae-thamash-than-et00311042-2021-5-13-t-14-31-16.jpg"  
                       title="Ellamae Thamash Than"
                       subtitle="Comedy,| Drama | Tamil | All age groups | 12hrs"
                       />
                        </div>

                        <div className="w-1/2 my-3 lg:w-3/12 md:w-1/3">
                        <Poster src="https://in.bmscdn.com/nmcms/events/banner/weblisting/ellamae-thamash-than-et00311042-2021-5-13-t-14-31-16.jpg"  
                       title="Ellamae Thamash Than"
                       subtitle="Comedy,| Drama | Tamil | All age groups | 12hrs"
                       />
                        </div>

                        <div className="w-1/2 my-3 lg:w-3/12 md:w-1/3">
                        <Poster src="https://in.bmscdn.com/nmcms/events/banner/weblisting/ellamae-thamash-than-et00311042-2021-5-13-t-14-31-16.jpg"  
                       title="Ellamae Thamash Than"
                       subtitle="Comedy,| Drama | Tamil | All age groups | 12hrs"
                       />
                        </div>

                        <div className="w-1/2 my-3 lg:w-3/12 md:w-1/3">
                        <Poster src="https://in.bmscdn.com/nmcms/events/banner/weblisting/ellamae-thamash-than-et00311042-2021-5-13-t-14-31-16.jpg"  
                       title="Ellamae Thamash Than"
                       subtitle="Comedy,| Drama | Tamil | All age groups | 12hrs"
                       />
                        </div>

                        <div className="w-1/2 my-3 lg:w-3/12 md:w-1/3">
                        <Poster src="https://in.bmscdn.com/nmcms/events/banner/weblisting/ellamae-thamash-than-et00311042-2021-5-13-t-14-31-16.jpg"  
                       title="Ellamae Thamash Than"
                       subtitle="Comedy,| Drama | Tamil | All age groups | 12hrs"
                       />
                        </div>

                        <div className="w-1/2 lg:w-3/12 md:w-1/3">
                        <Poster src="https://in.bmscdn.com/nmcms/events/banner/weblisting/ellamae-thamash-than-et00311042-2021-5-13-t-14-31-16.jpg"  
                       title="Ellamae Thamas my-3 h Than"
                       subtitle="Comedy,| Drama | Tamil | All age groups | 12hrs"
                       />
                        </div>

                        <div className="w-1/2 lg:w-3/12 md:w-1/3">
                        <Poster src="https://in.bmscdn.com/nmcms/events/banner/weblisting/ellamae-thamash-than-et00311042-2021-5-13-t-14-31-16.jpg"  
                       title="Ellamae Thamas my-3 h Than"
                       subtitle="Comedy,| Drama | Tamil | All age groups | 12hrs"
                       />
                        </div>

                        <div className="w-1/2 lg:w-3/12 md:w-1/3">
                        <Poster src="https://in.bmscdn.com/nmcms/events/banner/weblisting/ellamae-thamash-than-et00311042-2021-5-13-t-14-31-16.jpg"  
                       title="Ellamae Thamas my-3 h Than"
                       subtitle="Comedy,| Drama | Tamil | All age groups | 12hrs"
                       />
                        </div>

                        
                      
                    </div>

              </div>
                    <div className="lg:w-3/12 ">
                    <h2 className="text-2xl font-bold mb-4"> 
                        Filter
                    </h2>
                    <PlaysFilter
                title="Date"
                tags={["Today", "Tomorrow", "This Weekend"]}
              />
              <PlaysFilter
                title="Language"
                tags={["Tamil", "Telegu", "English"]}/>
                    </div>
                </div>


                
            </div>
        </> 
    )
}

export default Plays;
