import React from 'react';
import './Doctor.css';

const Doctor = (props) => {
    const { img, name, department, contact } = props.doctor;
    return (
        <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="card shadow-lg mb-3">
                {/* doctor image  */}
                <div className="mx-auto pt-3">
                    <img src={img} className="styled-image" alt="leader_image" />
                </div>

                {/* doctor description  */}
                <div className="card-body text-center">
                    <h5 className="card-title text-center text-primary">{name}</h5>
                    <p className="card-text text-center">{department}</p>
                    <p className="card-text text-center">{contact}</p>
                </div>
            </div>
        </div>
    );
};

export default Doctor;