import React, { Component } from "react";
import Breadcrumb from "../../Components/Breadcrumb";
import './index.css'

export default class News extends Component {
  render() {
    return (
      <>
        <Breadcrumb url="/news" name="News" />
        <div className="container">
          <div className="mt-5 row justify-content-center">
            <input type="text" className="search-bar" placeholder="🔍  Search"></input>
          </div>
        </div>
        <div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-6">
              <div className="sec-1">
                <div className="sec-1-image"></div>
                <div className="sec-1-head"></div>
                <div className="sec-1-para"></div>

              </div>
              <hr />
              <div className="sec-2">
                <div className="sec-2-image"></div>
                <div className="sec-2-head"></div>
                <div className="sec-2-para"></div>

              </div>

              
            </div>
            <div className="col-12 col-sm-6">
              <div className="row">
                <div className="col-4">

                </div>
                <div className="col-8">
                  <div className="row">
                    <div className="col-12"></div>
                    <div className="col-12"></div>

                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-4">

                </div>
                <div className="col-8">
                  <div className="row">
                    <div className="col-12"></div>
                    <div className="col-12"></div>

                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-4">

                </div>
                <div className="col-8">
                  <div className="row">
                    <div className="col-12"></div>
                    <div className="col-12"></div>

                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-4">

                </div>
                <div className="col-8">
                  <div className="row">
                    <div className="col-12"></div>
                    <div className="col-12"></div>

                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-4">

                </div>
                <div className="col-8">
                  <div className="row">
                    <div className="col-12"></div>
                    <div className="col-12"></div>

                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-4">

                </div>
                <div className="col-8">
                  <div className="row">
                    <div className="col-12"></div>
                    <div className="col-12"></div>

                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-4">

                </div>
                <div className="col-8">
                  <div className="row">
                    <div className="col-12"></div>
                    <div className="col-12"></div>

                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-4">

                </div>
                <div className="col-8">
                  <div className="row">
                    <div className="col-12"></div>
                    <div className="col-12"></div>

                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        </div>
      </>
    );
  }
}
