import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React, { useState, useEffect } from 'react';
import { Check, ArrowUp } from 'lucide-react';
import styles from './AboutUs.module.scss';
const AboutUs = () => {
    const [showBackToTop, setShowBackToTop] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setScrollY(currentScrollY);
            setShowBackToTop(currentScrollY > 300);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return (_jsxs(_Fragment, { children: [_jsxs("section", { className: styles.hero, children: [_jsx("div", { className: styles.heroBackground, style: {
                            transform: `translateY(${scrollY * 0.5}px)`
                        } }), _jsx("div", { className: styles.heroOverlay }), _jsx("div", { className: styles.heroContent, children: _jsxs("div", { className: styles.heroContainer, children: [_jsx("h1", { className: styles.heroTitle, children: "About Us" }), _jsx("p", { className: styles.heroSubtitle, children: "Discover our journey and commitment to excellence" })] }) })] }), _jsx("section", { className: styles.mainContent, children: _jsx("div", { className: styles.container, children: _jsxs("div", { className: styles.contentGrid, children: [_jsxs("div", { className: styles.textContent, children: [_jsxs("div", { className: styles.badge, children: [_jsx("span", { className: styles.badgeDot }), _jsx("span", { className: styles.badgeText, children: "WHO WE ARE" })] }), _jsx("h2", { className: styles.mainTitle, children: "Exclusive Technology to Provide IT Solutions & Services" }), _jsx("p", { className: styles.description, children: "We have over 20+ years of experience in all stages of software design, development, maintenance, and support. Our expertise spans across multiple industries and technologies." }), _jsx("div", { className: styles.servicesList, children: [
                                            'IT Professional Services',
                                            'Application Development Services',
                                            'Managed IT Services',
                                            'Maintenance And Support'
                                        ].map((service, index) => (_jsxs("div", { className: styles.serviceItem, children: [_jsx("div", { className: styles.serviceIcon, children: _jsx(Check, { size: 16 }) }), _jsx("span", { children: service })] }, index))) }), _jsx("p", { className: styles.additionalText, children: "Our teams know how to harness the power of data, artificial intelligence, modernising core, optimising and automating operations to achieve your business goals." }), _jsx("div", { className: styles.ctaSection, children: _jsxs("button", { className: styles.ctaButton, children: [_jsx("span", { children: "MORE ABOUT US" }), _jsx("span", { className: styles.ctaArrow, children: "\u2192" })] }) })] }), _jsx("div", { className: styles.imageContent, children: _jsxs("div", { className: styles.imageWrapper, children: [_jsx("div", { className: styles.primaryImage }), _jsx("div", { className: styles.secondaryImage }), _jsx("div", { className: styles.decorativePattern, children: Array.from({ length: 25 }, (_, i) => (_jsx("div", { className: styles.patternDot }, i))) }), _jsx("div", { className: styles.decorativeLines, children: Array.from({ length: 3 }, (_, i) => (_jsx("div", { className: styles.line }, i))) })] }) })] }) }) }), _jsx("button", { onClick: scrollToTop, className: `${styles.backToTop} ${showBackToTop ? styles.visible : ''}`, "aria-label": "Back to top", children: _jsx(ArrowUp, { size: 20 }) })] }));
};
export default AboutUs;
