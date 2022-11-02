import React, { Component } from 'react'
import Breadcrumb from '../../Components/Breadcrumb'
import Map from '../../Assets/Images/Vector5.png'
import './index.css'

export default class ContactUs extends Component {
  render() {
    return (
      <>
        <Breadcrumb url="/contactus" name="Contact Us"/>
        <div className='container mt-5'>
        <img src={Map} className="img-fluid col-12justify-content-center row"/>
        </div>
      </>
    )
  }
}
