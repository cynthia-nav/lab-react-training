import React, { useState } from 'react';

function ClickablePicture(props) {

    let [toggle, setToggle] = useState(false);

    return (
        <div>

        <img onClick={() => setToggle(!toggle)} src={toggle ? props.imgClicked : props.img} />

        </div>
    );
}

export default ClickablePicture;