import React from 'react';

const Speciality = (props) => {

    // destructuring 
    const { icon, name, description } = props.speciality;

    // speciality icon style 
    const iconStyle = {
        fontSize: "30px",
        width: "20px",
        padding: "10px 0",
        color: "blue"
    }

    return (
        <div className="d-flex mt-4">

            {/* speciality icon  */}
            <i style={iconStyle} className={icon} alt=""></i>

            {/* speciality details  */}
            <div className="ms-5">
                <h3>{name}</h3>
                <p>{description}</p>
            </div>

        </div>
    );
};

export default Speciality;