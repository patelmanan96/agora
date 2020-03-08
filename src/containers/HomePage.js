import React, {Component} from 'react';
import CalendarEvents from '../components/CalendarEvents';
import RecommendEvents from '../components/RecommendEvents';


class Homepage extends Component {
    render () {
        return (
            
                <div className="container" style={{marginTop: 70}}>
                    <div className="row">
                        <div className="col-sm-7">
                            <CalendarEvents />
                        </div>
                        <div className="col-sm-5"> 
                            <RecommendEvents />
                        </div>
                    </div>
                </div>
           
            
        );
    }
}

export default Homepage;