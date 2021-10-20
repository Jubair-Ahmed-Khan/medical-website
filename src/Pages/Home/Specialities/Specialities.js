import React, { useEffect, useState } from 'react';
import Speciality from '../Speciality/Speciality';

const Specialities = () => {

    // set specialities 
    const [specialities, setSpecialities] = useState([]);

    // speciality section banner image src 
    const imgSrc = './images/banner/banner-3.jpg';

    // load specialities 
    useEffect(() => {
        fetch('./specialities.json')
            .then(res => res.json())
            .then(data => setSpecialities(data))
    }, [])


    return (
        <div className="p-5" style={{ backgroundColor: "lightblue" }}>
            <div className="container-fluid my-5">
                <div className="row">

                    {/* speciality banner image container  */}
                    <div className="col-sm-12 col-md-6 col-lg-6 mb-5">
                        <div>
                            <img className="img-fluid" src={imgSrc} alt="" />
                        </div>
                    </div>

                    {/* specialities container  */}
                    <div className="col-sm-12 col-md-6 col-lg-6 mb-5">
                        <div>
                            <h2 className="text-primary">Why Choose Us</h2>
                            <p className="my-5">Our team of doctors, advanced care providers, nurses, therapists and researchers provide the region's most advanced medicine at multiple facilities, campuses, clinics and classrooms. We offer patients convenient access to innovative treatments and advancements that improve the health and overall wellbeing of our community.</p>
                        </div>

                        {/* display specialities  */}
                        <div>
                            {
                                specialities.map(speciality => <Speciality
                                    key={speciality.id}
                                    speciality={speciality}
                                >
                                </Speciality>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Specialities;