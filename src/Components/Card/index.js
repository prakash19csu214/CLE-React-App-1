import React from "react";
import "./index.css";

const Card = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-4 sec1-card">
          <div
            className="lorem-card-box"
            style={{ background: "#B000DC1C", color: "#B000DC" }}
          >
            <p>Lorem ipsum</p>
          </div>
          <div className="sec1-card-head">Lorem Ipsum</div>
          <div className="sec1-card-para">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </div>
        </div>
        <div className="col-12 col-sm-4 sec1-card">
          <div
            className="lorem-card-box"
            style={{
              background: "rgba(220, 66, 0, 0.11)",
              color: "#DC1A00",
            }}
          >
            <p>Lorem ipsum</p>
          </div>
          <div className="sec1-card-head">Lorem Ipsum</div>
          <div className="sec1-card-para">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </div>
        </div>
        <div className="col-12 col-sm-4 sec1-card">
          <div
            className="lorem-card-box"
            style={{
              background: "rgba(0, 220, 141, 0.11)",
              color: "rgba(0, 220, 114, 1)",
            }}
          >
            <p>Lorem ipsum</p>
          </div>
          <div className="sec1-card-head">Lorem Ipsum</div>
          <div className="sec1-card-para">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
