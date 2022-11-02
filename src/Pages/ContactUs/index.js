import React, { Component } from 'react'
import Breadcrumb from '../../Components/Breadcrumb'
import Map from '../../Assets/Images/Vector5.png'
import './index.css'

export default class ContactUs extends Component {
  render() {
    return (
      <>
        <Breadcrumb url="/contactus" name="Contact Us"/>
        <div className='container'>
        <div className='mt-5'>
        <img src={Map} alt="map" className="img-fluid col-12 justify-content-center row"/>
        </div>
        <div className='sec-2 container'>
        <div className='row d-flex justify-content-between'>
            <div className='col-12 col-sm-4'>
                <div className='sec2-head'>Follow Us</div>
                <div className='icons-sec mt-3'>
                    <i className="fa fa-brands fa-facebook-f fabox"></i>
                    <i className="fa fa-brands fa-instagram fabox"></i>
                    <i className="fa fa-brands fa-twitter fabox"></i>
                    <i className="fa fa-brands fa-linkedin fabox"></i>
                </div>
            </div>
            <div className='col-12 col-sm-3 d-flex align-items-center'>
                <div className='inline-block'>
                    <div><i className="fa fa-lg fa-phone"></i> <span className='mx-3 mid-no'>+94 0000 00000</span></div>
                </div>
            </div>
            <div className='col-12 col-sm-4 d-flex align-items-center'>
            <div className='row '>
            <div><i className="fa fa-lg fa-map"></i> <span className='mx-3 mid-no'>but also the leap into electronic 
typesetting</span></div>

                </div>
            </div>
        </div>
        </div>
        </div>
      </>
    )
  }
}
