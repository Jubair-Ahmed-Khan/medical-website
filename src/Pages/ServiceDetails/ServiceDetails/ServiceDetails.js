import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {
    let { serviceId } = useParams();
    serviceId = parseInt(serviceId);
    const [details, setDetails] = useState([]);

    useEffect(() => {
        fetch("/services.json")
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])

    //console.log(details);
    const singleService = details.find(detail => detail.id === serviceId);


    setTimeout(() => { }, 5000);

    const img = singleService?.img;
    const name = singleService?.name;
    const description = singleService?.description;

    console.log(img);


    return (
        <div style={{ backgroundColor: "bisque" }} >
            <div className="d-flex justify-content-center align-items-center pb-5">
                <div className="card mb-3 my-5 mx-5" style={{ maxWidth: "540px" }}>
                    <div className="row g-0">
                        <div className="col-md-6">
                            <img style={{ width: "200px", height: "200px" }} src={img} className="img-fluid rounded-start" alt="..." />
                        </div>
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