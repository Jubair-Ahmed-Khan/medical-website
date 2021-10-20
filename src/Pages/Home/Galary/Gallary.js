import React from 'react';

const Gallary = (props) => {
    // destructuring 
    const { img } = props.gallary;

    // gallary image style 
    const imgStyle = {
        width: "100%",
        height: "300px",
        marginTop: "20px",
        borderRadius: "20px",

    }

    return (

        // display gallary image 
        <div className="col">
            <img className="shadow-lg" style={imgStyle} src={img} alt="" />
        </div>
    );
};

export default Gallary;