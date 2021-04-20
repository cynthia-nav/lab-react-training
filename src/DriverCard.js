import React from 'react';
import Rating from './Ratings';

function DriverCard(props) {
    return (
        <div className="dc">
           <div>{props.name}</div> 
           <Rating>{props.rating}</Rating> 
           <div><img src={props.img}></img></div>
           <div>{props.car.model}-{props.car.licensePlate}</div>
        </div>
    );
}

export default DriverCard;