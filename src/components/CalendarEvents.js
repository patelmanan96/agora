
import React, {Component} from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
    
    class CalendarEvents extends Component {
        
        render() {
            return (
                <div style={{marginRight: 20}}>
                    <h3 style={{textAlign:"left", marginBottom: 20}}><i>Upcoming Events</i></h3>
                    <FullCalendar
                        defaultView="dayGridMonth"
                        plugins={[dayGridPlugin]} 
                    />
                </div>
                
            )
        }
    }
        
    

      
  export default CalendarEvents;


