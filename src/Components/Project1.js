import React from 'react';
import { Link } from 'react-router-dom';
import warehouse from '../../src/image/warehouse.png'
import './Project1.css'

const Project1 = () => {
    return (
        <div className='container div' >
            <div className='row ' >
                <div className='col-lg-6 des'
                    data-aos="fade-down-left"

                    data-aos-delay="50"
                    data-aos-duration="1500"
                >
                    <h4 className='Menufacture '>3. Warehouse Shop</h4>
                    <h4 className='manufacture-title full'>Full-Stack Project</h4>
                    <p className='project-des '>This is My Electronic Grocery website. In this wesite i was showing my all products which is very qualityful. And i also showoing some speciall offer prodcuts. If you are not login you can not show all products and order some products and update.</p>
                    <div className='featuress '>
                        <p className='padding'>Reactjs</p>
                        <p className='padding'>NodeJs</p>
                        <p className='padding'>Expressjs</p>
                        <p className='padding'>Firebase</p>
                        <div className='ms-auto socila project-icon'>
                            <a href="https://github.com/Rakibulhasan70/wareHouse-client-site"> <i class="fa-brands fa-github padding   github me-3"></i></a>
                            <a href="https://assignment-11-client-a557f.web.app/"><i class="fa-solid fa-arrow-up-right-from-square github ms-3"></i></a>

                        </div>
                    </div>
                </div>
                <div className='project-image col-lg-6 mt-5 '
                    data-aos="fade-down-right"

                    data-aos-delay="50"
                    data-aos-duration="1500"
                >
                    <img src={warehouse} alt="" />
                </div>
            </div>
            <Link to='/allprojects'> <button className='skills more'>show more</button></Link>
        </div>
    );
};

export default Project1;