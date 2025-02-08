import React from "react";
import ShowPdf from "./PdfDisplay"
import Header from "./header";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import '../CSS/cv.css';

export default function CV() {
    const navigate = useNavigate();

    return (
        <div className="color-primary">
            <Header />
            <div className="body-container">
                <button className="back-button" onClick={() => navigate(-1)}><FaArrowLeft className="back-arrow" /> Back</button>
                <h1>CV</h1>
                <ShowPdf />
            </div>
        </div>
    )
};