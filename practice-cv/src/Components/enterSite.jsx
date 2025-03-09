import { useState } from "react";
import keyImage from '../assets/images/key.png';
import { useNavigate } from "react-router-dom";
import NasaBackground from "../Components/nasaBackground.jsx";
import '../CSS/EnterSite.css';
import Spinner from "./common/spinner.jsx";

const EnterSite = () => {
  const [enter, setEnter] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleClick = () => {
    setEnter(true);

    console.log("User clicked key to enter site");

    navigate("/home");
  };

  return (
    <>
    {loading && <Spinner />}
      <NasaBackground onLoaded={() => setLoading(false)}>
        {!loading && (
        <div className="entersite-container">
          <div className="text-image-container">
            <h1 className="entersite-text">Welcome to Chris' place in space</h1>
            <div className="key-container">              
              <img className="key" src={keyImage} alt="Enter site" onClick={handleClick} />
            </div>
          </div>
        </div>)}
      </NasaBackground>
    </>
  )
};
export default EnterSite;