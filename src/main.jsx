
import React from "react";  
import ReactDom from "react-dom/client";
  
const rootDiv = document.getElementById("root");   
import myImage from './assets/images/PC-gaming-scaled.jpg'; 

ReactDom.createRoot(rootDiv).render(


    <div >
      <h1>Welcome to My React App!</h1>
      <img src={myImage} alt="PC gaming" style={{width:700, height:400}}/> 
      </div>)
 

