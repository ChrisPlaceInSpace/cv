

import '../CSS/Home.css';
import { useEffect, useState } from "react";
import Spinner from './spinner';
import Header from './header';
import { Outlet } from 'react-router-dom';

export default function Home() {

    return (
        <div className="home-container">            
            <Header />
            <div className='body-container'>
            <h1>The corner of Chris</h1>
            </div>
        </div>
    );
}