import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

// single service display function 
const ServiceDetails = () => {

    window.scrollTo(0, 0);

    // get service id 
    let { serviceId } = useParams();
    serviceId = parseInt(serviceId);

    // set details 
    const [details, setDetails] = useState([]);

    // load services 
    useEffect(() => {
        fetch("/services.json")
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])

    //find single service from services
    const singleService = details.find(detail => detail.id === serviceId);

    // set services properties in variables 
    const img = singleService?.img;
    const name = singleService?.name;
    const description = singleService?.description;



    return (
        <div style={{ backgroundColor: "bisque" }} >

            <div className="d-flex justify-content-center align-items-center pb-5">

                {/* service container  */}
                <div className="card mb-3 my-5 mx-5" style={{ maxWidth: "540px" }}>
                    <div className="row g-0">

                        {/* service image  */}
                        <div className="col-md-6">
                            <img src={img} className="card-img-top p-3" alt="course-img" style={{ height: "250px" }} />
                        </div>

                        {/* service details  */}
                        <div className="col-md-6">
                            <div className="card-body">
                                <h5 className="card-title">{name}</h5>
                                <p className="card-text">{description}</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;