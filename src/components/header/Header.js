import React from 'react';

const Header = () => (
  <header className="header-wrapper header-layout3 py-3 py-lg-0 px-85">
    <div className="container-fluid position-relative">
      <div className="row align-items-center">
        <div className="col-xl-2 d-none d-xl-block">
          <div className="header-btn">
            <a href="#" className="icon-btn bg-theme mr-2"><i className="far fa-search"></i></a>
            <a href="#" className="icon-btn bg-theme"><i className="fal fa-th-large"></i></a>
          </div>
        </div>
        <div className="col-md-5 col-xl-3 position-static d-none d-lg-block">
          <nav className="main-menu menu-style2 text-center">
            <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#service">Services</a></li>
              <li><a href="#feature">Features</a></li>
            </ul>
          </nav>
        </div>
        <div className="col-6 col-lg-2 col-xl-2">
          <div className="header-logo text-left text-lg-center pr-2">
            <a href="index.html"><img src="assets/img/logo.png" title="BestBeautyTown - Spa Beauty Salon" alt="BestBeautyTown - Spa Beauty Salon" /></a>
          </div>
        </div>
        <div className="col-md-5 col-xl-3 position-static d-none d-lg-block">
          <nav className="main-menu menu-style2 text-center">
            <ul>
              <li><a href="#price">Price</a></li>
              <li><a href="#team">Team</a></li>
              <li><a href="#blog">News</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
        <div className="col-xl-2  d-none d-xl-block">
          <div className="header-btn text-right">
            <a href="#" className="icon-btn bg-theme mr-2"><i className="far fa-search"></i></a>
            <a href="#" className="icon-btn bg-theme"><i className="fal fa-th-large"></i></a>
          </div>
        </div>
        <div className="col-6 d-block d-lg-none text-right">
          <button type="button" className="vs-menu-toggle text-theme border-theme"><i className="far fa-bars"></i></button>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
