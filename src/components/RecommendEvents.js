import React from 'react';
import SearchCard from './SearchCard';
import SearchService from "../services/SearchService";
import './RecommendationEvents.css';


const recommendEvents = (props) => (
    <div>
        <h3 style={{textAlign: "left", marginBottom: 85}}><i>Recommendations</i></h3>
        <div className="scrollbar">
            <div className="recmd bg-light">
                {SearchService.getInstance().getRecommendedCards().map((card,idx) => {
                    return <div className="m-5" key={`card-${idx}`}>
                        <SearchCard cardProps={card} clickMore={props.eventDetail}/>
                    </div>
                })}
            </div>
        </div>
        
    </div>


);


export default recommendEvents;