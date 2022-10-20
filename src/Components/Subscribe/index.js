import React from "react";
import "./index.css";
import * as Constants from "../../Services/Constants";

const Subscribe = () => {
  return (
    <>
      <div>
        <div className="section-2">
          <div className="sec2-info">{Constants.loremHeading}</div>
          <br />
          <div className="sec2-infod">{Constants.loremPara}</div>
        </div>
        <div className="row subscribe">
          <div className="col-12 col-sm-4">
            <div className="subs-heading">Stay in the loop</div>
            <div className="subs-para">
              Subscribe to receive the latest news and updates about TDA. We
              promise not to spam you!
            </div>
          </div>
          <div className="col-12 col-sm-8">
            <div class="input-group">
              <input
                type="text"
                class="form-control"
                placeholder="Enter email address"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <div className="btn-box">
                <div className="btn-txt">Continue</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Subscribe;
