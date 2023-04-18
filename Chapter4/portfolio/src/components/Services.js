import React from "react";
//Icons
import clock from "../img/clock.svg";
import dia from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
//Images
import home2 from "../img/home2.png";

const Services = () => {
  return (
    <div className="services">
      <div className="description">
        <h2>
          High<span>Quality</span>Services
        </h2>
        <div className="cards">
          <div className="card">
            <div className="icon">
              <img src={clock} alt="Clock" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem Ipsum dolor sit amet.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={dia} alt="Dia" />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem Ipsum dolor sit amet.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={teamwork} alt="Teamwork" />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem Ipsum dolor sit amet.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={money} alt="Money" />
              <h3>Money</h3>
            </div>
            <p>Lorem Ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
      <img src={home2} alt="camera" />
    </div>
  );
};

export default Services;
