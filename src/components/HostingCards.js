import React, { Component } from 'react';

class HostingCards extends Component {
    constructor(props){
        super(props) 
        
    }
    render(){
        
            return (
            <div className="card">
                <div className="card-header">
                    {this.props.hostingCardProps.tag}
                </div>
            <div className="card-body">
                <img src={this.props.hostingCardProps.image} className="card-img-top img-fluid" alt="..."/>
                <h5 className="card-title">{this.props.hostingCardProps.title}</h5>
                <p className="card-text">{this.props.hostingCardProps.summary}</p>
                <a href="#" className="btn btn-primary" >More..</a>
            </div>
        </div>
            )
    
            
        
    }
}

export default HostingCards;