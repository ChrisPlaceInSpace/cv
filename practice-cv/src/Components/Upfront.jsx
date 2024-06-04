import { useState } from "react";
import keyImage from '../assets/images/key.png';

const EnterSite = () => {
    const [enter, setEnter] = useState(false);
    
    const handleClick = () => {
      setEnter = true;
    };
    if(enter){
      // window.location.href = '/index';
    };

    return(
        <>
        <h1>Welcome to Chris's page</h1>
        <div>
        <a onClick={handleClick}><img src={keyImage}/></a>
        </div>
      </>
    )
};
export default EnterSite;