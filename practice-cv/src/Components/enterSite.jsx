import { useState, useEffect } from "react";
import keyImage from '../assets/images/key.png';
import { useNavigate } from "react-router-dom";
import NasaBackground from "../Components/nasaBackground.jsx";
import '../CSS/EnterSite.css';
import Spinner from "./common/spinner.jsx";
import { FaLongArrowAltUp } from "react-icons/fa";

const EnterSite = () => {
  const [enter, setEnter] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showHint, setShowHint] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const hintTimer = setTimeout(() => {
      console.log("User gets hint to enter the site after 12 seconds");
      setShowHint(true);
    }, 12000);
    return () => clearTimeout(hintTimer)
  }, []);



  const handleClick = () => {
    setEnter(true);

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
            <div className="key-container flex flex-column">              
              <img className="key" src={keyImage} alt="Enter site" onClick={handleClick} />
              {showHint && <div className="hint-container flex flex-column flex-center"><FaLongArrowAltUp /> <p className="hint-text">Press key to enter site</p></div>}
            </div>
          </div>
        </div>)}
      </NasaBackground>
    </>
  )
};
export default EnterSite;