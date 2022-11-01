import React, { Component } from "react";
import { Jumbotron, Button } from "reactstrap";
import Card from "../../Components/Card";
import * as Constants from "../../Services/Constants";
import "./index.css";

export default class Home extends Component {
  render() {
    return (
      <>
        <Jumbotron>
          <div className="container">
            <div className="row row-header justify-content-center">
              <div className="col-12 col-sm-4">
                <br />
                <div className="heading-jumbo">Digital Marketing</div>
                <p>{Constants.JumbHeading}</p>
                <div className="jumbo-para">{Constants.JumbPara}</div>
                <Button className="jumbo-btn">Get More Details</Button>
              </div>
              <div className="col-12 col-sm-6">
                <div className="jumbo-pic img-fluid"></div>
              </div>
            </div>
          </div>
        </Jumbotron>
        <br />
        <div className="section-20 container">
          <div className="sec2-heading container">{Constants.loremHeading2}</div>
          <br />
          <div className="sec2-info">{Constants.loremHeading}</div>
          <br />
          <div className="sec2-infod">{Constants.loremPara}</div>

          <div className="sec2-pic3 mt-5 img-fluid"></div>

          <br />
          <div className="sec2-heading container">{Constants.loremHeading2}</div>
          <br />
          <div className="sec2-infod2 container">{Constants.loremPara}</div>
        </div>

        <div className="section-3 container">
          <div className="sec2-info">{Constants.loremHeading}</div>
          <br />
          <div className="sec2-infod">{Constants.loremPara}</div>

          <div className="row sec3card">
            <Card />
          </div>
        </div>

        <div className="section-4 container">
          <br />
          <br />
          <div className="sec2-heading container">Our Recent Projects</div>
          <br />
          <div className="sec2-infod2 container mb-5" >
            {Constants.loremHeading2}
          </div>
          <div className="row container justify-content-center">
            <div className="sec4-pic pic41 col-12 col-sm-4"></div>
            <div className="sec4-pic pic42 col-12 col-sm-4"></div>
            <div
              className="sec4-pic pic43 col-12 col-sm-4"
              style={{ width: "352px" }}
            ></div>
            <div
              className="sec4-pic pic45 col-12 col-sm-4"
              style={{ width: "240px" }}
            ></div>
            <div
              className="sec4-pic pic44 col-12 col-sm-4"
              style={{ width: "401px" }}
            ></div>
            <div
              className="sec4-pic pic46 col-12 col-sm-4"
              style={{ width: "469px" }}
            ></div>
          </div>

          <div className="row sec-5 container">
            <div className="col-12 col-sm-6">
              <div className="sec5-pic img-fluid"></div>
            </div>
            <div className="col-12 col-sm-6">
              <div className="sec5-heading container">{Constants.loremHeading2}</div>
              <div className="sec5-para container">{Constants.loremPara2} {Constants.loremPara}</div>
              <Button className="jumbo-btn">Read More</Button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
