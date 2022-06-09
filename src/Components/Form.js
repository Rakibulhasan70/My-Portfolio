import React from 'react';
import emaijs from 'emailjs-com'
import contact from '../../src/image/contact.png'
import './Form.css'


const Form = () => {
    const sendEmail = (e) => {
        e.preventDefault()

        emaijs.sendForm('service_ns2hbvn', 'template_39p1u2a', e.target, 'P442xSSTKMHmprr8j')
            .then(res => {
                console.log(res);
            })
    }


    return (
        <div className='container my-5' >
            <h1 className='text-center' style={{ marginTop: '25px', color: '#8892b0' }}>Contact Form</h1>
            <div className="row">
                <div className="col-lg-6">
                    <img className='mt-3 contact-img' src={contact} alt="" />
                </div>
                <div className="col-lg-6">
                    <form onSubmit={sendEmail}>
                        <input type="text" name='name' placeholder='Name' className='mx-auto w-100 p-2 mt-3' style={{ backgroundColor: '#CCD6F6', border: '1px solid white' }} />
                        <br />
                        <input type="email" name="email" id="" placeholder='Email' className='mx-auto w-100 p-2 mt-3' style={{ backgroundColor: '#CCD6F6', border: '1px solid white' }} />
                        <br />
                        <textarea name="message" placeholder='Text Body' rows="4" className='mx-auto w-100 p-2 mt-3' style={{ backgroundColor: '#CCD6F6', border: '1px solid white' }}></textarea>
                        <br />
                        <div className='text-center'><input className='mt-3 p-2 px-4 rounded resume' type="submit" value="Send" /></div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Form;