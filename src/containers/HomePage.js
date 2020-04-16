import React, {Component} from 'react';
import CalendarEvents from '../components/CalendarEvents';
import RecommendEvents from '../components/RecommendEvents';
import Modal from '../components/Modal';
import Aux from '../hoc/Aux';
import EventSummary from '../components/EventSummary';
import SearchService from "../services/SearchService";
import SearchCard from "../components/SearchCard";



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
            eventDetail: false,
            cards: SearchService.getInstance().getRecommendedCards()

        };

        this.searchService= SearchService.getInstance();
    }

    eventDetailHandler = (event) => { //triggered when a calendar event clicked
        // Card to be modaly displayed
        let cardSelected = SearchService.getInstance().findCardById(event.event.id);
        this.setState({eventDetail: true});
    };

    eventDetailCancleHandler = () => {
        this.setState({eventDetail: false})
    };

    attendEvent = (card) => {
        card.attending = true;
        this.searchService.updateCard(card);
        this.setState({cards: this.searchService.getRecommendedCards()})
    };

    cancelAttending = (card) => {
        card.attending = false;
        this.searchService.updateCard(card);
        this.setState({cards: this.searchService.getRecommendedCards()})
    };

    render () {
        return (
            <Aux>
                <h4 style={{marginTop:"50px", color:"rgba(22, 96, 171, 0.97)"}}><strong><i>Spot your events at NU!</i></strong></h4>
                <div className="container mb-5 mt-5">
                    <div className="row">
                        <div className="container mb-5 col-sm-7">
                            <CalendarEvents examEvent={this.eventDetailHandler}/>
                        </div>
                        <div className="col-sm-5">
                            <RecommendEvents
                            cards={this.state.cards}
                                eventDetail={this.eventDetailHandler}
                                             attendEvent={this.attendEvent}
                                             cancelAttending={this.cancelAttending}
                            />
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
