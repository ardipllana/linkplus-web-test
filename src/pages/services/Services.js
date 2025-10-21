import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import styles from "./Services.module.scss";
import ServiceFeatureCard from "../../components/servicecard/ServiceFeatureCard"; // Adjust the path if it's in a different folder
const pics = {
    one: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1400&auto=format&fit=crop",
    two: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1400&auto=format&fit=crop",
    three: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1400&auto=format&fit=crop",
    four: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=1400&auto=format&fit=crop",
    five: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1400&auto=format&fit=crop",
    six: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?q=80&w=1400&auto=format&fit=crop",
};
const services = [
    {
        image: pics.one,
        title: "Managed IT Services",
        excerpt: "Managed IT Services We <span>Network Solutions</span> continually align your technology to IT standar..."
    },
    {
        image: pics.two,
        title: "Network Solutions",
        excerpt: "Design, implementation and optimization of secure wired & wireless networks tailored to your business scale."
    },
    {
        image: pics.three,
        title: "IT Consulting & Support",
        excerpt: "Strategic advisory, audits and hands-on help so your teams can deliver reliably and move faster."
    },
    {
        image: pics.four,
        title: "Cloud Solutions & Security",
        excerpt: "Migrate and modernize with confidence. Identity, access, backup and compliance baked in."
    },
    {
        image: pics.five,
        title: "Business Process Solutions",
        excerpt: "Automate, integrate and orchestrate workflows to reduce cost and improve time-to-value."
    },
    {
        image: pics.six,
        title: "Software Development",
        excerpt: "Product discovery, UX and full-stack engineering to build scalable apps that grow with you."
    },
];
const Services = () => {
    return (_jsxs("div", { children: [_jsxs("section", { className: styles.hero, "aria-label": "Services hero", children: [_jsx("div", { className: styles.heroShade }), _jsx("div", { className: styles.heroDecor, "aria-hidden": true }), _jsxs("div", { className: styles.heroInner, children: [_jsxs("div", { className: styles.breadcrumb, children: [_jsx("a", { href: "#", children: "Home" }), _jsx("span", { className: styles.bcSep, children: "/" }), _jsx("span", { children: "Services" })] }), _jsx("h1", { className: styles.heroTitle, children: "Services" })] })] }), _jsx("main", { className: styles.wrap, children: _jsx("div", { className: styles.grid, children: services.map((s, i) => (_jsx(ServiceFeatureCard, { imageSrc: s.image, title: s.title, excerpt: s.excerpt, showIcon: true }, i))) }) })] }));
};
export default Services;
