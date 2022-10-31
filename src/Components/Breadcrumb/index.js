import React from "react";
import "./index.css";

const Breadcrumb = () => {
  return (
    <>
      <div className="container">
        <div>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <div className="container">
            <li class="breadcrumb-item">
              <a href="/home">Home</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              <a href="/services">Services</a>
            </li>
            </div>
          </ol>
        </nav>
        </div>
        <div className="container">
          <div className="bc-heading mt-5">
            Lorem Ipsum is simply dummy text of the printing and.
          </div>
          <div className="bc-para mt-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </div>
        </div>
      </div>
    </>
  );
};

export default Breadcrumb;
