import React from 'react';
import './Modal.css';
import Aux from '../hoc/Aux';


const modal = (props) => (
    <Aux>
        <div className="Backdrop" onClick={props.closeModal}></div>
        <div className="scrollbar">
            <div className="Modal event-detail">
            {props.children}
            </div>
        </div>
        
    </Aux>

    
);

export default modal;


