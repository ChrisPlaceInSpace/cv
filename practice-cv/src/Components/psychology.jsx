import React from 'react';
import psyImage from '../assets/images/psychology-pic.jpg';
import '../CSS/psychology.css';

export default function Psychology() {
    return (
        <div className="psychology-container flex flex-column flex-center">
            <h2 id='psychology'>Psychology</h2>
            <img src={psyImage} className='psychology-img' alt='psychological picture' />
            <h3>Education</h3>
            <h5>Psychology Bachelor, Stockholm University 2019-2021</h5>
        </div>

    )
};