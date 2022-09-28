import React from "react";

const StickyHeader = () => {
  return (
    <div className="sticky-header-wrap sticky-header py-1 py-sm-2 py-lg-1">
      <div className="container position-relative">
        <div className="row align-items-center">
          <div className="col-5 col-md-3">
            <div className="logo">
              <a href="index.html"><img src="assets/img/logo.png" alt="Clianio" /></a>
            </div>
          </div>
          <div className="col-7 col-md-9 text-right position-static">
            <nav className="main-menu menu-sticky1 d-none d-lg-block link-inherit mobile-menu-active">
              <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#service">Services</a></li>
                <li><a href="#feature">Features</a></li>
                <li><a href="#price">Price</a></li>
                <li><a href="#team">Team</a></li>
                <li><a href="#blog">News</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </nav>
            <button className="vs-menu-toggle text-theme border-theme d-inline-block d-lg-none"><i className="far fa-bars"></i></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StickyHeader;