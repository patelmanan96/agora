import React from 'react';
import './Modal.css';
import Aux from '../hoc/Aux';


const modal = (props) => (
    <Aux>
        <div className="Backdrop" onClick={props.closeModal}></div>
        <div className="Modal">
        {props.children}
        </div>
    </Aux>

    
);

export default modal;


