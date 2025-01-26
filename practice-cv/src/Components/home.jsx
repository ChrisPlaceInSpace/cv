

import '../CSS/Home.css';
import { useEffect, useState } from "react";
import Header from './header';
import { Outlet } from 'react-router-dom';

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
        </div>
    );
}