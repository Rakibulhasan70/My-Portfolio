import React from 'react';
import About from './About';
import './Home.css'

const Home = () => {
    return (
        <div className='container mt-4 text-white'>
            <h5 className='hello'>Hello!! I am</h5>
            <h2 className='name'>Rakibul Hasan Sohag </h2>
            <h2 className='title'>I build things for the web.</h2>
            <p className='text'>I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products at <span className='special'>Upstatement</span>.</p>
            <div>
                <button className='rounded ms-3 resume'>Resume</button>
            </div>
            <About></About>
        </div>
    );
};

export default Home;