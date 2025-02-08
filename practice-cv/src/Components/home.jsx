
import '../CSS/Home.css';
import Header from './header';
import { FaGithub } from "react-icons/fa";
import Footer from './footer';
import Business from './business';
import { FaReact } from "react-icons/fa";
import SpaceBanner from '../assets/images/nasa-earth.jpg';
import Developer from './developer';

export default function Home() {

    return (
        <div className="home-container color-primary flex">
            <Header />
                <div className='headline-container'>
                    <h1 className='headline'>Chris' Corner</h1>
                </div>
            <div className='body-container'>
                <div className='banner-container'>
                    <img src={SpaceBanner} alt='Top space banner' className='banner-image' />
                    <div className='intro-text'>
                        <h2>
                            Welcome to my homemade web app.<br />
                            Feel free to explore!
                        </h2>
                    </div>
                </div>
                <div className='react-container'>
                    <h3>This app was made using React</h3>
                    <div className='react-logo-container'>
                        <FaReact className='react-logo' />
                    </div>
                </div>
                    <p>My name is Christofer Lindell Östman and I am a software developer,
                        Psychology bachelor and business experienced person.
                    </p>
                    <h3 id='profile'>Profile</h3>
                <div className='profile-container flex'>
                    <a href='#business'>Business</a>
                    <a href='#developer'>Developer</a>
                    <a href='#psychology'>Psychology</a>
                </div>
            </div>
            <Business />
            <Developer />

            <Footer />
        </div>
    );
}