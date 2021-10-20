import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    // set doctors 
    const [doctors, setDoctors] = useState([]);

    // load doctors 
    useEffect(() => {
        fetch('./doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return (
        <div>
            <div className="container">
                {/* heading  */}
                <div className="mb-5">
                    <h2 className="text-center text-primary my-5">Our Doctors</h2>
                </div>

                {/* display doctors  */}
                <div className="row my-5">
                    {
                        doctors.map(doctor => <Doctor
                            key={doctor.id}
                            doctor={doctor}
                        ></Doctor>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Doctors;