import React from "react";

const GallerySection = () => {
  return (
    <div className="vs-gallery-wrapper vs-gallery-layout1  " id="gallery">
      <div className="container-fluid px-0">
        <div className="row no-gutters vs-carousel wow fadeIn" data-wow-delay="0.3s" data-slidetoshow="4" data-mlslidetoshow="3" data-lgslidetoshow="3" data-mdslidetoshow="2" data-smslidetoshow="2" data-xsslidetoshow="1">

          <div className="col-xl-4">
            <div className="vs-gallery">
              <div className="vs-gallery-overlay" data-overlay="body" data-opacity="6"></div>
              <div className="vs-gallery-img">
                <img src="assets/img/gallery/gallery-2-1.jpg" alt="gallery Image" className="w-100" />
              </div>
              <a href="assets/img/gallery/gallery-2-1.jpg" className="instagram-btn icon-btn popup-image"><i className="fa-2x fab fa-instagram"></i></a>
            </div>
          </div>

          <div className="col-xl-4">
            <div className="vs-gallery">
              <div className="vs-gallery-overlay" data-overlay="body" data-opacity="6"></div>
              <div className="vs-gallery-img">
                <img src="assets/img/gallery/gallery-2-2.jpg" alt="gallery Image" className="w-100" />
              </div>
              <a href="assets/img/gallery/gallery-2-2.jpg" className="instagram-btn icon-btn popup-image"><i className="fa-2x fab fa-instagram"></i></a>
            </div>
          </div>

          <div className="col-xl-4">
            <div className="vs-gallery">
              <div className="vs-gallery-overlay" data-overlay="body" data-opacity="6"></div>
              <div className="vs-gallery-img">
                <img src="assets/img/gallery/gallery-2-3.jpg" alt="gallery Image" className="w-100" />
              </div>
              <a href="assets/img/gallery/gallery-2-3.jpg" className="instagram-btn icon-btn popup-image"><i className="fa-2x fab fa-instagram"></i></a>
            </div>
          </div>

          <div className="col-xl-4">
            <div className="vs-gallery">
              <div className="vs-gallery-overlay" data-overlay="body" data-opacity="6"></div>
              <div className="vs-gallery-img">
                <img src="assets/img/gallery/gallery-2-4.jpg" alt="gallery Image" className="w-100" />
              </div>
              <a href="assets/img/gallery/gallery-2-4.jpg" className="instagram-btn icon-btn popup-image"><i className="fa-2x fab fa-instagram"></i></a>
            </div>
          </div>

          <div className="col-xl-4">
            <div className="vs-gallery">
              <div className="vs-gallery-overlay" data-overlay="body" data-opacity="6"></div>
              <div className="vs-gallery-img">
                <img src="assets/img/gallery/gallery-2-5.jpg" alt="gallery Image" className="w-100" />
              </div>
              <a href="assets/img/gallery/gallery-2-5.jpg" className="instagram-btn icon-btn popup-image"><i className="fa-2x fab fa-instagram"></i></a>
            </div>
          </div>



        </div>
      </div>
    </div>
  )
}

export default GallerySection;