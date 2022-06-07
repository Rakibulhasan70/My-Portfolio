import React from 'react';
import car2 from '../../src/image/car2.jpg'
import './Project1.css'

const Project1 = () => {
    return (
        <div className='container div' >
            <div className='row ' >
                <div className='col-lg-6 des'  >
                    <h4 className='Menufacture '>2. Warehouse Shop</h4>
                    <h4 className='manufacture-title full'>Full-Stack Project</h4>
                    <p className='project-des '>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.</p>
                    <div className='featuress '>
                        <p className='padding'>Reactjs</p>
                        <p className='padding'>NodeJs</p>
                        <p className='padding'>Expressjs</p>
                        <p className='padding'>Firebase</p>
                        <div className='ms-auto socila'>
                            <a href="https://github.com/programming-hero-web-course1/manufacturer-website-client-side-Rakibulhasan70"> <i class="fa-brands fa-github padding   github me-3"></i></a>
                            <a href="https://assignment-12-client-c7d17.web.app/"><i class="fa-solid fa-arrow-up-right-from-square github ms-3"></i></a>

                        </div>
                    </div>
                </div>
                <div className='project-image col-lg-6 mt-5 ' >
                    <img src={car2} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Project1;