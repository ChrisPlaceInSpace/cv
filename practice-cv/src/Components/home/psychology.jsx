import React from 'react';
import psyImage from '../../assets/images/David_EEG.jpg';
import '../../CSS/Psychology.css';

export default function Psychology() {
    return (
        <div className="psychology-container flex flex-column flex-center">
            <h2 id='psychology'>Psychology</h2>
            <div className='psychology-profile flex flex-center flex-column'>
                <div className='image-container flex flex-column flex-center'>
                <img src={psyImage} className='psychology-image' alt='psychological picture' />
                <p className='image-decription text-center'>David taking an EEG, where his brain activity is scanned
                     while performing a task.</p>
                </div>
                <div className='psychology-text'>
                    <p>Psychology is an area that has interested me for a long time. For those that don't know,
                        psychology is the study of cognitive processes and human behavior.
                        It is the one subject that I have studied that I get reminded of every day and it continues
                        to influence my daily thoughts and actions.
                    </p>
                </div>
            </div>
            <div className='education-container flex flex-column flex-center'>
                <h3>Education</h3>
                <h5 className='text-center'>Psychology Bachelor, Stockholm University 2018-2021</h5>
                <div>
                    <p>During one and half year I studied psychology fulltime and put together with another year and a half
                        of courses in subjects such as
                        philosophy, language, law and music, I got a bachelor degree in Psychology.</p><br />
                    <p>Courses included:</p>
                    <div>
                        <li>Social psychology</li>
                        <li>Development psychology</li>
                        <li>Cognitive psychology</li>
                        <li>Perception and Neuropsychology</li>
                        <li>Statistics and research methods</li>
                        <li>Group psychology and interview methodology</li>
                        <li>Motivation and Emotions</li>
                        <li>Bachelor thesis</li>
                    </div><br />
                    <p>A common misconception about psychology is that it is a fuzzy subject with little substance, 
                        where it on the contrary is a science based on empirical research and data where conclusions are made
                        only after a thorough statistical analysis. What supriced me in the beginning was how much of the
                        research was quantitative data driven research, as a majority of the collected data is being converted into numbers
                        for analysis. My bachelor thesis was no exception. From the first semester to the last, we studied
                        research methods and statistics throughout to both understand the research and to prepare for the bachelor thesis,
                        as well as laying a ground for a potential career within the psychology field.
                    </p>
                </div>
            </div>
        </div>

    )
};