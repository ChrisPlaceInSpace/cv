import Navbar from "./navbar";
import logo from '../assets/images/hemsidelogo-transparent.png';
import '../CSS/Home.css';
import { useEffect, useState } from "react";
import Spinner from './spinner';

export default function Home() {
    const [backgroundUrl, setBackgroundUrl] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    const API_Key = "2mQfesh42vPShg3JoVfhHE1kBIq4koLzzS7jazYj";
    const API_Endpoint = "https://api.nasa.gov/planetary/apod";

    useEffect(() => {
        const fetchBackgroundImage = async () => {
            try {
                const response = await fetch(`${API_Endpoint}?api_key=${API_Key}`);
                if (!response.ok) throw new Error('Failed to fetch image');

                const dataResponse = await response.json();

                // const urls = dataResponse.map((item, index) => {
                // console.log(`Image ${index + 1}: ` ,item.hdurl);
                // return item.urls;
                // });

                setBackgroundUrl(dataResponse.hdurl);
                console.log(setBackgroundUrl);

            }
            catch(error) {
                console.error("Error fetching the background image:", error);

            }
            finally{
                setIsLoading(false);
            }
        };
        fetchBackgroundImage();
    }, []);

    return (
        <div
        className="home-container" 
            style={{ 
                backgroundImage: backgroundUrl ? `url(${backgroundUrl})` : 'none',
                
            }}>
            <div className="logo-container">
            <img src={logo} alt="Home page logo" className="logo" />
            </div>
            <Navbar/>
            {isLoading ? (<Spinner/> ): (
                <h1>The corner of Chris</h1>
                )}
        </div>

    );
}