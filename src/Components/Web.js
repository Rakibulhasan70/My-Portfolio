import React from 'react';
import './Web.css'

const Web = () => {
    return (
        <div className='container'>
            <div className="row mt-5">
                <div className="col-lg-6 col-sm-12 mt-3">
                    <h2 style={{ color: '#CCD6F6' }}> Front-End</h2>
                    <li className='stack'><span className='react'>ReactJs</span></li>
                    <li className='stack'><span className='react'>Javascript</span></li>
                    <li className='stack'><span className='react'>NextJs</span></li>
                </div>
                <div className="col-lg-6 col-sm-12">
                    <h2 style={{ color: '#CCD6F6' }} className='mt-3'>Backend</h2>
                    <li className='stack'><span className='react'>NodeJS</span></li>
                    <li className='stack'><span className='react'>EXpressJS</span></li>
                    <li className='stack'><span className='react'>MongoDB</span></li>

                </div>
            </div>
        </div>
    );
};

export default Web;