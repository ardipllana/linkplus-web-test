import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import s from "./HeroRed.module.scss";
const HeroRed = ({ title, crumb, className }) => {
    return (_jsx("section", { className: `${s.hero} ${className || ""}`, children: _jsxs("div", { className: s.inner, children: [crumb ? _jsx("p", { className: s.crumb, children: crumb }) : null, _jsx("h1", { className: s.title, children: title })] }) }));
};
export default HeroRed;
