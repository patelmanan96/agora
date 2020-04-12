import React from 'react';
import Aux from '../hoc/Aux';

const eventSummary = (props) => {
    console.log(props);
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