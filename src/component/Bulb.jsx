import {useState} from "react";


const Bulb = () => {
  const [light, setLight] = useState("OFF");

  return(
    <>
    <div>
      {light === "ON" ? 
      (<h1 style={{backgroundColor : "orange"}}>ON</h1>) :
      (<h1 style={{backgroundColor:"gray"}}>OFF</h1>)}
    </div>

    <button onClick={() => {
        setLight(light === "ON" ?"OFF":"ON");
      }}>
        {light === "ON" ?"켜기":"끄기"}</button>
  
    </>
    
  );
};

export default Bulb;