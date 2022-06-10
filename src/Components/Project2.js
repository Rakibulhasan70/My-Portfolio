import React from 'react';
import gym from '../../src/image/gym.jpg'
import './Project2.css'
import { Link } from 'react-router-dom'

const Project2 = () => {
    return (
        <div>
            <div className='container div diver'>
                <div className='row '>
                    <div className='project-img col-lg-6 mt-5 '>
                        <img src={gym} alt="" />
                    </div>
                    <div className='col-lg-6  '>
                        <h4 className='Warehouse '>3. Service Provider</h4>
                        <h4 className='Warehouse-title'>Full-Stack Project</h4>
                        <p className='project-description '>But if you are try to login with fake token i can not permission to you for login. Overall this is my simple grocery website.But if you are try to login with fake token i can not permission to you for login.</p>
                        <div className='feature '>
                            <p className='padding'>Firebase</p>
                            <p className='padding'>Router</p>
                            <p className='padding'>Bootstarp</p>
                            <p className='padding'>Toastify</p>
                            <div className='ms-auto '>
                                <a href="https://github.com/Rakibulhasan70/Independent-service-provider"> <i class="fa-brands fa-github padding   github me-3"></i></a>
                                <a href="https://assignment-10-eecce.web.app/"><i class="fa-solid fa-arrow-up-right-from-square github ms-3"></i></a>
                            </div>
                        </div>
                        <Link to='/allprojects'> <button className='skills more'>show more</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project2;