import React from 'react';
import './Projects.css'
import car2 from '../../src/image/car2.jpg'


const Projects = () => {
    return (
        <div className='container'>
            <h2 className='about mx-auto w-50 mt-5 mb-5 '><span className='heading'>Some Things I've Built</span></h2>
            <div className='row '>
                <div className='project-img col-lg-6 mt-5 '
                    data-aos="fade-down-left"

                    data-aos-delay="50"
                    data-aos-duration="1500"
                >
                    <img src={car2} alt="" />
                </div>
                <div className='col-lg-6 '
                    data-aos="fade-down-right"

                    data-aos-delay="50"
                    data-aos-duration="1500"
                >
                    <h4 className='Warehouse'>1. Car-Manufacture</h4>
                    <h4 className='Warehouse-title'>Full-Stack Project</h4>
                    <p className='project-description '>You can not login with fake token data or expired data.
                        We provide us for many extra services.
                        You can increase your purces item within maximum quantity
                        Admin can add or deleted the prats item


                    </p>
                    <div className='feature '>
                        <p className='padding'>Reactjs</p>
                        <p className='padding'>NodeJs</p>
                        <p className='padding'>Expressjs</p>
                        <p className='padding'>Firebase</p>
                        <div className='ms-auto '>
                            <a href="https://github.com/programming-hero-web-course1/manufacturer-website-client-side-Rakibulhasan70"> <i class="fa-brands fa-github padding   github me-3"></i></a>
                            <a href="https://assignment-12-client-c7d17.web.app/"><i class="fa-solid fa-arrow-up-right-from-square github ms-3"></i></a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Projects;