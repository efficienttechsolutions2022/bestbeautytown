import React from "react";

const PricePlanSection = () => {
  return (
    <section className="vs-pricing-wrapper  background-image bg-bottom space" data-vs-img="assets/img/price/price-bg-3-1.jpg" id="price">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-md-11 col-lg-8 col-xl-6 wow fadeIn" data-wow-delay="0.3s">
            <div className="section-title">
              <h2 className="sec-title-style1">Price Plans</h2>
              <p className="sec-text-style1">Access to our fitness centre and pool is free to all our hotel guests. For non-guests membership packages are available.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.3s">
            <ul className="nav tabs-style1 justify-content-center" role="tablist">
              <li>
                <a className="nav-link active" id="basicPlan-tab" data-toggle="tab" href="#basicPlan" role="tab" aria-controls="basicPlan" aria-selected="true">Basic Plan</a>
              </li>
              <li>
                <a className="nav-link" id="familyPlan-tab" data-toggle="tab" href="#familyPlan" role="tab" aria-controls="familyPlan" aria-selected="false">Family Plan</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row no-gutters ">

          <div className="col-lg-6 mb-30 mb-lg-0 wow fadeInUp" data-wow-delay="0.3s">

            <div className="tab-content vs-pricing-layout2" id="myTabContent">
              <div className="tab-pane fade show active" id="basicPlan" role="tabpanel" aria-labelledby="basicPlan-tab">
                <div className="vs-price-box" data-overlay="theme">
                  <div className="vs-price-head border-light-theme d-flex justify-content-between align-items-end">
                    <div className="vs-price text-theme">
                      <sub>$</sub><span>99</span><sub>.00</sub>
                    </div>
                    <div className="vs-price-package text-right">
                      <h3 className="package-name mb-0">Basic Plan</h3>
                      <span className="package-time">Per Month</span>
                    </div>
                  </div>
                  <div className="vs-price-body text-center">
                    <ul className="vs-price-list">
                      <li>Makeup & Massage</li>
                      <li>Walkout Body Building</li>
                      <li>Preserved Hemilton Massge</li>
                      <li>Foot & Nail Care</li>
                      <li>Hair Cut & Style</li>
                    </ul>
                    <a href="price.html" className="vs-btn wave-style1">Make Appointment<i className="far fa-arrow-right"></i></a>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="familyPlan" role="tabpanel" aria-labelledby="familyPlan-tab">
                <div className="vs-price-box" data-overlay="theme">
                  <div className="vs-price-head border-light-theme d-flex justify-content-between align-items-end">
                    <div className="vs-price text-theme">
                      <sub>$</sub><span>199</span><sub>.00</sub>
                    </div>
                    <div className="vs-price-package text-right">
                      <h3 className="package-name mb-0">Family Plan</h3>
                      <span className="package-time">Per Month</span>
                    </div>
                  </div>
                  <div className="vs-price-body text-center">
                    <ul className="vs-price-list">
                      <li>Makeup & Massage</li>
                      <li>Walkout Body Building</li>
                      <li>Preserved Hemilton Massge</li>
                      <li>Foot & Nail Care</li>
                      <li>Hair Cut & Style</li>
                    </ul>
                    <a href="price.html" className="vs-btn wave-style1">Make Appointment<i className="far fa-arrow-right"></i></a>
                  </div>
                </div>
              </div>
            </div>


          </div>

          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.4s">
            <div className="price-list-style1 bg-white py-60 px-60 rounded-0">
              <div className="vs-price-list media">
                <div className="media-img mr-30">
                  <a href="price.html"><img src="assets/img/price/price-img-1-1.png" alt="Price Package Image" /></a>
                </div>
                <div className="media-body align-self-center">
                  <h3 className="price-title h4 mb-10"><a href="price.html">Personalized Massage</a></h3>
                  <p className="mb-0">60 min <span className="inner-label">$100</span> / 90 min <span className="inner-label">$145</span></p>
                </div>
              </div>

              <div className="vs-price-list media">
                <div className="media-img mr-30">
                  <a href="price.html"><img src="assets/img/price/price-img-1-2.png" alt="Price Package Image" /></a>
                </div>
                <div className="media-body align-self-center">
                  <h3 className="price-title h4 mb-10"><a href="price.html">Couples Massage</a></h3>
                  <p className="mb-0">60 min <span className="inner-label">$100</span> / 90 min <span className="inner-label">$145</span></p>
                </div>
              </div>

              <div className="vs-price-list media">
                <div className="media-img mr-30">
                  <a href="price.html"><img src="assets/img/price/price-img-1-3.png" alt="Price Package Image" /></a>
                </div>
                <div className="media-body align-self-center">
                  <h3 className="price-title h4 mb-10"><a href="price.html">Hot Stone Massage</a></h3>
                  <p className="mb-0">60 min <span className="inner-label">$100</span> / 90 min <span className="inner-label">$145</span></p>
                </div>
              </div>

              <div className="vs-price-list media">
                <div className="media-img mr-30">
                  <a href="price.html"><img src="assets/img/price/price-img-1-4.png" alt="Price Package Image" /></a>
                </div>
                <div className="media-body align-self-center">
                  <h3 className="price-title h4 mb-10"><a href="price.html">Pure Full Body Massage</a></h3>
                  <p className="mb-0">60 min <span className="inner-label">$100</span> / 90 min <span className="inner-label">$145</span></p>
                </div>
              </div>


            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default PricePlanSection;