import React from 'react';
import img from '../../src/image/sohag.jpg'
import './About.css'

const About = () => {
    return (
        <div className='container'>
            <h2 className='about'><span>About Me</span></h2>
            <div className="row gx-5">
                <div className="col-lg-7 description">
                    Hello! I'm Rakibul Hasan Sohag, a passionate Front-End Developer. I develop web applications and desktop applications. My core skill is based on JavaScript,ReactJS and I love to do most of the things using JavaScript,ReactJS. I love to make the web more open to the world. I am studing with a bachelor's degree from National university at Chittagong, Basngladesh . I am available for any kind of job opportunity that suits my interests.
                    <div className='my-3 icons' >
                        <a href="https://github.com/Rakibulhasan70"><i class="fa-brands fa-github px-4 icone"></i></a>
                        <a href="https://www.facebook.com/profile.php?id=100010324115694"><i class="fa-brands fa-facebook px-4 icone"></i></a>
                        <a href="https://www.linkedin.com/in/rakibul-hasan-sohag-90b207231/"><i class="fa-brands fa-linkedin px-4 icone"></i></a>
                        <a href="https://myaccount.google.com/profile"><i class="fa-solid fa-envelope px-4 icone"></i></a>
                        <a href="https://www.whatsapp.com/"><i class="fa-brands fa-whatsapp-square px-4 icone"></i></a>
                    </div>
                </div>
                <div className="col-lg-5 img">
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;