import React from 'react';

const Banner = () => {
    const src = './images/banner/banner-4.png';
    return (
        <div>
            <div>
                <div className="container">
                    <div className="row py-5">

                        {/* header text  */}
                        <div className="col-sm-12 col-md-8 col-lg-6 my-5">
                            <div>
                                <h1 className="text-primary text-uppercase">
                                    We Provide Treatment <br />
                                    to our Patient in<br />
                                    Most Effective Way

                                </h1>
                                <p className="my-5 opacity-75">
                                    Facing Health related issues ? Feeling dizzy ? Suffering from a severe headache? Feeling deep pain? We are here to sort out and take care of any health related issues of yours.
                                </p>
                                <a className="btn btn-dark text-white" href="https://www.youtube.com">Explore Us</a>
                            </div>
                        </div>

                        {/* header image  */}
                        <div className="col-sm-12 col-md-8 col-lg-6">
                            <div className="ms-5">
                                <img className="img-fluid" src={src} alt="welcome_image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;