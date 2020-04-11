import React from "react";

class SearchCard extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="card">
                <div className="card-header">
                    <h5>{this.props.cardProps.title}</h5>
                </div>
                <div className="card-body">
                    <img src={this.props.cardProps.image} className="card-img-top img-fluid" alt="..."/>
                    <h6 className="card-title mt-2">{this.props.cardProps.summary}</h6>
                    <p className="card-text">{this.props.cardProps.date.toLocaleString()}</p>
                    <a href="#" className="btn btn-primary" onClick={this.props.clickMore}>More..</a>
                </div>
            </div>
        )
    }
}
export default SearchCard;