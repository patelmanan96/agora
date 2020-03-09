import React, {Component} from 'react';
import CalendarEvents from '../components/CalendarEvents';
import RecommendEvents from '../components/RecommendEvents';
import Modal from '../components/Modal';
import EventSummary from '../components/EventSummary';
import Aux from '../hoc/Aux';


class Homepage extends Component {
    constructor(props){
        super(props);
    
        this.state = {
            eventInfo: {
                eventTitle: "",
                description:"",
                dateTime:"",
                address:"",
                organizer:""
            },
            
            attend: false,
            remove: false,
            host:false,
            eventDetail: false

        }
    } 

    eventDetailHandler = () => { //triggered when a calendar event clicked
        this.setState({eventDetail: true});
    }

    eventDetailCancleHandler = () => {
        this.setState({eventDetail: false})
    }

    render () {
        return (
            <Aux>
                <div className="container" style={{marginTop: 70}}>
                    <div className="row">
                        <div className="col-sm-7">
                            <CalendarEvents eventExamed={this.eventDetailHandler}/>
                        </div>
                        <div className="col-sm-5"> 
                            <RecommendEvents />
                        </div>
                    </div>
                    <Modal show={this.state.eventDetail} modalClosed={this.eventDetailCancleHandler}>
                        <EventSummary eventInfo={this.state.eventInfo}/>
                    </Modal>
                </div>
            </Aux>
            
                
            
        );
    }
}

export default Homepage;