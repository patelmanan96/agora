import React, { Component } from 'react';
import EventCard from '../models/EventCard';

class HostingCards extends Component {
    constructor(props){
        super(props) 
    }

    

    render(){
        const Cards = [
            new EventCard('https://images.unsplash.com/photo-1552799446-159ba9523315?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80', 'Talking about Climate Change', '3/11/2020 6:00pm'
            , 'West Village F', 'Detailed Desc.', []),
            new EventCard('https://images.unsplash.com/photo-1500100586562-f75ff6540087?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80', 'Game Genre and Personality Research Study', '4/24/3030 5:00pm', 'West Village H'
                , 'Detailed Desc.', ['dangerous']),
            new EventCard('https://images.unsplash.com/photo-1569437061241-a848be43cc82?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80', 'Mental Health Awareness Month', '4/20/2020 1:00pm', 'Ryder Hall'
                , 'Detailed Desc.', [])
            ];
        return( Cards.map(card => {
            return (
            <div className="card">
                <div className="card-header">
                    {card[2]}
                </div>
            <div className="card-body">
                <img src={card[0]} className="card-img-top img-fluid" alt="..."/>
                <h5 className="card-title">{card[1]}</h5>
                <p className="card-text">{card[4]}</p>
                <a href="#" className="btn btn-primary" onClick={this.props.clickMore}>More..</a>
            </div>
        </div>
            )
        })
            
        );
    }
}

export default HostingCards;