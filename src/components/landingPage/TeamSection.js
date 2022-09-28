import React from "react";

const TeamSection = () => {
  return (
    <section className="vs-team-wrapper vs-team-layout2 space-top space-md-bottom" id="team">
      <div className="container">
        <div className="row text-center justify-content-center">
          <div className="col-md-11 col-lg-8 col-xl-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="section-title ">
              <h2 className="sec-title-style1">Our Team</h2>
              <p className="sec-text-style1">Access to our fitness centre and pool is free to all our hotel guests. For non-guests membership packages are available.</p>
            </div>
          </div>
        </div>

        <div className="row vs-carousel wow fadeInUp" data-wow-delay="0.3s" data-slidetoshow="3" data-mdslidetoshow="2" data-smslidetoshow="1" data-xsslidetoshow="1">

          <div className="col-xl-4">
            <div className="vs-team">
              <div className="vs-team-img image-scale-hover">
                <a href="team-details.html"><img src="assets/img/team/member-img-2-1.jpg" alt="Team Member Image" className="w-100" /></a>
              </div>
              <div className="vs-team-content">
                <ul className="social-links links-hover-border">
                  <li><a href="https://google.com"><i className="fab fa-facebook-f"></i></a></li>
                  <li><a href="https://google.com"><i className="fab fa-twitter"></i></a></li>
                  <li><a href="https://google.com"><i className="fab fa-linkedin-in"></i></a></li>
                  <li><a href="https://google.com"><i className="fab fa-behance"></i></a></li>
                </ul>
                <span className="plus-icon"><i className="far fa-plus"></i></span>
                <span className="vs-team-degi text-theme">Founder</span>
                <h3 className="h4 vs-team-name mb-0"><a href="team-details.html">Yaqube Bin</a></h3>
              </div>
            </div>
          </div>

          <div className="col-xl-4">
            <div className="vs-team">
              <div className="vs-team-img image-scale-hover">
                <a href="team-details.html"><img src="assets/img/team/member-img-2-2.jpg" alt="Team Member Image" className="w-100" /></a>
              </div>
              <div className="vs-team-content">
                <ul className="social-links links-hover-border">
                  <li><a href="https://google.com"><i className="fab fa-facebook-f"></i></a></li>
                  <li><a href="https://google.com"><i className="fab fa-twitter"></i></a></li>
                  <li><a href="https://google.com"><i className="fab fa-linkedin-in"></i></a></li>
                  <li><a href="https://google.com"><i className="fab fa-behance"></i></a></li>
                </ul>
                <span className="plus-icon"><i className="far fa-plus"></i></span>
                <span className="vs-team-degi text-theme">Founder</span>
                <h3 className="h4 vs-team-name mb-0"><a href="team-details.html">David Smith</a></h3>
              </div>
            </div>
          </div>

          <div className="col-xl-4">
            <div className="vs-team">
              <div className="vs-team-img image-scale-hover">
                <a href="team-details.html"><img src="assets/img/team/member-img-2-3.jpg" alt="Team Member Image" className="w-100" /></a>
              </div>
              <div className="vs-team-content">
                <ul className="social-links links-hover-border">
                  <li><a href="https://google.com"><i className="fab fa-facebook-f"></i></a></li>
                  <li><a href="https://google.com"><i className="fab fa-twitter"></i></a></li>
                  <li><a href="https://google.com"><i className="fab fa-linkedin-in"></i></a></li>
                  <li><a href="https://google.com"><i className="fab fa-behance"></i></a></li>
                </ul>
                <span className="plus-icon"><i className="far fa-plus"></i></span>
                <span className="vs-team-degi text-theme">Founder</span>
                <h3 className="h4 vs-team-name mb-0"><a href="team-details.html">Sowat Ahsan</a></h3>
              </div>
            </div>
          </div>

          <div className="col-xl-4">
            <div className="vs-team">
              <div className="vs-team-img image-scale-hover">
                <a href="team-details.html"><img src="assets/img/team/member-img-2-4.jpg" alt="Team Member Image" className="w-100" /></a>
              </div>
              <div className="vs-team-content">
                <ul className="social-links links-hover-border">
                  <li><a href="https://google.com"><i className="fab fa-facebook-f"></i></a></li>
                  <li><a href="https://google.com"><i className="fab fa-twitter"></i></a></li>
                  <li><a href="https://google.com"><i className="fab fa-linkedin-in"></i></a></li>
                  <li><a href="https://google.com"><i className="fab fa-behance"></i></a></li>
                </ul>
                <span className="plus-icon"><i className="far fa-plus"></i></span>
                <span className="vs-team-degi text-theme">Founder</span>
                <h3 className="h4 vs-team-name mb-0"><a href="team-details.html">Adam Deoid</a></h3>
              </div>
            </div>
          </div>


        </div>


      </div>
    </section>
  )
}

export default TeamSection;