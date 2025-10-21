import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import styles from "./ServiceFeatureCard.module.scss";
const BadgeIcon = () => (_jsxs("svg", { className: styles.svcIcon, viewBox: "0 0 24 24", "aria-hidden": "true", children: [_jsx("defs", { children: _jsxs("linearGradient", { id: "svcGrad", x1: "0", y1: "0", x2: "1", y2: "1", children: [_jsx("stop", { offset: "0%", stopColor: "#7C3AED" }), _jsx("stop", { offset: "100%", stopColor: "#3B82F6" })] }) }), _jsx("path", { fill: "url(#svcGrad)", d: "M3 6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H9l-1.2 2H15v2H6v-2h.8L8 14H5a2 2 0 0 1-2-2V6zm14.4.7.7-1.2 1.7 1-.7 1.2c.17.52.17 1.08 0 1.6l.7 1.2-1.7 1-.7-1.2c-.52.17-1.08.17-1.6 0l-1.2.7-1.7-1 .7-1.2a3 3 0 0 1 0-1.6L13.8 6l1.7-1 .7 1.2c.52-.17 1.08-.17 1.6 0Z" })] }));
const ServiceFeatureCard = ({ imageSrc, title, excerpt, category, showIcon = true, }) => {
    return (_jsxs("article", { className: styles.svcCard, children: [_jsx("img", { className: styles.svcImage, src: imageSrc, alt: title, loading: "lazy" }), _jsxs("div", { className: styles.svcPanel, children: [_jsxs("div", { className: styles.svcHeader, children: [showIcon && (_jsx("span", { className: styles.svcBadge, children: _jsx(BadgeIcon, {}) })), _jsxs("div", { className: styles.svcHeading, children: [category && _jsx("p", { className: styles.svcCategory, children: category }), _jsx("h3", { className: styles.svcTitle, children: title })] })] }), _jsx("p", { className: styles.svcExcerpt, children: excerpt })] })] }));
};
export default ServiceFeatureCard;
