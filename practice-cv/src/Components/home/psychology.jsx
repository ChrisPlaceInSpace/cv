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
                    <p>Psychology is an area that has interested me for a long time. For those that do not know,
                        psychology is the study of cognitive processes and human behavior.
                        It is the one subject that I have studied that I get reminded of every day and continues
                        to influence my daily thoughts and actions.
                    </p>
                </div>
            </div>
            <div className='education-container flex flex-column flex-center'>
                <h3>Education</h3>
                <h5 className='text-center'>Psychology Bachelor, Stockholm University 2018-2021</h5>
                <div className='education-text flex flex-column'>
                    <p>To earn my bachelors degree, I spent a year and a half studying psychology full time.
                        For an additional year and a half, I took courses in philosophy, language, law and music.</p><br />
                    <p>Courses included:</p>
                    <ul>
                        <li>Social psychology</li>
                        <li>Development psychology</li>
                        <li>Cognitive psychology</li>
                        <li>Perception and Neuropsychology</li>
                        <li>Statistics and research methods</li>
                        <li>Group psychology and interview methodology</li>
                        <li>Motivation and Emotions</li>
                        <li>Bachelor thesis</li>
                    </ul><br />
                    <p>A common misconception about psychology is that it is a fuzzy subject with little substance.
                        On the contrary, I would argue that psychology is a science-based subject grounded in empirical research and data. 
                        Conclusions are drawn from results that have been statistically tested.
                        What surprised me in the beginning was how much of the
                        research was quantitative data driven research, as a majority of the collected data is being converted into numbers
                        for analysis. My bachelor thesis was no exception. From the first semester to the last, we studied
                        research methods and statistics throughout to both understand the research and to prepare for the bachelor thesis,
                        as well as laying the grounds for a potential career within the field of psychology.
                    </p>
                </div>
            </div>
        </div>

    )
};