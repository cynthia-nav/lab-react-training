import React from 'react';
import visa from "./img/visa.png"
import mastercard from "./img/master-card.svg"

function CreditCard(props) {
    let cardStyle = {
        backgroundColor: props.bgColor,
        color: props.color
    }
    let img = ""

    if(props.type === "Visa") {
        img = visa
    } else img = mastercard

    return (
        <div className="card" style ={cardStyle}>
        <div><img src={img}/></div>
        <div>xxxx xxxx xxxx {props.number.slice(-4)}</div>
        <div>{props.expirationMonth}/{props.expirationYear}<span> {props.bank}</span></div>
        <div>{props.owner}</div>
            
        </div>
    );
}

export default CreditCard;