import React, { Component } from "react";
import { Button } from "reactstrap";
import * as Constants from "../../Services/Constants";
import Breadcrumb from "../../Components/Breadcrumb";
import "./index.css";

export default class Services extends Component {
  render() {
    return (
      <>
      <Breadcrumb url="/services" name="Services"/>
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
