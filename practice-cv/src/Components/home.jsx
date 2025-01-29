
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
                <div className='intro-text'>Welcome to my homemade page<br/>
                Feel free to explore!
                </div>                
            </div>
            <Footer />
        </div>
    );
}