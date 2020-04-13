import React, {Component} from 'react';
import CalendarEvents from '../components/CalendarEvents';
import RecommendEvents from '../components/RecommendEvents';
import Modal from '../components/Modal';
import SingleEventModal from '../components/SingleEventModal';
import Aux from '../hoc/Aux';
import EventSummary from '../components/EventSummary';


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
    };

    eventDetailCancleHandler = () => {
        this.setState({eventDetail: false})
    };

    render () {
        return (
            <Aux>
                <div className="container mb-5 mt-5">
                    <div className="row">
                        <div className="container mb-5 col-sm-7">
                            <CalendarEvents examEvent={this.eventDetailHandler}/>
                        </div>
                        <div className="col-sm-5">
                            <RecommendEvents eventDetail={this.eventDetailHandler}/>
                        </div>
                    </div>
                    {this.state.eventDetail &&
                    <Modal closeModal={this.eventDetailCancleHandler}>
                       <EventSummary />
                    </Modal>}
                </div>
            </Aux>
            
                
            
        );
    }
}

export default Homepage;