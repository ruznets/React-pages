import React from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class="container">
      <div class="row justify-content-center align-items-center">
        <div class="col-5 col-md-12 col-lg-12 col-xl-12  pt-5 ">
          <div class="row justify-content-between ">
            <img src="logo.png" alt="photo" class="rounded float-left pb-3 "/>
              <ul class="nav justify-content-end text-uppercase ">
                <li class="nav-item px-2">
                  <a class="nav-link active text-dark" href="#">sea</a>
                </li>
                <li class="nav-item px-2">
                  <a class="nav-link text-dark" href="#">Air</a>
                </li>
                <li class="nav-item px-2">
                  <a class="nav-link text-dark" href="#">Road</a>
                </li>
                <li class="nav-item px-2">
                  <a class="nav-link text-dark" href="#">Projects</a>
                </li>
                <li class="nav-item px-2">
                  <a class="nav-link text-dark" href="#">News</a>
                </li>
                <li class="nav-item px-2">
                  <a class="nav-link text-dark" href="#">About</a>
                </li>
                <li class="nav-item px-2">
                  <a class="nav-link text-dark pr-0" href="#">Contact</a>
                </li>
              </ul>
                </div>
          </div>
          <div class="view">
            <div class="box">
              <p class="box-text">Service to <br/>shipping since 1797</p>
                </div>
            </div>
            <div class="row w-100">
              <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6  justify-content-center align-items-center   p-0">
                <div class="card-1">
                  <h2 class="header">HECKSHER SINCE 1797</h2>
                  <p class="text">Welcome to Hecksher, Denmark’s oldest shipping company.
                      Founded on June 2nd 1797 by Samuel Siegfried Hecksher we are the oldest shipping company in
                      Denmark. With more than 219 years experience to build upon the company is as young and
                      energetic as ever and thriving in our modern fast changing world at sea, on land and in the
                            air.<br/>We are, despite our age a very modern, flexible and professional company that
                    prides itself
                            on delivering optimum shipping solutions to our customers every time.</p>
                    <p class="text">Welcome aboard Hecksher – Services to shipping since 1797!</p>
                    </div>
                </div>
                <div class="col-12  col-sm-12 col-md-12 col-lg-6 col-xl-6 justify-content-center align-items-center  p-0">
                  <div class="card-2">
                    <h2 class="header">NEWS</h2>
                    <p class="date">31/10-2016</p>
                    <p class="news-title">Ocean Alliance global network revealed</p>

                    <p class="text">Ocean Alliance global network revealed Alliance to deploy 350 containerships
                        with 3.5m teu total carrying capacity. OCEAN Alliance members came together on Thursday to
                        sign a document detailing its planned service coverage in the market. Entitled the Day One
                        Product, the proposed network calls for the deployment of 350 containerships with
                        approximately 3.5m teu total carrying capacity. “The signing of the Day One Product marks
                            an important step forward to show just how committed v</p>
                    <div class="button"><a href="">READ MORE</a></div>
                  </div>
                </div>
              </div>
              <div class="row w-100">
                <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6  justify-content-center align-items-center p-0">
                  <div class="view-card-1">
                    <div class="box-card">
                      <a class="bt-card" href="">SEA</a>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6  justify-content-center align-items-center p-0">
                  <div class="view-card-2">
                    <div class="box-card">
                      <a class="bt-card" href="">AIR</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row w-100">
                <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6  justify-content-center align-items-center p-0">
                  <div class="view-card-3">
                    <div class="box-card">
                      <a class="bt-card" href="">ROAD</a>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6  justify-content-center align-items-center p-0">
                  <div class="view-card-4">
                    <div class="box-card">
                      <a class="bt-card" href="">PROJECTS</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          );
        }
        
        export default App;
