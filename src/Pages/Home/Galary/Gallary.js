import React from 'react';

const Gallary = (props) => {
    const { img } = props.gallary;
    const imgStyle = {
        width: "100%",
        height: "300px",
        marginTop: "20px",
        borderRadius: "20px",

    }
    return (
        <div className="col">
            <img className="shadow-lg" style={imgStyle} src={img} alt="" />
        </div>
    );
};

export default Gallary;