import React, { Component } from "react";
import Breadcrumb from "../../Components/Breadcrumb";
import Map from "../../Assets/Images/Vector5.png";
import "./index.css";

export default class ContactUs extends Component {
  render() {
    return (
      <>
        <Breadcrumb url="/contactus" name="Contact Us" />
        <div className="container">
          <div className="mt-5">
            <img
              src={Map}
              alt="map"
              className="img-fluid col-12 justify-content-center row"
            />
          </div>
          <div className="sec-2 container">
            <div className="row d-flex justify-content-between">
              <div className="col-12 col-sm-4">
                <div className="sec2-head">Follow Us</div>
                <div className="icons-sec mt-3">
                  <i className="fa fa-brands fa-facebook-f fabox"></i>
                  <i className="fa fa-brands fa-instagram fabox"></i>
                  <i className="fa fa-brands fa-twitter fabox"></i>
                  <i className="fa fa-brands fa-linkedin fabox"></i>
                </div>
              </div>
              <div className="col-12 col-sm-3 d-flex align-items-center">
                <div className="inline-block">
                  <div>
                    <i className="fa fa-lg fa-phone"></i>{" "}
                    <span className="mx-3 mid-no">+94 0000 00000</span>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-4 d-flex align-items-center">
                <div className="row ">
                  <div>
                    <i className="fa fa-lg fa-map"></i>{" "}
                    <span className="mx-3 mid-no">
                      but also the leap into electronic typesetting
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sec-3 container mt-5">
            <div className="sec3-head text-center">Say hello</div>
            <div className="sec3-para text-center">
              Lorem Ipsum is simply dummy text of the printing .
            </div>
            <form className="container mt-5">
              <div class="form-row d-flex justify-content-center">
                <div class="form-group col-md-5">
                  <label for="first">First Name</label>
                  <input
                    type="first"
                    class="form-control"
                    id="first"
                    placeholder="First Name"
                  />
                </div>
                <div class="form-group offset-2 col-md-5">
                  <label for="inputPassword4">Last Name</label>
                  <input
                    type="last"
                    class="form-control"
                    id="last"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div class="form-row ">
                <div class="form-group col-md-12">
                  <label for="inputEmail4">Email Address</label>
                  <input
                    type="email"
                    class="form-control"
                    id="inputEmail4"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div class="form-group">
                <label for="message">Message</label>
                <textarea
                  type="text"
                  class="form-control"
                  id="message"
                  placeholder="Message"
                  cols="100"
                />
              </div>

              <button type="submit" className="btn btn-color mt-5">
                Get in touch
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }
}
