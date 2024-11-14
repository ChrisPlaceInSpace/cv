import { useState } from "react";
import keyImage from '../assets/images/key.png';
import { useNavigate } from "react-router-dom";
import NasaBackground from "../Components/nasaBackground.jsx";

const EnterSite = () => {
    const [enter, setEnter] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
      setEnter(true);

      console.log("User clicked key to enter site");

      navigate("/home");
    };
    if(enter){
      // window.location.href = '/index';
    };

    return(
        <>
        <NasaBackground>
        <h1>Welcome to Chris's place in space</h1>
        <div>
        {/* <a href="/home" onClick={handleClick}> */}
        <img src={keyImage} alt="Enter site" onClick={handleClick} style={{cursor: "pointer"}}/>
        </div>
        </NasaBackground>
      </>
    )
};
export default EnterSite;