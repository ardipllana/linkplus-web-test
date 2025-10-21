import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import styles from "./Blog.module.scss";
/* ── Small inline SVG icons ── */
const CalendarIcon = () => (_jsxs("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", "aria-hidden": true, children: [_jsx("rect", { x: "3", y: "4", width: "18", height: "17", rx: "2", stroke: "currentColor", strokeWidth: "1.5" }), _jsx("path", { d: "M8 2v4M16 2v4M3 9h18", stroke: "currentColor", strokeWidth: "1.5" })] }));
const UserIcon = () => (_jsxs("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", "aria-hidden": true, children: [_jsx("circle", { cx: "12", cy: "8", r: "4", stroke: "currentColor", strokeWidth: "1.5" }), _jsx("path", { d: "M5 20c0-3.314 3.134-6 7-6s7 2.686 7 6", stroke: "currentColor", strokeWidth: "1.5" })] }));
const ArrowIcon = () => (_jsx("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", "aria-hidden": true, children: _jsx("path", { d: "M7 17l7-7M10 7h8v8", stroke: "currentColor", strokeWidth: "1.6", strokeLinecap: "round", strokeLinejoin: "round" }) }));
const posts = [
    {
        id: "1",
        img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop",
        date: "October 16, 2024",
        author: "Admin",
        title: "Holistic Healing: Exploring Health Coaching Techniques",
        href: "#",
    },
    {
        id: "2",
        img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1600&auto=format&fit=crop",
        date: "October 16, 2024",
        author: "Admin",
        title: "Getting started with digital transformation",
        href: "#",
    },
    {
        id: "3",
        img: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1600&auto=format&fit=crop",
        date: "October 16, 2024",
        author: "Admin",
        title: "The Art of Self-Care: Lessons from Health Coaching",
        href: "#",
    },
    {
        id: "4",
        img: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=1600&auto=format&fit=crop",
        date: "October 16, 2024",
        author: "Admin",
        title: "Leading high-performing teams in hybrid workplaces",
        href: "#",
    },
    {
        id: "5",
        img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1600&auto=format&fit=crop",
        date: "October 16, 2024",
        author: "Admin",
        title: "Change management that actually sticks",
        href: "#",
    },
    {
        id: "6",
        img: "https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=1600&auto=format&fit=crop",
        date: "October 16, 2024",
        author: "Admin",
        title: "Agile rituals that drive outcomes (not chaos)",
        href: "#",
    },
];
/* ── Page ── */
const Blog = () => {
    return (_jsxs("div", { className: styles.blog, children: [_jsxs("section", { className: styles.hero, "aria-label": "Blog hero", children: [_jsx("div", { className: styles.heroShade }), _jsx("div", { className: styles.heroDecor, "aria-hidden": true }), _jsxs("div", { className: styles.heroInner, children: [_jsxs("div", { className: styles.breadcrumb, children: [_jsx("a", { href: "#", children: "Home" }), _jsx("span", { className: styles.bcSep, children: "/" }), _jsx("span", { children: "Blog" })] }), _jsx("h1", { className: styles.heroTitle, children: "Blog" })] })] }), _jsx("main", { className: styles.wrap, children: _jsx("div", { className: styles.grid, children: posts.map((p) => (_jsxs("article", { className: styles.card, children: [_jsx("a", { className: styles.thumb, href: p.href, children: _jsx("img", { src: p.img, alt: p.title, loading: "lazy" }) }), _jsxs("div", { className: styles.metaRow, children: [_jsxs("span", { className: styles.metaItem, children: [_jsx(CalendarIcon, {}), _jsx("span", { children: p.date })] }), _jsx("span", { className: styles.dot, "aria-hidden": true, children: "\u2022" }), _jsxs("span", { className: styles.metaItem, children: [_jsx(UserIcon, {}), _jsxs("span", { children: ["by ", p.author] })] })] }), _jsx("h3", { className: styles.title, children: _jsx("a", { href: p.href, children: p.title }) }), _jsxs("a", { className: styles.readMore, href: p.href, children: ["Read more ", _jsx(ArrowIcon, {})] })] }, p.id))) }) })] }));
};
export default Blog;
