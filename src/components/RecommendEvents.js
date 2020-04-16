import React from 'react';
import SearchCard from './SearchCard';
import SearchService from "../services/SearchService";
import './RecommendationEvents.css';


const recommendEvents = (props) => (
    <div>
        <h3 style={{textAlign: "left", marginBottom: 85}}><i>Recommendations</i></h3>
        <div className="scrollbar">
            <div className="recmd bg-light">
                {props.cards.map((card) => {
                    return <div className="m-5">
                        <SearchCard cardProps={card} clickMore={props.eventDetail}
                                    attendEvent={props.attendEvent}
                                    cancelAttending={props.cancelAttending}
                        />
                    </div>
                })}
            </div>
        </div>
        
    </div>


);


export default recommendEvents;