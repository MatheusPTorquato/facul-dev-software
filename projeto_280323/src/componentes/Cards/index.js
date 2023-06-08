import React from 'react';
import './Style.css';

export default function Card(props){
    return(
        <div className='card-container'>
            {props.children}
        </div>
    );
}