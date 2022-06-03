import React from "react";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const images = [
  "https://www.dropbox.com/s/2pjlu7ni4sqhq7d/mounts.jpg?raw=1",
  "https://www.dropbox.com/s/l2cj242sdq16jrh/abu_dhabi.jpg?raw=1",
  "https://www.dropbox.com/s/6ts322q81j0kzhy/deserts.jpg?raw=1",
  "https://www.dropbox.com/s/2ohoga5e6r1tpc5/dubai.jpg?raw=1",
];

const Slideshow = () => {
  return (
    <div
      className="slide-container"
      style={{ overflow: "hidden", width: "100%", height: "100%" ,marginTop:-80}}
    >
      <Zoom
        style={{
          duration: 100,
          transitionDuration: 100,
          infinite: true,
          indicators: true,
          scale: 3.4,
          arrows: true,
        }}
        scale={4.5}
        transitionDuration={1200}
        indicators={true}
        pauseOnHover={false}
        arrows={false}
        infinite={true}
        duration={1500}
      >
        {images.map((each, index) => (
          <img
            key={index}
            style={{ width: "100vw", height: "100vh", objectFit: "cover" }}
            src={each}
          />
        ))}
      </Zoom>
    </div>
  );
};

export default Slideshow;
