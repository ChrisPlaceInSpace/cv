
import '../CSS/Home.css';
import Header from './header';
import Footer from './footer';
import Business from './business';
import { FaReact } from "react-icons/fa";
import SpaceBanner from '../assets/images/nasa-earth.jpg';
import Developer from './developer';
import { FaBriefcase } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { MdPsychology } from "react-icons/md";
import Spinner from './spinner';
import { Suspense, useEffect, useState } from 'react';

export default function Home() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPage = async () => {
            const img = new Image();
            img.src = SpaceBanner;
            img.onload = () => setLoading(false);
        };
        loadPage();
    }, []);


    return loading? (<Spinner />) :
    (
        <div className="home-container color-primary flex flex-column">
            <Header />
                <div className='headline-container flex flex-center'>
                    <h1 className='headline'>Chris' Corner</h1>
                </div>
            <div className='body-container flex flex-column flex-center'>
                <div className='banner-container'>
                    <img src={SpaceBanner} alt='Top space banner' className='banner-image' />
                    <div className='intro-text'>
                        <h2>
                            Welcome to my homemade web app.<br />
                            Feel free to explore!
                        </h2>
                    </div>
                </div>
                    <p>My name is Christofer Lindell Östman and I am a software developer,
                        Psychology bachelor and business experienced person.
                    </p>
                    <h3 id='profile'>Business Profile</h3>
                <div className='profile-container flex'>
                    <a className='flex flex-column flex-center' href='#business'>Business<br/><FaBriefcase/></a>
                    <a className='flex flex-column flex-center' href='#developer'>Developer<br/><FaCode/></a>
                    <a className='flex flex-column flex-center' href='#psychology'>Psychology<br/><MdPsychology/></a>
                </div>
            </div>
            <Suspense fallback={<Spinner />}>
            <Business />
            <Developer />
            </Suspense>

                <div className='react-container flex flex-column flex-center'>
                    <h3>This app was made using React</h3>
                    <div className='react-logo-container'>
                        <FaReact className='react-logo' />
                    </div>
                </div>
            <Footer />
        </div>
    );
}