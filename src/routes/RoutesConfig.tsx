import AboutUs from "@pages/aboutus/AboutUs";
import Career from "@pages/career/Career";
import HomePage from "@pages/homepage/HomePage";
import Portofolio from "@pages/portofolio/Portofolio";
import Services from "@pages/services/Services";
import Blog from "@pages/blog/Blog"
import Footer from "@components/footer/Footer";

import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import SiteHeader from "@components/header/Header";

function WithHeaderLayout() {
  return (
    <>
      <SiteHeader />
      <Outlet />
      <Footer/>
    </>
  );
}

const RoutesConfig = () => {
  return (
    <Routes>
      <Route element={<WithHeaderLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/portofolio" element={<Portofolio />} />
        <Route path="/services" element={<Services />} />
        <Route path="/career" element={<Career />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};

  export default RoutesConfig;
