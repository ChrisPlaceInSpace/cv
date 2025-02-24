import React from "react";
import Header from "./header";
import Footer from "./footer";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import '../CSS/cv.css';

export default function CV() {
    const navigate = useNavigate();

    return (
        <div className="personalpage-container flex flex-column color-primary">
            <Header />
            <div className="personalpage-body flex flex-column">
                <button className="back-button" onClick={() => navigate(-1)}><FaArrowLeft className="back-arrow" /> Back</button>
                <h1>CV</h1>                
            </div>
            <Footer />
        </div>
    )
};