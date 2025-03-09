import { useEffect } from "react";
import React from "react";
import '../../CSS/GoTopButton.css';
import { FaArrowUp } from "react-icons/fa";

export default function GoTopButton() {
    const [showButton, setShowButton] = React.useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        });
    }, []);
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return (
        <button className="gotop-button flex flex-center" onClick={scrollToTop} style={{ display: showButton ? 'block' : 'none' }}>
            <FaArrowUp />
        </button>
    )
}