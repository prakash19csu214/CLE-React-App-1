import React from "react";

function Footer(){
    return(
    <div className="footer">
        <div className="container">
            <div className="row justify-content-center">           
                <div className="col-4 col-sm-3">
                <span className="logo">LOGO</span>  
                <div className="footer-details">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                <br />
                <br />
                @Company.com
                </div>
                </div>
                <div className="col-4 offset-sm-1 col-sm-2">
                    <h5>About Us</h5>
                    <ul className="list-unstyled footer-details">
                        <li>Company</li><br />
                        <li>Portfolio</li><br />
                        <li>Careers</li><br />
                        <li>Contact us</li><br />
                    </ul>
                </div>
                <div className="col-4 col-sm-3">
                    <h5>Contact Us</h5>
                    <address className="footer-details">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />
                      <div className="footer-details">
		              <i className="fa fa-phone fa-lg"></i> +9000 0000 000<br />
                      <br />
                    </div>
                    </address>
                </div>
                <div className="col-12 col-sm-3 align-self-center">
                    <div className="text-center">
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                        <a className="btn btn-social-icon btn-instagram" href="http://youtube.com/"><i className="fa fa-instagram"></i></a>
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                        <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                    </div>
                </div>
            </div>

        <br />

        <div className="bord-footer">

        </div>

            <br />
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p>Copyright ® 2021 Company All rights Rcerved</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer;