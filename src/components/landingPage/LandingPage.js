import React from "react";
import AboutSection from "./AboutSection";
import AboutSection2 from "./AboutSection2";
import AppointmentSection from "./AppointmentSection";
import BlogSection from "./BlogSection";
import BrandSection from "./BrandSection";
import CallToActionSection from "./CallToActionSection";
import FeatureSection from "./FeatureSection";
import FeatureSection2 from "./FeatureSection2";
import GallerySection from "./GallerySection";
import HeroSection from "./HeroSection";
import PricePlanSection from "./PricePlanSection";
import ServiceSection from "./ServiceSection";
import TeamSection from "./TeamSection";
import TestimonialsSection from "./TestimonialsSection";

const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <div className="background-image bg-none-xl bg-bottom bg-light-smoke" data-vs-img="assets/img/bg-img/home-bg-3-1.png">
        <FeatureSection />
        <AboutSection />
      </div>
      <ServiceSection />
      <AppointmentSection />
      <AboutSection2 />
      <TeamSection />
      <FeatureSection2 />
      <GallerySection />
      <PricePlanSection />
      <BlogSection />
      <CallToActionSection />
    </>
  );
}

export default LandingPage;