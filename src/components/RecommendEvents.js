import React from 'react';
import SearchCard from './SearchCard';
import SearchService from "../services/SearchService";


const recommendEvents = () => (
    <div>
        <h3 style={{textAlign: "left", marginBottom: 85}}><i>Recommendations</i></h3>
        <div className="pre-scrollable bg-light">
            {SearchService.getInstance().getRecommendedCards().map((card) => {
                return <div className="m-5">
                    <SearchCard cardProps={card}/>
                </div>
            })}
        </div>
    </div>


);


export default recommendEvents;