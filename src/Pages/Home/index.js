import React, { Component } from 'react'
import {Jumbotron, Button} from 'reactstrap'

export default class Home extends Component {
  render() {
    return (
        <>
        <Jumbotron>
        <div className="container">
          <div className="row row-header">
            <div className="col-12 col-sm-4">
              <br />
              <div className='heading-jumbo'>
              Digital Marketing
              </div>
              <p>
              Work that we produce for our clients
              </p>
              <div className='jumbo-para'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
              </div>
               <Button className='jumbo-btn'>
                Get More Details
               </Button>
            </div>
            <div className='col-sm-6'>
                <div className='jumbo-pic'></div>
            </div>
          </div>
        </div>
      </Jumbotron>
      <br />
      <div className='section-2'>
        <div className='sec2-heading'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </div>
        <br />
        <div className='sec2-info'>
        Lorem Ipsum
        </div>
        <br />
        <div className='sec2-infod'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        </div>

      <div className='sec2-pic3'></div>

      <br />
      <div className='sec2-heading'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </div>
        <br />
        <div className='sec2-infod2'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        </div>
        </div>

        <div className='section-3'>
        <div className='sec2-info'>
        Lorem Ipsum
        </div>
        <br />
        <div className='sec2-infod'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        </div>

        <div className='row sec3card'>
          <div className='col-3'>
              <div class="card sec3-card">
              <div class="card-body">
              <button type="button" class="btn btn-outline-danger">Lorem Ipsum</button>
              <br />
              <br />
              <h2 class="card-title">Lorem Ipsum</h2>
              <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
              <br />
              <br />
              <a href="#" class="card-link">Read More</a>
              </div>
              </div>
          </div>
          <div className='col-3'>
              <div class="card sec3-card">
              <div class="card-body">
              <button type="button" class="btn btn-outline-warning">Lorem Ipsum</button>
              <br />
              <br />
              <h2 class="card-title">Lorem Ipsum</h2>
              <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
              <br />
              <br />
              <a href="#" class="card-link">Read More</a>
              </div>
              </div>
          </div>
          <div className='col-3'>
              <div class="card sec3-card">
              <div class="card-body">
              <button type="button" class="btn btn-outline-primary">Lorem Ipsum</button>
              <br />
              <br />
              <h2 class="card-title">Lorem Ipsum</h2>
              <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
              <br />
              <br />
              <a href="#" class="card-link">Read More</a>
              </div>
              </div>
          </div>
          <div className='col-3'>
              <div class="card sec3-card">
              <div class="card-body">
              <button type="button" class="btn btn-outline-success">Lorem Ipsum</button>
              <br />
              <br />
              <h2 class="card-title">Lorem Ipsum</h2>
              <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
              <br />
              <br />
              <a href="#" class="card-link">Read More</a>
              </div>
              </div>
          </div>
        </div>
      </div>

      <div className='section-4'>

      <br />
      <br />
      <div className='sec2-heading'>
      Our Recent Projects
        </div>
        <br />
        <div className='sec2-infod2'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Printing and typesetting industry
        </div>

        <div className='sec4-pic pic41'>
          
        </div>
        <div className='sec4-pic pic42'></div>
        <div className='sec4-pic pic43'></div>

      </div>

      <div>Home</div>
      </>
    )
  }
}
