import React from 'react';
import psyImage from '../assets/images/David_EEG.jpg';
import '../CSS/psychology.css';

export default function Psychology() {
    return (
        <div className="psychology-container flex flex-column flex-center">
            <h2 id='psychology'>Psychology</h2>
            <img src={psyImage} className='psychology-image' alt='psychological picture' />
            <h3>Education</h3>
            <h5>Psychology Bachelor, Stockholm University 2019-2021</h5>
            <p>During one and half year I studied psychology fulltime and combined with other courses in subjects such as
                philosophy, language, law and music, I got a bachelor degree in Psychology.</p>
        </div>

    )
};