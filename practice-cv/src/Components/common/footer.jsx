import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import '../../CSS/Footer.css';

export default function Footer() {

    return (
        <footer>
        <div className="footer-container flex flex-center text-center">
            <div className='footer-text'>&copy;2025 All rights reserved - Christofer Lindell Östman
            </div>
            <div className="icon-container flex">
            <a href='https://github.com/ChrisPlaceInSpace' className='github-link'>
                <FaGithub className='github-icon' />
            </a>
            <a href="https://www.linkedin.com/in/christofer-lindell-%C3%B6stman-85b01616a/">
                <FaLinkedin className="linkedin-icon" />
            </a>
            </div>
        </div>
        </footer>
    )
};