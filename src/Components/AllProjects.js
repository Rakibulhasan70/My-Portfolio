import React from 'react';
import './AllProjects.css'
import menu from '../../src/image/menu.png'
import Card from 'react-bootstrap/Card';
import ware from '../../src/image/ware.png'
import service from '../../src/image/service.png'
import laptop from '../../src/image/laptop.png'
import pretty from '../../src/image/pretty.png'
import convention from '../../src/image/convention.png'

const AllProjects = () => {
    return (
        <div className='container my-5 '>
            <h2 className='about mx-auto w-50 mt-5 mb-5 my'><span className='heading'>My projects</span></h2>
            <div className='section'>
                <div className='proj'>
                    {/* menufacture car */}
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
                {/*Ware house  */}
                <div className='proj'>
                    <Card style={{ width: '350px' }}>
                        <Card.Img variant="top" src={ware} style={{ height: '220px' }} />
                        <Card.Body style={{ backgroundColor: '#121b27' }}>
                            <Card.Title className='project-til'> Warehouse Shop</Card.Title>
                            <Card.Text className='proj-des'>
                                This is My Electronic Grocery website. In this wesite i was showing my all products which is very qualityful. And i also showoing some speciall offer prodcuts. If you are not login you can not show all products and order some products and update.
                                <div className='margin mt-3'>
                                    <p className='padding'>Reactjs</p>
                                    <p className='padding'>NodeJs</p>
                                    <p className='padding'>Expressjs</p>
                                    <p className='padding'>Firebase</p>
                                </div>
                                <div className='ms-start  mt-1'>
                                    <a href="https://github.com/Rakibulhasan70/wareHouse-client-site"> <i class="fa-brands fa-github  github"></i></a>
                                    <a href="https://assignment-11-client-a557f.web.app/"><i class="fa-solid fa-arrow-up-right-from-square github ms-3"></i></a>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                {/* service provider */}
                <div>
                    <Card style={{ width: '350px' }}>
                        <Card.Img variant="top" src={service} style={{ height: '220px' }} />
                        <Card.Body style={{ backgroundColor: '#121b27' }}>
                            <Card.Title className='project-til'>Service Provider</Card.Title>
                            <Card.Text className='proj-des'>
                                But if you are try to login with fake token i can not permission to you for login. Overall this is my simple grocery website.But if you are try to login with fake token i can not permission to you for login.
                                <div className='margin mt-3'>
                                    <p className='padding'>Firebase</p>
                                    <p className='padding'> Router</p>
                                    <p className='padding'> Bootstarp</p>
                                    <p className='padding'> Toastify</p>
                                </div>
                                <div className='ms-start  mt-1'>
                                    <a href="https://github.com/Rakibulhasan70/Independent-service-provider"> <i class="fa-brands fa-github  github"></i></a>
                                    <a href="https://assignment-10-eecce.web.app/"><i class="fa-solid fa-arrow-up-right-from-square github ms-3"></i></a>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                {/* laptop hangout */}
                <div className='mt-5'>
                    <Card style={{ width: '350px' }}>
                        <Card.Img variant="top" src={laptop} style={{ height: '220px' }} />
                        <Card.Body style={{ backgroundColor: '#121b27' }}>
                            <Card.Title className='project-til'>Laptop Hangout</Card.Title>
                            <Card.Text className='proj-des'>
                                This project is full about of Laptop.
                                There are some customer feedback in this site.
                                In this site i want to show some Charts which is very much usefull.
                                LineChart, BarChart, AreaChart, PieChart are here.
                                In this site i ans some basic qus ans in blog site, If anybody want to learn please go to blog page.
                                <div className='margin mt-3'>
                                    <p className='padding'>Javascript</p>
                                    <p className='padding'>Bootstrap</p>
                                    <p className='padding'>Rechart</p>
                                    <p className='padding'>Route</p>
                                </div>
                                <div className='ms-start  mt-1'>
                                    <a href="https://github.com/Rakibulhasan70/Product-analysis"> <i class="fa-brands fa-github  github"></i></a>
                                    <a href="https://laptop-hangout.netlify.app/"><i class="fa-solid fa-arrow-up-right-from-square github ms-3"></i></a>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                {/* pretty buyers */}
                <div className='mt-5'>
                    <Card style={{ width: '350px' }}>
                        <Card.Img variant="top" src={pretty} style={{ height: '220px' }} />
                        <Card.Body style={{ backgroundColor: '#121b27' }}>
                            <Card.Title className='project-til'>Pretty Buyers</Card.Title>
                            <Card.Text className='proj-des'>
                                Not full e-commerce but like a page on e-commerce. You can select a item
                                and select the choose on page and choice the page. You also click the
                                choose again and reset the dashboard
                                <div className='margin mt-3'>
                                    <p className='padding'>Javascript</p>
                                    <p className='padding'>Route</p>
                                    <p className='padding'>Bootstrap</p>
                                    <p className='padding'>Font</p>
                                </div>
                                <div className='ms-start  mt-1'>
                                    <a href="https://github.com/Programming-Hero-Web-Course4/lucky-one-Rakibulhasan70"> <i class="fa-brands fa-github  github"></i></a>
                                    <a href="https://pretty-users.netlify.app/"><i class="fa-solid fa-arrow-up-right-from-square github ms-3"></i></a>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                {/* convention center */}
                <div className='mt-5'>
                    <Card style={{ width: '350px' }}>
                        <Card.Img variant="top" src={convention} style={{ height: '220px' }} />
                        <Card.Body style={{ backgroundColor: '#121b27' }}>
                            <Card.Title className='project-til'>Service Provider</Card.Title>
                            <Card.Text className='proj-des'>
                                Booking the convention center We have a lot of options and choices.
                                Business, birthday parties, wedding ceremonies and other occasions are
                                held at this center. At some special times, we provide many kinds of discounts.
                                or offer.
                                <div className='margin mt-3'>
                                    <p className='padding'>HTML</p>
                                    <p className='padding'>Vanila CSS</p>
                                    <p className='padding'>Boootstrap</p>
                                </div>
                                <div className='ms-start  mt-1'>
                                    <a href="https://github.com/Porgramming-Hero-web-course/convention-center-Rakibulhasan70"> <i class="fa-brands fa-github  github"></i></a>
                                    <a href="https://convention-assignment-bootstrap.netlify.app/"><i class="fa-solid fa-arrow-up-right-from-square github ms-3"></i></a>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>

    );
};

export default AllProjects;