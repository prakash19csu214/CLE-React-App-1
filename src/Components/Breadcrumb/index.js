import React from "react";
import "./index.css";

const Breadcrumb = (props) => {
  return (
    <>
      <div className="container">
        <div>
        <nav>
          <ol className="breadcrumb mt-5">
            <div className="container">
            <li className="breadcrumb-item">
              <a href="/home">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              <a href={props.url}>{props.name}</a>
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
