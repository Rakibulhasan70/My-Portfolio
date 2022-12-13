import React from 'react';
import easydoc from '../../src/image/easydoc.png'
import './Project2.css'
import { Link } from 'react-router-dom'

const EasyDocPoject = () => {
    return (
        <div>
            <div className='container div diver'>
                <div className='row '>
                    <div className='project-img col-lg-6 mt-5 '
                        data-aos="fade-down-left"

                        data-aos-delay="50"
                        data-aos-duration="1500"
                    >
                        <img src={easydoc} alt="" />
                    </div>
                    <div className='col-lg-6  '
                        data-aos="fade-down-right"

                        data-aos-delay="50"
                        data-aos-duration="1500"
                    >
                        <h4 className='Warehouse '>2. EasyDoc</h4>
                        <h4 className='Warehouse-title'>Full-Stack Project</h4>
                        <p className='project-description '>User can add a review, send an email, ask any qus and leave comments on various blogs, tutorials, courses, and paid purchase among other things.User can add a review, send an email, ask any qus and leave comments on
                            various blogs, tutorials, courses, and paid purchase among other things.
                        </p>
                        <div className='feature '>
                            <p className='padding'>ReactJs</p>
                            <p className='padding'>NodeJS</p>
                            <p className='padding'>MaterialUi</p>
                            <p className='padding'>Recharts</p>
                            <div className='ms-auto d-flex project-icon'>
                                <a href="https://github.com/Rakibulhasan70/EasyDoc-Client"> <i class="fa-brands fa-github padding   github me-3"></i></a>
                                <a href="https://endgame-53c9b.web.app/"><i class="fa-solid fa-arrow-up-right-from-square github ms-3"></i></a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default EasyDocPoject;