import React, { Component } from 'react';
import Aux from '../hoc/Aux';
import FilterBar from '../components/FilterBar';
import HostingEvents from '../components/HostingEvents';
import SearchService from '../services/SearchService';


class HostingPage extends Component {
    constructor(props) {
        super(props);
        
        

    }


        
    render( ) {
        return(
            <Aux>
                <div  className="container-fluid m-2 pre-scrollable" >
                    <div className="row m-3 bg-light text-dark">
                        <div className="col-sm">
                            <div className="mt-4">
                                <h3>Events you are hosting:</h3>
                            </div>
                        </div>

                        <div className="col-sm">
                            <FilterBar/>
                        </div>
                    </div>
                </div>
                <HostingEvents />
                
            </Aux>
            
        );
    }
}

export default HostingPage;