// import React from 'react';
import React, {useState} from 'react'

function LikeButton(props) {
    const up = () =>setCounter(counter++)
    let [counter,setCounter] = useState(0)


    return (
        <div>
            <button onClick={up}>{counter} Likes</button> 
        </div>
    );
}

export default LikeButton;