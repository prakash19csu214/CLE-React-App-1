import React, { Component } from "react";
import { Jumbotron, Button } from "reactstrap";
import Card from "../../Components/Card";
import * as Constants from '../../Services/Constants'
import './index.css'

export default class Home extends Component {
  render() {
    return (
      <>
        <Jumbotron>
          <div className="container">
            <div className="row row-header">
              <div className="col-12 col-sm-4">
                <br />
                <div className="heading-jumbo">Digital Marketing</div>
                <p>{Constants.JumbHeading}</p>
                <div className="jumbo-para">
                  {Constants.JumbPara}
                </div>
                <Button className="jumbo-btn">Get More Details</Button>
              </div>
              <div className="col-12 col-sm-6">
                <div className="jumbo-pic"></div>
              </div>
            </div>
          </div>
        </Jumbotron>
        <br />
        <div className="section-2">
          <div className="sec2-heading">
            {Constants.loremHeading2}
          </div>
          <br />
          <div className="sec2-info">{Constants.loremHeading}</div>
          <br />
          <div className="sec2-infod">
          {Constants.loremPara}
          </div>

          <div className="sec2-pic3"></div>

          <br />
          <div className="sec2-heading">
          {Constants.loremHeading2}
          </div>
          <br />
          <div className="sec2-infod2">
          {Constants.loremPara}
          </div>
        </div>

        <div className="section-3">
          <div className="sec2-info">{Constants.loremHeading}</div>
          <br />
          <div className="sec2-infod">
          {Constants.loremPara}
          </div>

          <div className="row sec3card">
            <Card />
          </div>
        </div>

        <div className="section-4">
          <br />
          <br />
          <div className="sec2-heading">Our Recent Projects</div>
          <br />
          <div className="sec2-infod2" style={{textAlign: "end"}}>
          {Constants.loremHeading2}
          </div>

          <div className="sec4-pic pic41"></div>
          <div className="sec4-pic pic42"></div>
          <div className="sec4-pic pic43"></div>
        </div>

        <div>Home</div>
      </>
    );
  }
}
