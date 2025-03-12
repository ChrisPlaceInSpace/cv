
import '../../CSS/Home.css';
import Header from '../common/header';
import Footer from '../common/footer';
import Business from '../home/business';
import { FaReact } from "react-icons/fa";
import SpaceBanner from '../../assets/images/nasa-earth.jpg';
import Developer from '../home/developer';
import { FaBriefcase } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { MdPsychology } from "react-icons/md";
import Spinner from '../common/spinner';
import { Suspense, useEffect, useState } from 'react';
import Psychology from '../home/psychology';
import GoTopButton from '../common/goTopButton';

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


    return loading ? (<Spinner />) :
        (
            <>
                <Header />
            <div className="home-container color-primary flex flex-column">
                <div className='headline-container flex flex-center'>
                    <h1 className='headline'>Chris' Corner</h1>
                </div>
                <div className='homebody-container flex flex-column flex-center'>
                    <div className='banner-container'>
                        <img src={SpaceBanner} alt='Top space banner' className='banner-image' />
                        <div className='banner-text'>
                            <h2>
                                Welcome to my web app.<br />
                                Feel free to explore!
                            </h2>
                        </div>
                    </div>
                    <p className='intro-text'>My name is Christofer Lindell Östman and I am a software developer,
                        psychology bachelor and business experienced person.
                    </p>
                    <h2 id='profile'>Professional Profile</h2>
                    <div className='profile-container flex flex-center'>
                        <div className='profile-button-container flex'>
                            <a className='profile-button flex flex-column flex-center' href='#business'>Business<br />
                            <FaBriefcase />
                            </a>
                        </div>
                        <div className='profile-button-container flex'>
                            <a className='profile-button flex flex-column flex-center' href='#developer'>Developer<br />
                            <FaCode />
                            </a>
                        </div>
                        <div className='profile-button-container flex'>
                            <a className='profile-button flex flex-column flex-center' href='#psychology'>Psychology<br />
                            <MdPsychology />
                            </a>
                        </div>
                    </div>
                </div>
                <Suspense fallback={<Spinner />}>
                    <Business />
                    <Developer />
                    <Psychology />
                </Suspense>

                <div className='react-container flex flex-column flex-center'>
                    <h3>This app was made using React</h3>
                    <div className='react-logo-container'>
                        <FaReact className='react-logo' />
                    </div>
                </div>
                <GoTopButton />
                <Footer />
            </div>
            </>
        );
}