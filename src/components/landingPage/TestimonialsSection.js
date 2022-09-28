import React from "react";

const TestimonialsSection = () => {
  return (
    <section className="vs-testimonial-wrapper bg-fixed vs-testimonial-layout1 background-image space-top space-md-bottom" data-vs-img="assets/img/testimonial/testi-bg-3-1.jpg" data-overlay="black" data-opacity="6">
      <div className="container z-index-common">
        <div className="row justify-content-center wow fadeIn" data-wow-delay="0.5s">
          <div className="col-12 text-center">
            <span className="quote-icon-style1 has-white-shape fa-4x"><i className="flaticon-quote-1"></i></span>
          </div>
          <div className="col-xl-10">
            <div className="testimonial-content-area text-center vs-carousel" id="testi-content" data-fade="true" data-asnavfor="#testi-author-name, #testi-author" data-slidetoshow="1">
              <div className="testimonial-content px-xl-5">
                <h2 className="text-white">The evening has been fantastic great food & good entertainment nothing short.</h2>
                <p className="text-20 text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
              <div className="testimonial-content px-xl-5">
                <h2 className="text-white">The night was so exicted with full of satisfication with a good service and food.</h2>
                <p className="text-20 text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
              <div className="testimonial-content px-xl-5">
                <h2 className="text-white">A great start of the day with a Wonderful massage. Full day enjoyed a great freshness.</h2>
                <p className="text-20 text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
              <div className="testimonial-content px-xl-5">
                <h2 className="text-white">The night was so exicted with full of satisfication with a good service and food.</h2>
                <p className="text-20 text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </div>
          </div>
          <div className="col-xl-3">
            <div className="testimonial-author-style1 vs-carousel text-center" id="testi-author-name" data-fade="true" data-asnavfor="#testi-content, #testi-author" data-slidetoshow="1">
              <div className="author-content">
                <h3 className="h4 mb-0 text-white">Minas Morola D.</h3>
                <span className="mb-0 text-bold text-theme">Founder</span>
              </div>
              <div className="author-content">
                <h3 className="h4 mb-0 text-white">Jen L. Marto</h3>
                <span className="mb-0 text-bold text-theme">Founder</span>
              </div>
              <div className="author-content">
                <h3 className="h4 mb-0 text-white">Lomote F. Kerla</h3>
                <span className="mb-0 text-bold text-theme">Founder</span>
              </div>
              <div className="author-content">
                <h3 className="h4 mb-0 text-white">Rosalina D. William</h3>
                <span className="mb-0 text-bold text-theme">Founder</span>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="testimonial-border-line text-center mb-2">
              <img src="assets/img/testimonial/border-line-2-1.png" alt="border Line" />
            </div>
          </div>
          <div className="col-xl-12 mb-20">
            <div className="testimonial-avater-style1 vs-carousel" id="testi-author" data-asnavfor="#testi-author-name, #testi-content" data-slidetoshow="3" data-centermode="true" data-variablewidth="true" data-xlcentermode="true" data-mlcentermode="true" data-lgcentermode="true" data-mdcentermode="true" data-smcentermode="true" data-xscentermode="true">
              <div className="author-img">
                <img src="assets/img/testimonial/testil-author-1-1.png" alt="Author Image" className="w-100" />
              </div>
              <div className="author-img">
                <img src="assets/img/testimonial/testil-author-1-2.png" alt="Author Image" className="w-100" />
              </div>
              <div className="author-img">
                <img src="assets/img/testimonial/testil-author-1-3.png" alt="Author Image" className="w-100" />
              </div>
              <div className="author-img">
                <img src="assets/img/testimonial/testil-author-1-4.png" alt="Author Image" className="w-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection;