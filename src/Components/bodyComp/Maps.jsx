import React, { Component } from "react";
import './Body_stylesheets/Maps.css';
const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div className="MapWrapper">
        <iframe
          width="600"
          height="450"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed/v1/view?key=AIzaSyBE8rJsrkrxda-eRv3tXaGP_bVrm-8E4Ps&center=24.4241,53.8478&zoom=7&maptype=satellite"
        ></iframe>
      </div>
    );
  }
}

export default Map;
