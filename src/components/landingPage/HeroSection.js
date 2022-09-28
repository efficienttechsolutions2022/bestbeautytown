import React from "react";

const HeroSection = () => {
  return (
    <section className="vs-hero-wrapper vs-hero-layout3 position-relative mx-100">
      <div className="vs-hero-carousel" data-height="1010" data-allowfullscreen="true">
        <div className="ls-slide" data-ls="duration: 10000; transition2d: 5;">
          <img src="assets/img/hero/hero-img-3-1.jpg" alt="Slide Image" className="ls-bg" />
            <img src="assets/img/shape/hero-shape-3-1.png" className="ls-l ls-none-md" alt="Hero Overlay Shape" style={{top: 0, left: 16, width: 1885, height: 990, zIndex: 0}} data-ls="static:forever;" />
              <h1 className="hero-title text-white ls-l" style={{ left: "50%", top: 330, width: 1100, fontSize: 72, whiteSpace: "normal", textAlign: "center", lineHeight: 90 }} data-ls="offsetxin: 100; durationin: 1000; delayin: 700; easingin:easeOutQuint; offsetxout: 50; durationout: 1000;">Giving you a legendary haircut with traditional service.</h1>
              <span className="hero-subtitle text-white ls-l" style={{ left: "50%", top: 530, fontSize: 20, fontWeight:700, whiteSpace: "normal", width: 990, textAlign: "center" }} data-ls="offsetxin: -200; durationin: 1000; delayin: 600; easingin:easeOutQuint; offsetxout: -50; durationout: 1000;">Complete hair transformation.</span>
              <div className="hero-btn ls-l" style={{top: 590, left: "49%", width: 266, height: 80, lineHeight: 80, fontSize: 14, padding: 7, paddingLeft: 40, overflow: "hidden", boxShadow: "none" }} data-ls="offsetxin: 100; durationin: 1000; delayin: 600; easingin:easeOutQuint; offsetxout: 50; durationout: 1000;">
                <a href="contact.html" className="vs-btn wave-style1">Make Appointment<i className="far fa-arrow-right"></i></a>
              </div>
            </div>
            <div className="ls-slide" data-ls="duration: 10000; transition2d: 5;">
              <img src="assets/img/hero/hero-img-3-2.jpg" alt="Slide Image" className="ls-bg" />
                <h1 className="hero-title text-white ls-l" style={{left: "50%", top: 330, width: 1100, fontSize: 72, whiteSpace: "normal", textAlign: "center", lineHeight: 90}} data-ls="offsetxin: 100; durationin: 1000; delayin: 700; easingin:easeOutQuint; offsetxout: 50; durationout: 1000;">Offering you a modern haircut with special service.</h1>
                <span className="hero-subtitle text-white ls-l" style={{left: "50%", top: 530, fontSize: 20, fontWeight:700, whiteSpace: "normal", width: 990, textAign: "center"}} data-ls="offsetxin: -200; durationin: 1000; delayin: 600; easingin:easeOutQuint; offsetxout: -50; durationout: 1000;">Complete hair transformation.</span>
                <div className="hero-btn ls-l" style={{top: 590, left: "49%", width: 266, height: 80, lineHeight: 80, fontSize: 14, padding: 7, paddingLeft: 40, overflow: "hidden", boxShadow: "none" }} data-ls="offsetxin: 100; durationin: 1000; delayin: 600; easingin:easeOutQuint; offsetxout: 50; durationout: 1000;">
                  <a href="contact.html" className="vs-btn wave-style1">Make Appointment<i className="far fa-arrow-right"></i></a>
                </div>
            </div>
            <div className="ls-slide" data-ls="duration: 10000; transition2d: 5;">
              <img src="assets/img/hero/hero-img-3-3.jpg" alt="Slide Image" className="ls-bg" />
                <h1 className="hero-title text-white ls-l" style={{ left: "50%", top: 330, width: 1100, fontSize: 72, whiteSpace: "normal", textAlign: "center", lineHeight: 90 }} data-ls="offsetxin: 100; durationin: 1000; delayin: 700; easingin:easeOutQuint; offsetxout: 50; durationout: 1000;">Take a cool & stylish haircut
                  with wonderful service</h1>
                <span className="hero-subtitle text-white ls-l" style={{left: "50%", top: 530, fontSize: 20, fontWeight:700, whiteSpace: "normal", width: 990, textAlign: "center"}} data-ls="offsetxin: -200; durationin: 1000; delayin: 600; easingin:easeOutQuint; offsetxout: -50; durationout: 1000;">Complete hair transformation.</span>
                <div className="hero-btn ls-l" style={{top: 590, left: "49%", width: 266, height: 80, lineHeight: 80, fontSize: 14, padding: 7, paddingLeft: 40, overflow: "hidden", boxShadow: "none"}} data-ls="offsetxin: 100; durationin: 1000; delayin: 600; easingin:easeOutQuint; offsetxout: 50; durationout: 1000;">
                  <a href="contact.html" className="vs-btn wave-style1">Make Appointment<i className="far fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
    </section>
  );
}

export default HeroSection;