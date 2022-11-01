import React, { Component } from "react";
import Breadcrumb from "../../Components/Breadcrumb";
import "./index.css";

export default class News extends Component {
  render() {
    return (
      <>
        <Breadcrumb url="/news" name="News" />
        <div className="container">
          <div className="mt-5 row justify-content-center">
            <input
              type="text"
              className="search-bar"
              placeholder="🔍  Search"
            ></input>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-6">
              <div className="sec-1">
                <div className="sec-1-image img-fluid"></div>
                <div className="col-12">
                      <button className="sec-2-btn mt-5 d-inline-block">John smash</button>
                      <div className="sec-2-txt d-inline-block">.5min</div>
                    </div>
                <div className="sec-1-head mt-5">
                  Lorem Ipsum is simply dummy text dummy text{" "}
                </div>
                <div className="sec-1-para mt-5">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries,
                  <br /><br />
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  <br /><br />
                </div>
              </div>
              <hr />
              <div className="sec-1">
                <div className="sec-2-image img-fluid"></div>
                <div className="col-12">
                      <button className="sec-2-btn mt-5 d-inline-block">John smash</button>
                      <div className="sec-2-txt d-inline-block">.5min</div>
                    </div>
                <div className="sec-1-head mt-5">
                  Lorem Ipsum is simply dummy text dummy text{" "}
                </div>
                <div className="sec-1-para mt-5">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries,
                  <br /><br />
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  <br /><br />
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 sec-2">
              <div className="row part-2">
                <div className="col-4">
                  <div className="sec-2-img img-1 img-fluid"></div>
                </div>
                <div className="col-8">
                  <div className="row">
                    <div className="col-12">
                      <button className="sec-2-btn mt-2 d-inline-block">John smash</button>
                      <div className="sec-2-txt d-inline-block">.5min</div>
                    </div>
                    <div className="col-12">
                      <div className="sec-head mt-5">Lorem Ipsum is simply dummy text dummy text ? </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row part-2">
                <div className="col-4">
                  <div className="sec-2-img img-2 img-fluid"></div>
                </div>
                <div className="col-8">
                  <div className="row">
                    <div className="col-12">
                      <button className="sec-2-btn mt-2 d-inline-block">John smash</button>
                      <div className="sec-2-txt d-inline-block">.5min</div>
                    </div>
                    <div className="col-12">
                      <div className="sec-head mt-5">Lorem Ipsum is simply dummy text dummy text ? </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row part-2">
                <div className="col-4">
                  <div className="sec-2-img img-3 img-fluid"></div>
                </div>
                <div className="col-8">
                  <div className="row">
                    <div className="col-12">
                      <button className="sec-2-btn mt-2 d-inline-block">John smash</button>
                      <div className="sec-2-txt d-inline-block">.5min</div>
                    </div>
                    <div className="col-12">
                      <div className="sec-head mt-5">Lorem Ipsum is simply dummy text dummy text ? </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row part-2">
                <div className="col-4">
                  <div className="sec-2-img img-4 img-fluid"></div>
                </div>
                <div className="col-8">
                  <div className="row">
                    <div className="col-12">
                      <button className="sec-2-btn mt-2 d-inline-block">John smash</button>
                      <div className="sec-2-txt d-inline-block">.5min</div>
                    </div>
                    <div className="col-12">
                      <div className="sec-head mt-5">Lorem Ipsum is simply dummy text dummy text ? </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row part-2">
                <div className="col-4">
                  <div className="sec-2-img img-5 img-fluid"></div>
                </div>
                <div className="col-8">
                  <div className="row">
                    <div className="col-12">
                      <button className="sec-2-btn mt-2 d-inline-block">John smash</button>
                      <div className="sec-2-txt d-inline-block">.5min</div>
                    </div>
                    <div className="col-12">
                      <div className="sec-head mt-5">Lorem Ipsum is simply dummy text dummy text ? </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row part-2">
                <div className="col-4">
                  <div className="sec-2-img img-6 img-fluid"></div>
                </div>
                <div className="col-8">
                  <div className="row">
                    <div className="col-12">
                      <button className="sec-2-btn mt-2 d-inline-block">John smash</button>
                      <div className="sec-2-txt d-inline-block">.5min</div>
                    </div>
                    <div className="col-12">
                      <div className="sec-head mt-5">Lorem Ipsum is simply dummy text dummy text ? </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row part-2">
                <div className="col-4">
                  <div className="sec-2-img img-7 img-fluid"></div>
                </div>
                <div className="col-8">
                  <div className="row">
                    <div className="col-12">
                      <button className="sec-2-btn mt-2 d-inline-block">John smash</button>
                      <div className="sec-2-txt d-inline-block">.5min</div>
                    </div>
                    <div className="col-12">
                      <div className="sec-head mt-5">Lorem Ipsum is simply dummy text dummy text ? </div>
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
