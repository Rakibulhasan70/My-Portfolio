import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import About from './About';
import Projects from '../Components/Projects'
import './Home.css'
import Project1 from './Project1';
import Project2 from './Project2';
const Home = () => {
    return (
        <div className='container mt-4 text-white'>
            <div>
                <h5 className='hello'>Hello!! I am</h5>
                <h2 className='name'>Rakibul Hasan Sohag </h2>
                <h2 className='title'>I build things for the web.</h2>
                <p className='text'>I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products at <span className='special'>Upstatement</span>.</p>
                <div>
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
            <Project1></Project1>
            <Project2></Project2>
        </div>
    );
};

export default Home;