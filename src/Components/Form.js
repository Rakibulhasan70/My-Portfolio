import React from 'react';
import emaijs from 'emailjs-com'
import contact from '../../src/image/contact.png'
import './Form.css'
import { toast } from 'react-toastify';

const Form = () => {
    const sendEmail = (e) => {
        e.preventDefault()

        emaijs.sendForm('service_ns2hbvn', 'template_39p1u2a', e.target, 'P442xSSTKMHmprr8j')
            .then(res => {
                console.log(res);
                toast('Email send successfully')
            })
    }


    return (
        <div className='container my-5' id='contact'>
            <div className="row">
                <div className="col-lg-6"
                    data-aos="fade-right"

                    data-aos-delay="50"
                    data-aos-duration="1000"
                >
                    <img className='mt-3 contact-img' src={contact} alt="" />
                </div>
                <div className="col-lg-6"
                    data-aos="fade-left"

                    data-aos-delay="50"
                    data-aos-duration="1000"
                >
                    <form onSubmit={sendEmail}>
                        <input type="text" name='name' placeholder='Name' className='mx-auto w-100 p-3 mt-3' style={{ backgroundColor: '#CCD6F6', border: '1px solid white', borderRadius: '5px' }} />
                        <br />
                        <input type="email" name="email" id="" placeholder='Email' className='mx-auto w-100 p-3 mt-3' style={{ backgroundColor: '#CCD6F6', border: '1px solid white', borderRadius: '5px' }} />
                        <br />
                        <textarea name="message" placeholder='Text Body' rows="8" className='mx-auto w-100 p-2 mt-3' style={{ backgroundColor: '#CCD6F6', border: '1px solid white', borderRadius: '5px' }}></textarea>
                        <br />
                        <div className='text-center'><input className='mt-3 p-2 px-4 rounded resume' type="submit" value="Send" /></div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Form;