import React from 'react';
import Aux from '../hoc/Aux';

const eventSummary = (props) => {
    console.log(props);
    return (
        <Aux>
            {/* <div className='card' >
                <div className='card-header'><strong>{this.props.card.title}</strong></div>
                    <div className='card-body'>
                            <img class='card-img-top' src={this.props.card.image} 
                            alt='eventImg'/>
                            <h6 className="card-title mt-2">{this.props.card.summary}</h6>
                            <p className="card-text">
                            <strong> {this.props.card.date.toLocaleString()} </strong>
                            </p>
                            <p classNam="card-text">
                            <strong>{`Location: ${this.props.card.location}`} </strong>
                            </p>
                            <p className="card-text">
                                {this.props.card.description}
                            </p>
                            <button className="btn btn-primary">
                                Attend
                            </button> 
                    </div>
        </div>    */}
            <button className="btn btn-outline-info mr-sm-4 my-2 my-sm-0" type="button">Attend</button>

        </Aux>
    )
}

export default eventSummary;