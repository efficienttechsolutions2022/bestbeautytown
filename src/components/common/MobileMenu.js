import React from "react";

const MobileMenu = () => {
  return (
    <div className="vs-menu-wrapper">
        <div className="vs-menu-area">
            <button className="vs-menu-toggle text-theme"><i className="fal fa-times"></i></button>
            <div className="mobile-logo">
                <a href="index.html"><img src="assets/img/logo.png" alt="Clianio" /></a>
            </div>
            <div className="vs-mobile-menu link-inherit"></div>
        </div>
    </div>
  );
}

export default MobileMenu;