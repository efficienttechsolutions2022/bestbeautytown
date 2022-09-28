import React from "react";

const FeatureSection = () => {
  return (
    <section className="vs-features-wrapper vs-features-layout2 position-relative space-top">
      <div className="shape1 ani-moving-y position-absolute"><img src="assets/img/feature/shape-2-1.png" alt="Bg Shape" /></div>
      <div className="container">
        <div className="row gutters-20">
          <div className="col-md-6 col-lg-4 mb-20 mb-lg-0">
            <div className="vs-feature">
              <div className="vs-price-box1">
                <span className="text">Start</span>
                <span className="price"><sup>$</sup>30</span>
                <span className="sub">/off</span>
              </div>
              <div className="vs-feature-img">
                <img src="assets/img/feature/feature-img-2-1.jpg" alt="feature Image" className="w-100" />
              </div>
              <div className="vs-feature-content">
                <h2 className="h4 feature-title text-white mb-0">Hair Treatment</h2>
                <p className="feature-text text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-20 mb-lg-0">
            <div className="vs-feature mb-20">
              <div className="vs-feature-img">
                <img src="assets/img/feature/feature-img-2-2.jpg" alt="feature Image" className="w-100" />
              </div>
              <div className="vs-feature-content">
                <h2 className="h4 feature-title text-white mb-0">Bread Treatment</h2>
              </div>
            </div>
            <div className="vs-feature">
              <div className="vs-feature-img">
                <img src="assets/img/feature/feature-img-2-3.jpg" alt="feature Image" className="w-100" />
              </div>
              <div className="vs-feature-content">
                <h2 className="h4 feature-title text-white mb-0">Face Treatment</h2>
              </div>
            </div>
          </div>
          <div className=" col-lg-4">
            <div className="vs-feature">
              <div className="vs-price-box1">
                <span className="text">Start</span>
                <span className="price"><sup>$</sup>30</span>
                <span className="sub">/off</span>
              </div>
              <div className="vs-feature-img">
                <img src="assets/img/feature/feature-img-2-4.jpg" alt="feature Image" className="w-100" />
              </div>
              <div className="vs-feature-content">
                <h2 className="h4 feature-title text-white mb-0">Face Treatment</h2>
                <p className="feature-text text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeatureSection;