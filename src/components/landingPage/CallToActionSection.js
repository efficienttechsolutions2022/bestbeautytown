import React from "react";

const CallToActionSection = () => {
  return (
    <section className="vs-cta-wrapper vs-cta-layout1 background-image space-md" data-vs-img="assets/img/cta/cta-img-1-1.jpg" data-overlay="body" data-opacity="6" id="cta">
      <div className="container">
        <div className="row justify-content-center my-lg-0 my-30">
          <div className="col-xl-8 wow fadeInUp" data-wow-delay="0.3s">
            <div className="cta-content text-center link-inherit">
              <div className="cta-thumb mb-2 mb-lg-4">
                <img src="assets/img/logo-mini-thumb.png" alt="BestBeautyTown - Spa Beauty Salon" />
              </div>
              <p className="text-white text-md">Don’t hassitate <a href="contact.html" className="text-underline text-bold"><u>Contact With</u></a> us any time</p>
              <h2 className="sec-title-style1 mb-3 mb-lg-4 text-white">Get A Free Quote</h2>
              <div className="vs-btn-group">
                <a href="contact.html" className="vs-btn wave-style1 mb-3 mb-sm-0 mr-sm-4 shadow-none">Appointment<i className="far fa-arrow-right"></i></a>
                <a href="tel:012345678910" className="vs-btn outline-style2 shadow-none"><i className="fal fa-phone-alt"></i>Make a Call</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToActionSection;