
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
                        events={[
                            { title: 'Career Fair', date: '2020-03-24' },
                            { title: 'NetWorking', date: '2020-03-31' },
                            { title: 'TGIT', date: '2020-03-19' }
                          ]}
                        
                    />
                </div>
                
            )
        }
    }
        
    

      
  export default CalendarEvents;


