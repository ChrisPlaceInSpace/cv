import { useEffect, useState } from "react";

const RandomButton = () => {
    const [buttonPosition, setButtonPosition] = useState({top: 0, left: 0});

    const moveButtonRandomly = () => {
        const container = document.getElementById("button-container");
          const containerWidth = container.offsetWidth;
          const containerHeight = container.offsetHeight;
      
          const newLeft = Math.floor(Math.random() * (containerWidth - 150));
          const newTop = Math.floor(Math.random() * (containerHeight - 70));
      
          setButtonPosition({top: newTop, left: newLeft});
      };
      //Create button movement every second
    //   useEffect(() => {
    //       const interval = setInterval(moveButtonRandomly, 1000);
    //       return () => clearInterval(interval);
    //   }, []);   
      
        return (
          <>
                  
              <div
            id="button-container"
            style={{
              position: 'relative',
              width: '100%',
              height: '70vh',
              border: '1px solid black',
            }}
          >
              <button  onClick={moveButtonRandomly}
              style={{
                position: 'absolute',
                top: buttonPosition.top,
                left: buttonPosition.left,
              }}>
                Click me to show fun
              </button>
              </div>              
          </>
        )
};

export default RandomButton;