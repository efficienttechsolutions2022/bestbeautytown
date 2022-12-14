import React from "react";

const AboutSection2 = () => {
  return (
    <section className="vs-about-wrapper vs-about-layout5 position-relative space">
      <div className="shape1 ani-moving-x position-absolute d-none d-xl-inline-block"><img src="assets/img/about/shape-4-1.png" alt="Shape" /></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-xl-5 wow fadeInUp" data-wow-delay="0.3s">
            <div className="about-image-box4 position-relative mb-30 mb-lg-0 pb-90">
              <div className="big-img d-block d-lg-inline-block">
                <a href="about.html">
                  <img src="assets/img/about/about-img-4-1.jpg" alt="About Image" />
                </a>
              </div>
              <div className="small-img1 d-none d-xl-inline-block">
                <a href="about.html">
                  <img src="assets/img/about/about-img-4-2.jpg" alt="About Image" className="w-100" />
                </a>
              </div>
              <div className="experance-box">
                <div className="box-content bg-theme">
                  <span className="text-font2 sec-title-style1 text-white counter">25</span>
                  <p className="text-font2 text-md mb-0 text-white">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-xl-6 align-self-center offset-xl-1">
            <div className="about-content-box4 pl-50">
              <h2 className="sec-title-style1">Our Features</h2>
              <p className="text-font2 text-20">Our fitness centre is one of the best in London and is
                equipped with the latest cutting edge equipment.</p>
              <div className="text-box1 py-0 media align-items-center">
                <div className="media-img mr-sm-4">
                  <img src="assets/img/about/about-img-2-2.jpg" alt="Thumb Image" />
                </div>
                <div className="media-body">
                  <p className="mb-0">A range of different massage techniques,
                    reflexology, body scrubs and facial are available
                    on-site which will help.</p>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas.</p>
              <div className="vs-btn-group justify-content-start">
                <a href="service.html" className="vs-btn wave-style1 mr-sm-3">Our Services<i className="far fa-arrow-right"></i></a>
                <a href="service.html" className="vs-btn outline-style1"><i className="fal fa-phone"></i>Make A Call</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection2;