import { useState } from "react";
import keyImage from '../assets/images/key.png';
import { useNavigate } from "react-router-dom";
import NasaBackground from "../Components/nasaBackground.jsx";
import '../CSS/EnterSite.css';

const EnterSite = () => {
  const [enter, setEnter] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setEnter(true);

    console.log("User clicked key to enter site");

    navigate("/home");
  };
  if (enter) {
    // window.location.href = '/index';
  };

  return (
    <>
      <NasaBackground>
        <div className="entersite-container">
          <div className="text-image-container">
            <h1 className="headline">Welcome to Chris' place in space</h1>
            <div className="key-container">
              {/* <a href="/home" onClick={handleClick}> */}
              <img className="key" src={keyImage} alt="Enter site" onClick={handleClick} style={{ cursor: "pointer" }} />
            </div>
          </div>
        </div>
      </NasaBackground>
    </>
  )
};
export default EnterSite;