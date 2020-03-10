import React from 'react';
import Aux from '../hoc/Aux';

const eventSummary = (props) => {
    // const eventSummary = Object.keys(props.eventInfo)
    //                     .map(infoKey => {
    //                     return(<li key={infoKey}>
    //                             <span style={{textTransform: 'capitalize'}}>{infoKey}</span>: {props.eventInfo[infoKey]}
    //                           </li>)
    //                     })
                        
    return (
        <Aux>
            <ul>
                Coming Soon!
            </ul>
            <button className="btn btn-outline-info mr-sm-4 my-2 my-sm-0" type="button">Attend</button>

        </Aux>
    )
}

export default eventSummary;