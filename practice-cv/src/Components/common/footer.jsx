import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import '../../CSS/footer.css';

export default function Footer() {

    return (
        <div className="footer-container">
            <div className='footer-text'>&copy;2025 All rights reserved - Christofer Lindell Östman
            </div>
            <div className="icon-container">
            <a href='https://github.com/ChrisPlaceInSpace' className='github-link'>
                <FaGithub className='github-icon' />
            </a>
            <a href="https://www.linkedin.com/in/christofer-lindell-%C3%B6stman-85b01616a/">
                <FaLinkedin className="linkedin-icon" />
            </a>
            </div>
        </div>
    )
};