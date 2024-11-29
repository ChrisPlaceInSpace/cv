import Navbar from "./navbar";
import logo from '../assets/images/hemsidelogo-transparent.png';
import '../CSS/Home.css';
import { useEffect, useState } from "react";
import Spinner from './spinner';

export default function Home() {


    return (
        <div className="home-container">
            <div className="logo-container">
                <img src={logo} alt="Home page logo" className="logo" />
            </div>
            <Navbar />
            <h1>The corner of Chris</h1>
        </div>

    );
}