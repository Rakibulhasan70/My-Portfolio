import React from 'react';
import './Projects.css'
import car2 from '../../src/image/car2.jpg'


const Projects = () => {
    return (
        <div className='container'>
            <h2 className='about mx-auto w-50 mt-5 mb-5 '><span className='heading'>Some Things I've Built</span></h2>
            <div className='row '>
                <div className='project-img col-lg-6 mt-5 '>
                    <img src={car2} alt="" />
                </div>
                <div className='col-lg-6  '>
                    <h4 className='Warehouse'>1. Car-Manufacture</h4>
                    <h4 className='Warehouse-title'>Full-Stack Project</h4>
                    <p className='project-description '>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.</p>
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