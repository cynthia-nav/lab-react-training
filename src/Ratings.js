import React from 'react';

function Rating(props) {

    let ratings = ''
    if (Math.round(props.children) === 0) {
        ratings= '☆☆☆☆☆'
    } else if (Math.round(props.children) === 1) {
        ratings = '★☆☆☆☆'
    } else if (Math.round(props.children) === 2) {
        ratings = '★★☆☆☆'
    } else if (Math.round(props.children) === 3) {
        ratings = '★★★☆☆'
    } else if (Math.round(props.children) === 4) {
        ratings = '★★★★☆'
    } else if (Math.round(props.children) === 5) {
        ratings = '★★★★★'
    }

    return (
        <div>
        {ratings}
        </div>
    );
}

export default Rating;