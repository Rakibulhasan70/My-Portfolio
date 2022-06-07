import React from 'react';
import car2 from '../../src/image/car2.jpg'
import './Project2.css'

const Project2 = () => {
    return (
        <div>
            <div className='container div diver'>
                <div className='row '>
                    <div className='project-img col-lg-6 mt-5 '>
                        <img src={car2} alt="" />
                    </div>
                    <div className='col-lg-6  '>
                        <h4 className='Warehouse '>3. Service Provider</h4>
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
                        <button className='skills more'>show more</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project2;