import React from "react";
import {Link} from 'react-router-dom';

class Upcoming extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container mt-5"><div className="alert alert-success" role="alert">
                <h4 className="alert-heading">This Feature is Coming Soon...</h4>
                <p>You will be able to see upcoming events on this page. Currently the page is under
                    development.</p>
                <br/>
                <p className="mb-0">Thank you for using this page.</p>
            </div></div>

        )
    }
}
export default Upcoming;