import React, { useEffect, useState } from "react";

function Useeffect() {
const [count,setCount] = useState(0)

  useEffect(() => {
    alert("hello world");
   const intervalId = setInterval(() => {
    console.log("Hello every 2 seconds");
}, 2000);
clearInterval(intervalId);
  }, []);
  return (
    <>

      <h1>Useeffect</h1>
       <button onClick= {()=> setCount (count+1)}> click here</button>
       
    </>
  );
}

export default Useeffect;