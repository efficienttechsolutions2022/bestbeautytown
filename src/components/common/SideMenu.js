import React from "react";

const SideMenu = () => {
    return (
        <div className="sidemenu-wrapper d-none d-lg-block  ">
            <div className="sidemenu-content">
                <button className="closeButton border-theme text-theme bg-theme-hover sideMenuCls"><i className="far fa-times"></i></button>
                <div className="widget  ">
                    <div className="vs-widget-about pr-lg-4">
                        <div className="widget-about-logo mb-20 mb-lg-25">
                            <a href="index.html">
                                <img src="assets/img/logo.png" alt="Clianio" />
                            </a>
                        </div>
                        <p className="widget-about-text mb-20">Main practice areas of the firm include Admiralty, Maritime and Ship Arrest, Arbitration, Mediation and ADRs, Aviation Matters, Banking, Finance & Investment, Capital Market</p>
                        <p className="contact-info-style1"><i className="far fa-phone text-theme"></i><a href="tel:+098986876765">+098 986 8767 65</a></p>
                        <p className="contact-info-style1"><i className="fal fa-envelope text-theme"></i><a href="mailto:BestBeautyTown@email.com">BestBeautyTown@email.com</a></p>
                    </div>
                </div>
                <div className="widget   ">
                    <h3 className="widget_title">Latest Posts</h3>
                    <div className="vs-widget-recent-post has-light-border">
                        <div className="recent-post media">
                            <div className="media-img">
                                <img src="assets/img/widget/post-thumb-1.jpg" alt="Recent Post Image" />
                            </div>
                            <div className="media-body pl-20">
                                <span><i className="fal fa-calendar-alt text-theme"></i> 05 June, 2020.</span>
                                <h4 className="h5 mb-0"><a href="blog.html">Managing Partner along with Senior Counsels.</a></h4>
                            </div>
                        </div>
                        <div className="recent-post media">
                            <div className="media-img">
                                <img src="assets/img/widget/post-thumb-2.jpg" alt="Recent Post Image" />
                            </div>
                            <div className="media-body pl-20">
                                <span><i className="fal fa-calendar-alt text-theme"></i> 28 June, 2020.</span>
                                <h4 className="h5 mb-0"><a href="blog.html">Managing Partner along with Senior Counsels.</a></h4>
                            </div>
                        </div>
                        <div className="recent-post media">
                            <div className="media-img">
                                <img src="assets/img/widget/post-thumb-3.jpg" alt="Recent Post Image" />
                            </div>
                            <div className="media-body pl-20">
                                <span><i className="fal fa-calendar-alt text-theme"></i> 30 July, 2020.</span>
                                <h4 className="h5 mb-0"><a href="blog.html">Managing Partner along with Senior Counsels.</a></h4>
                            </div>
                        </div>
                        <div className="recent-post media">
                            <div className="media-img">
                                <img src="assets/img/widget/post-thumb-3.jpg" alt="Recent Post Image" />
                            </div>
                            <div className="media-body pl-20">
                                <span><i className="fal fa-calendar-alt text-theme"></i> 30 July, 2020.</span>
                                <h4 className="h5 mb-0"><a href="blog.html">Managing Partner along with Senior Counsels.</a></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SideMenu;