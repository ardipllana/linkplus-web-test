import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import AboutUs from "@pages/aboutus/AboutUs";
import Career from "@pages/career/Career";
import HomePage from "@pages/homepage/HomePage";
import Portofolio from "@pages/portofolio/Portofolio";
import Services from "@pages/services/Services";
import Blog from "@pages/blog/Blog";
import Footer from "@components/footer/Footer";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import SiteHeader from "@components/header/Header";
function WithHeaderLayout() {
    return (_jsxs(_Fragment, { children: [_jsx(SiteHeader, {}), _jsx(Outlet, {}), _jsx(Footer, {})] }));
}
const RoutesConfig = () => {
    return (_jsx(Routes, { children: _jsxs(Route, { element: _jsx(WithHeaderLayout, {}), children: [_jsx(Route, { path: "/", element: _jsx(HomePage, {}) }), _jsx(Route, { path: "/aboutus", element: _jsx(AboutUs, {}) }), _jsx(Route, { path: "/portofolio", element: _jsx(Portofolio, {}) }), _jsx(Route, { path: "/services", element: _jsx(Services, {}) }), _jsx(Route, { path: "/career", element: _jsx(Career, {}) }), _jsx(Route, { path: "/blog", element: _jsx(Blog, {}) }), _jsx(Route, { path: "*", element: _jsx(Navigate, { to: "/", replace: true }) })] }) }));
};
export default RoutesConfig;
