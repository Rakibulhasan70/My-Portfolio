import React from 'react';
import './AllProjects.css'
import menu from '../../src/image/menu.png'
import Card from 'react-bootstrap/Card';

const AllProjects = () => {
    return (
        <div className='container my-5 '>
            <div className='section'>
                <div className='proj'>
                    <Card style={{ width: '350px' }}>
                        <Card.Img variant="top" src={menu} style={{ height: '220px' }} />
                        <Card.Body style={{ backgroundColor: '#121b27' }}>
                            <Card.Title className='project-til'>Menufacture Car</Card.Title>
                            <Card.Text className='proj-des'>
                                You can not login with fake token data or expired data.
                                We provide us for many extra services.
                                You can increase your purces item within maximum quantity
                                Admin can add or deleted the prats item
                                <div className='margin mt-3'>
                                    <p className='padding'>Reactjs</p>
                                    <p className='padding'>NodeJs</p>
                                    <p className='padding'>Expressjs</p>
                                    <p className='padding'>Firebase</p>
                                </div>
                                <div className='ms-start  mt-1'>
                                    <a href="https://github.com/programming-hero-web-course1/manufacturer-website-client-side-Rakibulhasan70"> <i class="fa-brands fa-github  github"></i></a>
                                    <a href="https://assignment-12-client-c7d17.web.app/"><i class="fa-solid fa-arrow-up-right-from-square github ms-3"></i></a>
                                </div>

                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className='proj'>
                    <Card style={{ width: '350px' }}>
                        <Card.Img variant="top" src={menu} style={{ height: '220px' }} />
                        <Card.Body style={{ backgroundColor: '#121b27' }}>
                            <Card.Title className='project-til'> Warehouse Shop</Card.Title>
                            <Card.Text className='proj-des'>
                                You can not login with fake token data or expired data.
                                We provide us for many extra services.
                                You can increase your purces item within maximum quantity
                                Admin can add or deleted the prats item
                                <div className='margin mt-3'>
                                    <p className='padding'>Reactjs</p>
                                    <p className='padding'>NodeJs</p>
                                    <p className='padding'>Expressjs</p>
                                    <p className='padding'>Firebase</p>
                                </div>
                                <div className='ms-start  mt-3'>
                                    <a href="https://github.com/Rakibulhasan70/wareHouse-client-site"> <i class="fa-brands fa-github  github"></i></a>
                                    <a href="https://assignment-11-client-a557f.web.app/"><i class="fa-solid fa-arrow-up-right-from-square github ms-3"></i></a>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div>
                    <Card style={{ width: '350px' }}>
                        <Card.Img variant="top" src={menu} style={{ height: '220px' }} />
                        <Card.Body style={{ backgroundColor: '#121b27' }}>
                            <Card.Title className='project-til'>Service Provider</Card.Title>
                            <Card.Text className='proj-des'>
                                You can not login with fake token data or expired data.
                                We provide us for many extra services.
                                You can increase your purces item within maximum quantity
                                Admin can add or deleted the prats item
                                <div className='margin mt-3'>
                                    <p className='padding'>Reactjs</p>
                                    <p className='padding'>NodeJs</p>
                                    <p className='padding'>Expressjs</p>
                                    <p className='padding'>Firebase</p>
                                </div>
                                <div className='ms-start  mt-3'>
                                    <a href="https://github.com/Rakibulhasan70/Independent-service-provider"> <i class="fa-brands fa-github  github"></i></a>
                                    <a href="https://assignment-10-eecce.web.app/"><i class="fa-solid fa-arrow-up-right-from-square github ms-3"></i></a>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
        // <div className='container '>
        //     <h2 className='text-white text-center my-5'>My Projects</h2>\
        //     <div className='section'>
        //         <div className='proj-body'>
        //             <div className=''>
        //                 <img className='menu' src={menu} alt="" />
        //                 <h3 className='project-til'>Menufacture Car</h3>
        //                 <div className='card-body'>
        //                     <p className='proj-des'>You can not login with fake token data or expired data.
        //                         We provide us for many extra services.
        //                         You can increase your purces item within maximum quantity
        //                         Admin can add or deleted the prats item</p>
        //                 </div>
        //             </div>
        //         </div>
        //         <div>
        //             <div className='col'>
        //                 <img className='menu' src={menu} alt="" />
        //                 <h3 className='project-til'>Menufacture Car</h3>
        //                 <div className='card-body'>
        //                     <p className='proj-des'>You can not login with fake token data or expired data.
        //                         We provide us for many extra services.
        //                         You can increase your purces item within maximum quantity
        //                         Admin can add or deleted the prats item</p>
        //                 </div>
        //             </div>
        //         </div>
        //         <div>
        //             <div className='col'>
        //                 <img className='menu' src={menu} alt="" />
        //                 <h3 className='project-til'>Menufacture Car</h3>
        //                 <div className='card-body'>
        //                     <p className='proj-des'>You can not login with fake token data or expired data.
        //                         We provide us for many extra services.
        //                         You can increase your purces item within maximum quantity
        //                         Admin can add or deleted the prats item</p>
        //                 </div>
        //             </div>
        //         </div>

        //     </div>
        // </div>
    );
};

export default AllProjects;