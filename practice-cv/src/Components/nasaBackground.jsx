import '../CSS/NasaBackground.css';
import { useEffect, useState } from 'react';
import Spinner from './spinner';

const NasaBackground = ({children}) => {

    const [backgroundUrl, setBackgroundUrl] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    const API_Key = process.env.VITE_NASA_API_KEY;
    const API_Endpoint = "https://api.nasa.gov/planetary/apod";
    console.log("API KEY: ", API_Key);

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
        className="img-container" 
            style={{ 
                backgroundImage: backgroundUrl ? `url(${backgroundUrl})` : 'none',
                
            }}>                
                {isLoading ? (<Spinner className="spinner"/> ): (
                children
                )}
            </div>
        )
};
export default NasaBackground;