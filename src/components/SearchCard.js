import React from "react";

class SearchCard extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="card">
                <div className="card-header">
                    Featured
                </div>
                <div className="card-body">
                    <img src="..." className="card-img-top" alt="..."/>
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        )
    }
}
export default SearchCard;