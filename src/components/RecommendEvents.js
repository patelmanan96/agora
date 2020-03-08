import React from 'react';
import SearchCard from './SearchCard';



const recommendEvents = () => (

        <div>
            <h3 style={{textAlign:"left", marginBottom: 85}}><i>Recommendations</i></h3>
            <div className="pre-scrollable bg-light">
            <div className="m-3">
                    <SearchCard />
                </div>
                <div className="m-3">
                    <SearchCard />
                </div>
                <div className="m-3">
                    <SearchCard />
                </div><div className="m-3">
                <SearchCard />
            </div>
          
        </div>
        </div>
        
        
    
    
        
    
);


export default recommendEvents;