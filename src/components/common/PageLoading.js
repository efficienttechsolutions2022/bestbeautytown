import React from "react";

const PageLoading = () => {
  return (
    <div className="preloader  ">
      <div className="preloader-inner">
        <div className="loader-logo">
          <img src="assets/img/logo-white.png" alt="BestBeautyTown - Spa Beauty Salon" />
        </div>
        <div className="preloader-box">
          <div className="letter">L</div>
          <div className="letter">O</div>
          <div className="letter">A</div>
          <div className="letter">D</div>
          <div className="letter">I</div>
          <div className="letter">N</div>
          <div className="letter">G</div>
        </div>
      </div>
    </div>
  );
}

export default PageLoading;