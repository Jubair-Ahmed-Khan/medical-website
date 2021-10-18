import React from 'react';

const Footer = () => {
    const img = './images/footer/map.jpg';
    return (
        <div>
            <div>
                <div className='row m-0 py-3 px-3' style={{ backgroundColor: '#082032' }}>
                    <div className='col-lg-6 col-md-6 col-sm-5 col-12 d-flex justify-content-center align-items-center'>
                        <div className='px-3 px-sm-0'>
                            <h3 className='text-primary my-5 text-info'>Contact</h3>
                            <h6 className='text-white my-4'> <i className="fas fa-map-marker-alt pe-2 text-warning"></i> MediCare Hospital,Opposite of Ananda Community center,Dolairpar,Dhaka-1236</h6>
                            <h6 className='text-white my-3'> <i className="fas fa-phone pe-2 text-success"></i> +88-01626-324282</h6>
                            <h6 className='text-white my-3'> <i className="fas fa-envelope pe-2 text-danger"></i> medicarebd@gmail.com</h6>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-7 col-12 d-flex justify-content-center align-items-center'>
                        <div>
                            <h3 className='text-info text-center py-3'>Location</h3>
                            <img src={img} alt="" width='100%' height='300px' />
                        </div>
                    </div>
                    <p className='my-5 text-center text-white m-0 fs-5'>
                        &copy; 2021, All Rights Reserved by - <span className="text-info">MediCare</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;