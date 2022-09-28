import React from "react";

const AboutSection = () => {
  return (
    <section className="vs-about-wrapper vs-about-layout4 position-relative space" id="about">
      <div className="shape1 ani-moving-x position-absolute d-none d-xl-inline-block"><img src="assets/img/about/about-shape-4-1.png" alt="Bg Shape" /></div>
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-xl-8 wow fadeInUp" data-wow-delay="0.3s">
            <div className="about-content-box3">
              <h2 className="sec-title-style1">Clean cuts. Close shaves.</h2>
              <p className="sec-text-style1">Holisticly myocardinate interactive portals vis-a-vis highly efficient outsourcing. Distinctively reconceptualize interactive products and client-centered niche markets. Professionally conceptualize covalent services with sticky meta-services. </p>
              <div className="vs-btn-group">
                <a href="service.html" className="vs-btn wave-style1 mb-3 mb-sm-0 mr-sm-3">Our Services<i className="far fa-arrow-right"></i></a>
                <a href="service.html" className="vs-btn outline-style1"><i className="fal fa-phone"></i>Make A Call</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection;