import React from "react";

const BlogSection = () => {
  return (
    <section className="vs-blog-wrapper vs-blog-layout3 link-inherit space-top space-md-bottom" id="blog">
      <div className="container">
        <div className="row text-center justify-content-center">
          <div className="col-md-11 col-lg-8 col-xl-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="section-title ">
              <h2 className="sec-title-style1">Latest News</h2>
              <p className="sec-text-style1">Access to our fitness centre and pool is free to all our hotel guests. For
                non-guests membership packages are available.</p>
            </div>
          </div>
        </div>

        <div className="row vs-carousel wow fadeInUp" data-wow-delay="0.4s" data-slidetoshow="3" data-lgslidetoshow="2" data-mdslidetoshow="2" data-smslidetoshow="1" data-xsslidetoshow="1">

          <div className="col-lg-4">
            <div className="vs-blog">
              <span className="blog-number bg-theme text-white">01</span>
              <div className="blog-image image-scale-hover">
                <a href="blog-details.html"><img src="assets/img/blog/blog-img-2-1.jpg" alt="Blog Image" className="w-100" /></a>
              </div>
              <div className="blog-content bg-theme">
                <div className="blog-meta">
                  <a className="text-white" href="#"><i className="fal fa-calendar-alt"></i>14th March 2020</a>
                  <a className="text-white" href="#"><i className="fal fa-user"></i>By Admin</a>
                </div>
                <h3 className="blog-title h4 mb-10 text-white"><a href="blog-details.html">We also offer outside cate ring; take-away</a></h3>
                <p className="text-white">We also offer outside catering; take away lunch boxes, dinner or snack boxes and private parties.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="vs-blog">
              <span className="blog-number bg-theme text-white">02</span>
              <div className="blog-image image-scale-hover">
                <a href="blog-details.html"><img src="assets/img/blog/blog-img-2-2.jpg" alt="Blog Image" className="w-100" /></a>
              </div>
              <div className="blog-content bg-theme">
                <div className="blog-meta">
                  <a className="text-white" href="#"><i className="fal fa-calendar-alt"></i>14th March 2020</a>
                  <a className="text-white" href="#"><i className="fal fa-user"></i>By Admin</a>
                </div>
                <h3 className="blog-title h4 mb-10 text-white"><a href="blog-details.html">The house of care. World famous Spa Service.</a></h3>
                <p className="text-white">We also offer outside catering; take away lunch boxes, dinner or snack boxes and private parties.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="vs-blog">
              <span className="blog-number bg-theme text-white">03</span>
              <div className="blog-image image-scale-hover">
                <a href="blog-details.html"><img src="assets/img/blog/blog-img-2-3.jpg" alt="Blog Image" className="w-100" /></a>
              </div>
              <div className="blog-content bg-theme">
                <div className="blog-meta">
                  <a className="text-white" href="#"><i className="fal fa-calendar-alt"></i>14th March 2020</a>
                  <a className="text-white" href="#"><i className="fal fa-user"></i>By Admin</a>
                </div>
                <h3 className="blog-title h4 mb-10 text-white"><a href="blog-details.html">We giving special service for vip members.</a></h3>
                <p className="text-white">We also offer outside catering; take away lunch boxes, dinner or snack boxes and private parties.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="vs-blog">
              <span className="blog-number bg-theme text-white">04</span>
              <div className="blog-image image-scale-hover">
                <a href="blog-details.html"><img src="assets/img/blog/blog-img-2-4.jpg" alt="Blog Image" className="w-100" /></a>
              </div>
              <div className="blog-content bg-theme">
                <div className="blog-meta">
                  <a className="text-white" href="#"><i className="fal fa-calendar-alt"></i>14th March 2020</a>
                  <a className="text-white" href="#"><i className="fal fa-user"></i>By Admin</a>
                </div>
                <h3 className="blog-title h4 mb-10 text-white"><a href="blog-details.html">We start managing programme for wedding.</a></h3>
                <p className="text-white">We also offer outside catering; take away lunch boxes, dinner or snack boxes and private parties.</p>
              </div>
            </div>
          </div>

        </div>


      </div>
    </section>
  )
}

export default BlogSection;