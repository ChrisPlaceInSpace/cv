
import '../CSS/Home.css';
import Header from './header';
import { FaGithub } from "react-icons/fa";
import Footer from './footer';

export default function Home() {

    return (
        <div className="home-container">
            <Header />
            <div className='body-container'>
                <div className='headline-container'>
                    <h1 className='headline'>Chris' Corner</h1>
                </div>
                <div className='intro-text'>Welcome to my homemade web app.<br/>
                Feel free to explore!
                </div>
                <p>My name is Christofer Lindell Östman and I am a web developer, 
                    Psychology bachelor and business experienced person</p>                
            </div>
            <Footer />
        </div>
    );
}