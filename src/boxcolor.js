import React from 'react';

function BoxColor(props) {
    let bgStyle = {
        backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
        padding: '50px',
    };
    
    return (
        <div className="container" style={bgStyle}>
        rgb({props.r}, {props.g}, {props.b})
        </div>
    );
}

export default BoxColor;