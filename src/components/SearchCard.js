import React from "react";

class SearchCard extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="card">
                <div className="card-header">
                    {this.props.cardProps.tag}
                </div>
                <div className="card-body">
                    <img src={this.props.cardProps.image} className="card-img-top img-fluid" alt="..."/>
                    <h5 className="card-title">{this.props.cardProps.title}</h5>
                    <p className="card-text">{this.props.cardProps.summary}</p>
                    <a href="#" className="btn btn-primary" onClick={this.props.clickMore}>More..</a>
                </div>
            </div>
        )
    }
}
export default SearchCard;