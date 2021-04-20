import React from 'react';

function IdCard(props) {
    return (
        <div className="container">
        <div><img src={props.picture}></img></div>
        <div>
        <div><b>Last Name: </b>{props.lastName}</div>
        <div><b>First Name: </b>{props.firstName}</div>
        <div><b>Gender: </b>{props.gender}</div>
        <div><b>Height: </b>{props.height}</div>
        <div><b>Birth: </b>{props.birth}</div>
        </div>
    
        </div>
    )
}

export default IdCard;