import React from 'react';

const Footer = () => (
  <footer className="footer-wrapper footer-layout1">
    <div className="footer-widget footer-widget-layout1 pt-100 pb-70">
      <div className="container">
        <div className="row justify-content-xl-center gutters-40">
          <div className="col-lg-4 col-xl-4">
            <div className="widget  ">
              <div className="vs-widget-about">
                <div className="widget-about-logo mb-20 mb-lg-25">
                  <a href="index.html">
                    <img src="assets/img/logo.png" alt="Clianio" />
                  </a>
                </div>
                <p className="widget-about-text mb-20">Main practice areas of the firm include Admiralty, Maritime and Ship Arrest, Arbitration, Mediation and ADRs, Aviation Matters, Banking, Finance & Investment, Capital Market, Commercial Litigation, Commercial Transactions, International Trade, Construction & Engineering., Foreign Investment and Business Set-Up. firm include Admiralty, Maritime and Ship Arrest, Arbitration</p>
                <a href="contact.html" className="vs-btn wave-style1">Make Appointment<i className="far fa-arrow-right"></i></a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-4">
            <div className="widget  ">
              <div className="vs-widget-contact contact-widget-style2">
                <span className="text-theme mb-4 d-block"><i className="fa-4x flaticon-contact"></i></span>
                <h4 className="mb-15">Contact Us</h4>
                <p className="mb-10">Phone: +097 986 875 98 8</p>
                <p className="mb-10">Email: info@webmail.com</p>
                <p className="mb-25">Office: 14/A, Brown Tower, NewYork, US</p>
                <a href="contact.html" className="vs-btn outline-style1">Get Directions</a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-4">
            <div className="widget   ">
              <h3 className="widget_title">Latest Posts</h3>
              <div className="vs-widget-recent-post has-light-border">
                <div className="recent-post media">
                  <div className="media-img">
                    <img src="assets/img/widget/post-thumb-1.jpg" alt="Recent Post Image" />
                  </div>
                  <div className="media-body pl-20">
                    <span><i className="fal fa-calendar-alt text-theme"></i> 05 June, 2020.</span>
                    <h4 className="h5 mb-0"><a href="blog.html">Managing Partner along with Senior Counsels.</a></h4>
                  </div>
                </div>
                <div className="recent-post media">
                  <div className="media-img">
                    <img src="assets/img/widget/post-thumb-2.jpg" alt="Recent Post Image" />
                  </div>
                  <div className="media-body pl-20">
                    <span><i className="fal fa-calendar-alt text-theme"></i> 28 June, 2020.</span>
                    <h4 className="h5 mb-0"><a href="blog.html">Managing Partner along with Senior Counsels.</a></h4>
                  </div>
                </div>
                <div className="recent-post media">
                  <div className="media-img">
                    <img src="assets/img/widget/post-thumb-3.jpg" alt="Recent Post Image" />
                  </div>
                  <div className="media-body pl-20">
                    <span><i className="fal fa-calendar-alt text-theme"></i> 30 July, 2020.</span>
                    <h4 className="h5 mb-0"><a href="blog.html">Managing Partner along with Senior Counsels.</a></h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-copyright bg-light-theme  py-3 link-inherit">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 text-center text-lg-left">
            <p className="mb-0 text-bold">Copyright <i className="fal fa-copyright"></i> 2020 <a href="index.html">BestBeautyTown</a>. All rights reserved by <a href="https://bestbeautytown.com/">BestBeautyTown</a>.</p>
          </div>
          <div className="col-lg-6 text-lg-right d-none d-lg-inline-block">
            <ul className="social-links links-hover-border">
              <li><a href="https://google.com"><i className="fab fa-facebook-f"></i></a></li>
              <li><a href="https://google.com"><i className="fab fa-twitter"></i></a></li>
              <li><a href="https://google.com"><i className="fab fa-linkedin-in"></i></a></li>
              <li><a href="https://google.com"><i className="fab fa-behance"></i></a></li>
              <li><a href="https://google.com"><i className="fal fa-basketball-ball"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
