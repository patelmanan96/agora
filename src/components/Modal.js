import React from 'react';
import './Modal.css';
import Aux from '../hoc/Aux';
import Backdrop from './backdrop';


const modal = (props) => (
    <Aux>
        <Backdrop backdropClicked={props.modalClosed}/>
        <div className="Modal">
        {props.children}
        </div>
    </Aux>
    
);

export default modal;


