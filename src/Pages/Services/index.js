import React, { Component } from "react";
import { Button } from "reactstrap";
import * as Constants from "../../Services/Constants";
import "./index.css";

export default class Services extends Component {
  render() {
    return (
      <>
        <div className="bc-top">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="/home">Home</a>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                <a href="/services">Services</a>
              </li>
            </ol>
          </nav>

          <div className="bc-heading">
            Lorem Ipsum is simply dummy text of the printing and.
          </div>
          <div className="bc-para">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </div>
        </div>

        <div className="sec-2-m">
          <div className="sec-2">
            <div className="row sec-5">
              <div className="col-12 col-sm-6">
                <div className="sec5-pic1"></div>
              </div>
              <div className="col-12 col-sm-6">
                <div className="sec5-heading">{Constants.loremHeading2}</div>
                <div className="sec5-para">
                  {Constants.loremPara2} {Constants.loremPara}
                </div>
                <Button className="jumbo-btn">Read More</Button>
              </div>
            </div>
            <div className="row sec-5">
              <div className="col-12 col-sm-6">
                <div className="sec5-heading">{Constants.loremHeading2}</div>
                <div className="sec5-para">
                  {Constants.loremPara2} {Constants.loremPara}
                </div>
                <Button className="jumbo-btn">Read More</Button>
              </div>
              <div className="col-12 col-sm-6">
                <div className="sec5-pic2"></div>
              </div>
            </div>
            <div className="row sec-5">
              <div className="col-12 col-sm-6">
                <div className="sec5-pic3"></div>
              </div>
              <div className="col-12 col-sm-6">
                <div className="sec5-heading">{Constants.loremHeading2}</div>
                <div className="sec5-para">
                  {Constants.loremPara2} {Constants.loremPara}
                </div>
                <Button className="jumbo-btn">Read More</Button>
              </div>
            </div>
            <div className="row sec-5">
              <div className="col-12 col-sm-6">
                <div className="sec5-heading">{Constants.loremHeading2}</div>
                <div className="sec5-para">
                  {Constants.loremPara2} {Constants.loremPara}
                </div>
                <Button className="jumbo-btn">Read More</Button>
              </div>
              <div className="col-12 col-sm-6">
                <div className="sec5-pic4"></div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
