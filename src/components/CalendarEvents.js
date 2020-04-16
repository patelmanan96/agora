import Aux from '../hoc/Aux';
import React, {Component} from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import SearchService from "../services/SearchService";


class CalendarEvents extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }


    render() {

        return (
            <Aux style={{marginRight: 20}}>
                <h3 style={{textAlign: "left", marginBottom: 20}}><i>Upcoming Events</i></h3>
                <FullCalendar
                    defaultView="dayGridMonth"
                    plugins={[dayGridPlugin]}
                    events={
                        SearchService.getInstance().getMyUpcomingCards().map(card => {
                            return {title: card.title, date: card.date, id: card.eventId}
                        })
                    }
                    eventClick={this.props.examEvent}
                />

            </Aux>

        )
    }
}


export default CalendarEvents;
