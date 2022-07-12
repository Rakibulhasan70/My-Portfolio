import React from 'react';
import './GetTouch.css'

const GetTouch = () => {
    return (
        <div className='container my-5'>
            <div className="row">
                <div className="col-lg-12 col-12">
                    <h1 className='get'>Get In Touch</h1>
                    <p className='get-title'>Although I'm not currently looking for any new opportunities, my inbox is
                        <br />
                        always open Whether you have a question or just want to say hi, I'll try
                        <br />
                        my best to get back to you!</p>
                    <div className='my-3 icons getTouch'>
                        <a href="https://github.com/Rakibulhasan70"><i class="fa-brands fa-github px-4 icone"></i></a>
                        <a href="https://www.facebook.com/profile.php?id=100010324115694"><i class="fa-brands fa-facebook px-4 icone"></i></a>
                        <a href="https://www.linkedin.com/in/rakibul-hasan-sohag-90b207231/"><i class="fa-brands fa-linkedin px-4 icone"></i></a>
                        <a href="https://www.whatsapp.com/"><i class="fa-brands fa-whatsapp-square px-4 icone"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetTouch;