import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import LandingPage from './components/landingPage/LandingPage';
import SideMenu from './components/common/SideMenu';
import MobileMenu from './components/common/MobileMenu';
import StickyHeader from './components/header/StickyHeader';
import SearchBox from './components/common/SearchBox';
import PageLoading from './components/common/PageLoading';

function App() {
  return (
    <BrowserRouter>
      <PageLoading />
      <SearchBox />
      <StickyHeader />
      <MobileMenu />
      <Header />
      <Routes basename={process.env.PUBLIC_URL}>
        <Route index element={<LandingPage />} />
      </Routes>
      <Footer />
      <SideMenu />

      <a href="#" className="scrollToTop icon-btn bg-theme"><i className="far fa-arrow-up"></i></a>
    </BrowserRouter>
  );
}

export default App;
