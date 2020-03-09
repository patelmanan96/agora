import React from 'react';
import Aux from '../hoc/Aux';

const eventSummary = (props) => {
    const eventSummary = Object.keys(props.eventInfo)
                        .map(infoKey => {
                        return(<li key={infoKey}>
                                <span style={{textTransform: 'capitalize'}}>{infoKey}</span>: {props.eventInfo[infoKey]}
                              </li>)
                        })
                        
    return (
        <Aux>
            <ul>
                {eventSummary}
            </ul>
            <button>Attend</button>

        </Aux>
    )
}

export default eventSummary;