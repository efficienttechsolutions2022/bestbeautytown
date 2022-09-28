import React from "react";

const AppointmentSection = () => {
  return (
    <section className="vs-appointment-wrapper vs-appointment-layout2 bg-fixed background-image space" data-vs-img="assets/img/appointment/appointment-bg-1.jpg" data-overlay="black" data-opacity="6" id="contact">
      <div className="container z-index-common">

        <form action="#" className="appointment-form-style1 input-white">
          <div className="form-title media pb-4 pb-lg-5 wow fadeInUp" data-wow-delay="0.3s">
            <div className="media-icon pr-3 align-self-center d-none d-sm-inline-block ">
              <span className="icon-btn bg-theme"><i className="fa-2x fal fa-calendar-alt"></i></span>
            </div>
            <div className="media-body">
              <p className="mb-0 text-white">Get relax any day & any Time</p>
              <h2 className="mb-0 text-white">Make Appointment</h2>
            </div>
          </div>
          <div className="inner-wapper bg-white px-60 py-40 wow fadeInUp" data-wow-delay="0.3s" data-overlay="theme" data-opacity="2">
            <div className="row gutters-20 pt-20">
              <div className="col-md-6 col-lg-4 form-group">
                <input type="text" className="form-control" placeholder="Your Name" />
                <i className="fal fa-user"></i>
              </div>
              <div className="col-md-6 col-lg-4 form-group">
                <input type="email" className="form-control" placeholder="Email address" />
                <i className="fal fa-envelope"></i>
              </div>
              <div className="col-md-6 col-lg-4 form-group">
                <input type="text" className="form-control" placeholder="Phone number" />
                <i className="fal fa-phone-alt"></i>
              </div>
              <div className="col-md-6 col-lg-4 form-group">
                <select>
                  <option>Select Subject</option>
                  <option>Sports Massage</option>
                  <option>Stone Massage</option>
                  <option>Facial & Massage</option>
                  <option>Body Massage</option>
                  <option>Spa & Massage</option>
                </select>
              </div>
              <div className="col-md-6 col-lg-4 form-group">
                <input type="text" className="form-control date-pick" placeholder="Select Date" />
                <i className="fal fa-calendar-alt"></i>
              </div>
              <div className="col-md-6 col-lg-4 form-group">
                <input type="text" className="form-control time-pick" placeholder="Select Time" />
                <i className="fal fa-clock"></i>
              </div>
              <div className="col-12 text-center form-group">
                <button type="submit" className="vs-btn wave-style1">Make Appointment<i className="fal fa-arrow-right"></i></button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default AppointmentSection;