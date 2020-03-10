import React from 'react';
import HostingCards from './HostingCards';
import SearchService from "../services/SearchService";


const hostingEvents = (props) => (
    <div>

        <div className="pre-scrollable bg-light">
            {SearchService.getInstance().getHostingCards().map((card) => {
                return <div className="m-5">
                    <HostingCards hostingCardProps={card} clickMore={props.eventDetail}/>
                </div>
            })}
        </div>
    </div>


);


export default hostingEvents;