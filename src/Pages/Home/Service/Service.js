import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const { id, img, name, description } = props.service;
    const cardStyle = {
        height: "550px"
    }
    return (
        <div>
            <div className="col">
                <div style={cardStyle} className="card shadow-lg mb-3">
                    {/* service image  */}
                    <img src={img} className="card-img-top p-3" alt="course-img" style={{ height: "250px" }} />

                    {/* service info */}
                    <div className="card-body">
                        <h2 className="text-primary">{name}</h2>
                        <p className="mt-4">{description.slice(0, 150)} ...</p>
                    </div>

                    {/* service footer  */}
                    <div className="d-flex justify-content-center align-items-center">

                        {/* view details button  */}
                        <Link to={`/serviceDetails/${id}`} className="text-decoration-none">
                            <button type="button" className="btn btn-dark w-100 my-3 mx-auto text-center"> <span className="text-primary">View Details</span></button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;