import React, { Component } from "react";
import Card from "../../Components/Card";
import { Button } from "reactstrap";
import * as Constants from "../../Services/Constants";
import "./index.css";

export default class About extends Component {
  render() {
    return (
      <div className="aboutus">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="/home">Home</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              <a href="/aboutus">About</a>
            </li>
          </ol>
        </nav>
        <div className="row jumbo">
          <div className="col-12 col-sm-6">
            <div className="lorem-head">
              Lorem Ipsum is simply dummy text of the printing and.
            </div>
            <div className="head-para">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </div>
            <button className="head-btn">
              <p className="head-btn-txt">Get in touch</p>
            </button>
          </div>
          <div className="col-12 col-sm-6 pic-head"></div>
        </div>

        <section className="sec-1">
          <div className="sec1-head">Why work with us</div>
          <Card />
        </section>

        <div className="secla-m">
          <div className="secla">
            <div className="row sec-5">
              <div className="col-12 col-sm-6">
                <div className="sec5-pic5"></div>
              </div>
              <div className="col-12 col-sm-6">
                <div className="sec5-heading">{Constants.loremHeading2}</div>
                <div className="sec5-para">
                  {Constants.loremPara2} {Constants.loremPara}
                </div>
                <Button className="jumbo-btn">Read More</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
