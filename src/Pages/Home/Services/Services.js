import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    // set services 
    const [services, setServices] = useState([]);

    // load services 
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className="container">

                {/* service section heading  */}
                <h2 className="text-primary text-center pt-5">Special Services</h2>

                {/* display 6 services  */}
                <div className="row row-cols-lg-3 row-cols-md-3 row-cols-sm-1 py-5">
                    {
                        services.slice(0, 6).map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;