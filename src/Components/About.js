import React from 'react';
import img from '../../src/image/sohag.jpg'
import './About.css'

const About = () => {
    return (
        <div className='container' id='about'>
            <h2 className='about'><span>About Me</span></h2>
            <div className="row gx-5">
                <div
                    data-aos="fade-right"

                    data-aos-delay="50"
                    data-aos-duration="1000"
                    className="col-lg-7 description">
                    Hello! I'm a passionate MERN-Stack Developer. I develop web applications and desktop applications. My core skills are based on JavaScript and ReactJS. I love to make the web more open to the world. I am also doing my bachelor's degree in science background from National University at Chittagong, Bangladesh. I have completed my web development course from ProgrammingHero by Jhankar Mahbub. I have done 10+ projects using, CSS, JavaScript, NodaJS, and API. I'm available for any kind of job opportunity that suits my interest.
                    <div className='my-3 icons' >
                        <a href="https://github.com/Rakibulhasan70"><i class="fa-brands fa-github px-4 icone"></i></a>
                        <a href="https://www.facebook.com/profile.php?id=100010324115694"><i class="fa-brands fa-facebook px-4 icone"></i></a>
                        <a href="https://www.linkedin.com/in/rakibul-hasan-sohag-90b207231/"><i class="fa-brands fa-linkedin px-4 icone"></i></a>
                        <a href="https://myaccount.google.com/profile"><i class="fa-solid fa-envelope px-4 icone"></i></a>
                        <a href="https://www.whatsapp.com/"><i class="fa-brands fa-whatsapp-square px-4 icone"></i></a>
                    </div>
                </div>
                <div className="col-lg-5 img"
                    data-aos="fade-left"

                    data-aos-delay="50"
                    data-aos-duration="1000"
                >
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;