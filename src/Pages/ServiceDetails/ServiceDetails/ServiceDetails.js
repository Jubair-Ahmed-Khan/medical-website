import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import imga from '../../../images/404.jpg';

const ServiceDetails = () => {
    window.scrollTo(0, 0);
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


    // setTimeout(() => { }, 5000);

    const img = singleService?.img;
    const name = singleService?.name;
    const description = singleService?.description;



    return (
        <div style={{ backgroundColor: "bisque" }} >
            {/* <img src={img} className="card-img-top p-3" alt="course-img" style={{ height: "250px" }} /> */}
            <div className="d-flex justify-content-center align-items-center pb-5">
                <div className="card mb-3 my-5 mx-5" style={{ maxWidth: "540px" }}>
                    <div className="row g-0">
                        <div className="col-md-6">
                            <img src={img} className="card-img-top p-3" alt="course-img" style={{ height: "250px" }} />
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