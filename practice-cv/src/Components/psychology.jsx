import React from 'react';
import psyImage from '../assets/images/David_EEG.jpg';
import '../CSS/psychology.css';

export default function Psychology() {
    return (
        <div className="psychology-container flex flex-column flex-center">
            <h2 id='psychology'>Psychology</h2>
            <div className='psychology-profile flex flex-center flex-column'>
                <img src={psyImage} className='psychology-image' alt='psychological picture' />
                <div className='psychology-text'>
                    <p>Psychology is an area that has interested me for a long time. For those that don't know,
                        psychology is the study of cognitive processes and human behavior.
                        It is the one subject that I have studied that I get reminded of every day and it continues 
                        to influence my daily thoughts and actions.
                    </p>
                </div>
            </div>
            <h3>Education</h3>
            <div className='education-container flex flex-column'>
            <h5 className='text-center'>Psychology Bachelor, Stockholm University 2018-2021</h5>
            <p>During one and half year I studied psychology fulltime and put together with another year and a half 
                of courses in subjects such as
                philosophy, language, law and music, I got a bachelor degree in Psychology.</p>
            <p>Courses included:</p>
            <div>
                <li>Social psychology</li>
                <li>Development psychology</li>
                <li>Cognitive psychology</li>
                <li>Perception and Neuropsychology</li>
                <li>Statistics and research methods</li>
                <li>Group psychology and interview methodology</li>
                <li>Bachelor thesis</li>
            </div>
            </div>
        </div>

    )
};