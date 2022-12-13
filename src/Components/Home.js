import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import About from './About';
import Projects from '../Components/Projects'
import './Home.css'
import Project1 from './Project1';
import Project2 from './Project2';
import Form from './Form';
import GetTouch from './GetTouch';
import EasyDocPoject from './EasyDocPoject';
const Home = () => {
    return (
        <div className='container mt-4 text-white'>
            <div>
                <h5
                    data-aos="fade-right"

                    data-aos-delay="50"
                    data-aos-duration="1000"
                    className='hello'>Hello!! I am</h5>
                <h2
                    data-aos="fade-right"

                    data-aos-delay="50"
                    data-aos-duration="1000"
                    className='name'>Rakibul Hasan Sohag </h2>
                <h2
                    data-aos="fade-right"

                    data-aos-delay="50"
                    data-aos-duration="1000"
                    className='title'>I build things for the web.</h2>
                <p
                    data-aos="fade-right"

                    data-aos-delay="50"
                    data-aos-duration="2000"
                    className='text'>Based on JavaScript, Nodejs specializes in RaectJs. If you are a business or job seeking a web developer, employer,looking to hire. You can get in touch with me here.</p>
                <div className='res'>
                    <button className='rounded ms-3 resume '><a href="https://drive.google.com/file/d/1e9g5uvlfqyMZ9e3vsZJjoGLP1fdMHQU_/view?usp=sharing" style={{ textDecoration: 'none', color: '#64FFDA' }}>Resume</a></button>
                </div>
                <About></About>
                <h2 className='about abouts my-5'><span >My Skills</span></h2>
                <div className='d-flex skillsDiv '>
                    <Link to='/home' ><button className='skills me-2'>Web</button></Link>
                    <Link to='/home/tools'> <button className='skills me-2'>Tools</button></Link>
                    <Link to='/home/other'> <button className='skills me-2'>Other</button ></Link>
                </div>
                <Outlet></Outlet>
            </div>
            <Projects></Projects>
            <EasyDocPoject></EasyDocPoject>
            <Project1></Project1>
            {/* <Project2></Project2> */}

            <GetTouch></GetTouch>
            <Form></Form>
        </div>
    );
};

export default Home;