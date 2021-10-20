import React from 'react';
import { Link } from 'react-router-dom';

const Service = (props) => {

    // destructuring 
    const { id, img, name, description } = props.service;

    // service card style 
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
                        <p className="mt-3">{description.slice(0, 150)} ...</p>
                    </div>

                    {/* service footer  */}
                    <div className="d-flex justify-content-center align-items-center">

                        {/*view details button  */}
                        <button type="button" className="btn btn-dark w-100 my-3 mx-3 text-center">
                            <Link to={`/serviceDetails/${id}`} className="text-decoration-none">
                                <span className="ms-2 text-primary">View Details</span>
                            </Link>
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;