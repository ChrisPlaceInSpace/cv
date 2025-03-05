import '../CSS/NasaBackground.css';
import { useEffect, useState } from 'react';
import Spinner from './spinner';
import BackgroundImage from '../assets/images/NASA240225_LightPillarVolcano_Calio.jpg';

const NasaBackground = ({children, onLoaded}) => {

    const [backgroundUrl, setBackgroundUrl] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    
    const API_Key = process.env.VITE_NASA_API_KEY;
    const API_Endpoint = "https://api.nasa.gov/planetary/apod";

    useEffect(() => {
        const fetchBackgroundImage = async () => {
            try {
                const response = await fetch(`${API_Endpoint}?api_key=${API_Key}`);
                if (!response.ok) throw new Error('Failed to fetch image');

                const dataResponse = await response.json();
                console.log("API response: ", dataResponse.hdurl);

                if (dataResponse.hdurl === undefined) {
                    setBackgroundUrl(BackgroundImage);
                }
                else{
                    setBackgroundUrl(dataResponse.hdurl);
                }
                console.log(backgroundUrl);

            }
            catch(error) {
                console.error("Error fetching the background image:", error);

            }
            finally{
                setIsLoading(false);
                if (onLoaded) onLoaded();
            }
        };
        fetchBackgroundImage();
    }, []);

    return (
        <div
        className="img-container" 
            style={{ 
                backgroundImage: backgroundUrl ? `url(${backgroundUrl})` : BackgroundImage,
                
            }}>                
                {isLoading ? (<Spinner className="spinner"/> ): (
                children
                )}
            </div>
        )
};
export default NasaBackground;