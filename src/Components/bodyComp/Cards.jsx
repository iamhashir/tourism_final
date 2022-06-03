import React from "react";
import Abu_dhabi from "./images/u-a-e-3664712.jpg"
import Dubai from "./images/dubai_view.jpg"
import Sharjah from "./images/sharjah.avif"
import Ajman from "./images/Ajman.jpg"
import Rak from "./images/Rak.jpg"
import Fujairah from "./images/Fujairah.jpg"
import Umm_Al_Quwain from "./images/Umm_Al_Quwain.jpg";
import "./Body_stylesheets/Cards.css";

function App() {
  return (
    <div id="CardWrapper">
      <div className="card card1" id="Abu_Dhabi">
        <img src={Abu_dhabi} alt="" />
        <h3 className="position_absolute card_heading1">Abu Dhabi</h3>
        <p className="card_info"></p>
      </div>
      <div className="card card2" id="Dubai">
        <img src={Dubai} alt="" />
        <h3 className="position_absolute card_heading2">Dubai</h3>
        <p className="card_info"></p>
      </div>
      <div className="card card3" id="Sharjah">
        <img src={Sharjah} alt="" />
        <h3 className="position_absolute card_heading3">Sharjah</h3>
        <p className="card_info"></p>
      </div>
      <div className="card card4" id="Ajman">
        <img src={Ajman} alt="" />
        <h3 className="position_absolute card_heading4">Ajman</h3>
        <p className="card_info"></p>
      </div>
      <div className="card card5" id="Rak">
        <img src={Rak} alt="" />
        <h3 className="position_absolute card_heading5">Ras al khaimah</h3>
        <p className="card_info"></p>
      </div>
      <div className="card card6" id="Umm_Al_quwain">
        <img src={Umm_Al_Quwain} alt="" />
        <h3 className="position_absolute card_heading6">Umm Al Quwain</h3>
        <p className="card_info"></p>
      </div>
      <div className="card card7" id="Fujairah">
        <img src={Fujairah} alt="" />
        <h3 className="position_absolute card_heading7">Fujairah</h3>
        <p className="card_info"></p>
      </div>
    </div>
  );
}

export default App;
