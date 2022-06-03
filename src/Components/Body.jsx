import React from "react";
// import './App.css';
import Slideshow from "./bodyComp/bgVideo";
import Cards from "./bodyComp/Cards";
import Facts from "./bodyComp/Facts";
import Maps from "./bodyComp/Maps";
import Footer from "./bodyComp/Footer";
import Feedback from "./bodyComp/Feedback";

function Body() {
  const myStyle = {
    backgroundImage:
      "url('https://images.unsplash.com/photo-1508020963102-c6c723be5764?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <main >
      <div style={myStyle}>
        <Slideshow />
        <Cards />
      </div>
        <Facts />
        <Maps/>
        <Feedback>
          hashir
        </Feedback>
        <Footer/>
    </main>
  );
}

export default Body;
