import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from 'react';
import styles from './HomePage.module.scss';
import teamImage from '../../assets/images/team.jpg';
// Import actual team member images
import deboraMeta from '../../assets/images/debora-meta.jpeg';
import ermalSadiku from '../../assets/images/ermal-sadiku.png';
import ilirianaIbraj from '../../assets/images/iliriana-ibraj.png';
import leonaTahiri from '../../assets/images/leona-tahiri.jpg';
import zimrieIdrizi from '../../assets/images/zimrie-idrizi.jpg';
const icons = [
    (_jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", children: _jsx("path", { d: "M4 4h16v2H4zm0 6h16v2H4zm0 6h10v2H4z" }) })),
    (_jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", children: _jsx("path", { d: "M12 2a10 10 0 100 20 10 10 0 000-20zM11 14h2v2h-2zm0-8h2v6h-2z" }) })),
    (_jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", children: _jsx("path", { d: "M3 5h18v2H3zm0 6h12v2H3zm0 6h18v2H3z" }) })),
    (_jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", children: _jsx("path", { d: "M19 3H5a2 2 0 00-2 2v16l7-3 7 3V5a2 2 0 00-2-2z" }) })),
    (_jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", children: _jsx("path", { d: "M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" }) })),
];
const titles = [
    'Technology Consulting',
    'Cloud solutions & IT security',
    'Software Development',
    'Business process solutions',
    'Data Tracking Security',
];
const teamMembers = [
    {
        image: deboraMeta,
        name: 'Debora Meta',
        position: 'Human Resources Manager',
    },
    {
        image: ermalSadiku,
        name: 'Ermal Sadiku',
        position: 'Managing Partner',
    },
    {
        image: ilirianaIbraj,
        name: 'Iliriana Ibraj',
        position: 'Chief Business Development Officer',
    },
    {
        image: leonaTahiri,
        name: 'Leona Tahiri',
        position: 'Business Development Representative',
    },
    {
        image: zimrieIdrizi,
        name: 'Zimrie Idrizi',
        position: 'HR & Recruiter',
    },
];
const faqItems = [
    {
        question: 'What papers needed for software development?',
        answer: 'If you are looking to lose weight, maintain healthy weight or gain lean muscle mass, our Certified Sports Nutritionist will create a personalized nutrition plan to help you achieve your goals.',
    },
    {
        question: 'What is the budget limit for a project?',
        answer: 'Please contact our team for a detailed consultation and quote tailored to your project requirements.',
    },
    {
        question: 'How to contact the development team?',
        answer: 'You can reach our development team via email at support@linkplus-it.com or by phone at +1-800-555-1234.',
    },
    {
        question: 'What type of company is measured?',
        answer: 'We measure success based on client satisfaction, project delivery time, and the impact of our solutions on your business growth.',
    },
];
const testimonials = [
    {
        message: "Amazing theme! Neotech brings a professional and modern look, perfect for my tech website...",
        name: "James K",
        role: "Tech Consultant",
        avatar: zimrieIdrizi,
    },
    {
        message: "Fantastic service! Everything was smooth and the design exceeded expectations...",
        name: "Sarah M",
        role: "Product Manager",
        avatar: leonaTahiri,
    },
];
const HomePage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    return (_jsxs("div", { className: styles.container, children: [_jsxs("div", { className: styles.slider, children: [_jsx("input", { type: "radio", name: "slider", id: "slide1", defaultChecked: true }), _jsx("input", { type: "radio", name: "slider", id: "slide2" }), _jsx("input", { type: "radio", name: "slider", id: "slide3" }), _jsxs("div", { className: styles.navigation, children: [_jsx("label", { htmlFor: "slide1", className: styles.navBtn }), _jsx("label", { htmlFor: "slide2", className: styles.navBtn }), _jsx("label", { htmlFor: "slide3", className: styles.navBtn })] })] }), _jsxs("div", { className: styles.textSection, children: [_jsxs("p", { className: styles.subheading, children: [_jsx("a", { href: 'https://linkplus-it.com/', children: "LinkPlus IT" }), " is a software development company specialized in"] }), _jsx("h1", { className: styles.heading1, children: "Development" }), _jsx("p", { className: styles.subheading, children: "of expandable applications." }), _jsx("button", { className: styles.button, children: "READ MORE" })] }), _jsx("div", { className: styles.cardSection, children: titles.map((title, index) => (_jsxs("div", { className: styles.card, children: [_jsx("div", { className: styles.cardIcon, children: icons[index] }), _jsx("h4", { className: styles.cardTitle, children: title }), _jsxs("p", { className: styles.cardText, children: ["Expertise in ", title.toLowerCase(), " for companies across various industries."] })] }, index))) }), _jsxs("div", { className: styles.exclusiveSection, children: [_jsxs("div", { className: styles.exclusiveText, children: [_jsx("p", { className: styles.sectionLabel, children: "WHO WE BRING" }), _jsx("h2", { className: styles.sectionHeading, children: "Exclusive Technology to Provide IT Solutions & Services" }), _jsx("p", { className: styles.sectionDescription, children: "We have over 20+ years of experience in all stages of software design, development, maintenance, and support." }), _jsxs("div", { className: styles.listGrid, children: [_jsxs("ul", { children: [_jsx("li", { children: "\u2714 IT Professional services" }), _jsx("li", { children: "\u2714 Managed IT services" })] }), _jsxs("ul", { children: [_jsx("li", { children: "\u2714 Application Development services" }), _jsx("li", { children: "\u2714 Maintenance And Support" })] })] }), _jsx("p", { className: styles.sectionDescription, children: "Our teams know how to harness the power of data, artificial intelligence, modernising core, optimising and automating operations to achieve your business goals." }), _jsx("button", { className: styles.button, children: "MORE ABOUT US" })] }), _jsxs("div", { className: styles.exclusiveImages, children: [_jsx("img", { src: "https://via.placeholder.com/300x200", alt: "Team meeting", className: styles.imgTop }), _jsx("img", { src: "https://via.placeholder.com/300x200", alt: "Team discussion", className: styles.imgBottom })] })] }), _jsxs("div", { className: styles.itServicesSection, children: [_jsx("p", { className: styles.subheading, children: "OUR SERVICES" }), _jsx("h2", { className: styles.heading, children: "We Offer a Wide Variety of IT Services" }), _jsxs("div", { className: styles.itCardSection, children: [_jsxs("div", { className: styles.itCard, children: [_jsx("img", { src: "https://via.placeholder.com/300x200", alt: "Business process solutions" }), _jsx("h4", { className: styles.cardTitle, children: "Business process solutions" })] }), _jsxs("div", { className: styles.itCard, children: [_jsx("img", { src: "https://via.placeholder.com/300x200", alt: "Disaster Recovery & Backup" }), _jsx("h4", { className: styles.cardTitle, children: "Disaster Recovery & Backup" })] }), _jsxs("div", { className: styles.itCard, children: [_jsx("img", { src: "https://via.placeholder.com/300x200", alt: "Managed IT Services" }), _jsx("h4", { className: styles.cardTitle, children: "Managed IT Services" })] })] }), _jsxs("p", { className: styles.description1, children: ["We have an amazing variety of services to offer so ", _jsx("a", { href: "#", children: "see ALL SERVICES" })] })] }), _jsxs("div", { className: styles.technologySolutionSection, children: [_jsx("div", { className: styles.imageWrapper, children: _jsx("img", { src: teamImage, alt: "Team working", className: styles.teamImage }) }), _jsxs("div", { className: styles.technologyContent, children: [_jsx("p", { className: styles.technologyLabel, children: "Technology Index" }), _jsx("h2", { className: styles.technologyHeading, children: "We Are Always Best For Technology Solution" }), _jsxs("div", { className: styles.serviceIcons, children: [_jsxs("div", { className: styles.serviceItem, children: [_jsx("span", { className: styles.serviceIcon, children: "\uD83D\uDCBB" }), _jsxs("div", { className: styles.serviceText, children: [_jsx("p", { children: "Experience" }), _jsx("span", { children: "We give you best service to your project." })] })] }), _jsxs("div", { className: styles.serviceItem, children: [_jsx("span", { className: styles.serviceIcon, children: "\u26A1" }), _jsxs("div", { className: styles.serviceText, children: [_jsx("p", { children: "Quick Support" }), _jsx("span", { children: "We are always here to support and help." })] })] })] }), _jsxs("div", { className: styles.progressBars, children: [_jsxs("div", { className: styles.progressItem, children: [_jsx("span", { children: "IT Management" }), _jsx("div", { className: styles.progressBar, children: _jsx("div", { className: styles.progress, style: { width: "95%" } }) })] }), _jsxs("div", { className: styles.progressItem, children: [_jsx("span", { children: "Data Security" }), _jsx("div", { className: styles.progressBar, children: _jsx("div", { className: styles.progress, style: { width: "80%" } }) })] }), _jsxs("div", { className: styles.progressItem, children: [_jsx("span", { children: "Technology Solution" }), _jsx("div", { className: styles.progressBar, children: _jsx("div", { className: styles.progress, style: { width: "90%" } }) })] })] }), _jsx("p", { className: styles.technologyDescription, children: "We help businesses achieve strategic technology transformation, minimising the totality of their end-to-end business risk and maximising the business value of their IT infrastructure." })] })] }), _jsxs("div", { className: styles.teamSection, children: [_jsx("p", { className: styles.teamLabel, children: "MEET OUR TEAM" }), _jsx("h2", { className: styles.teamHeading, children: "Meet our team of experts" }), _jsx("div", { className: styles.teamSlider, children: _jsxs("div", { className: styles.teamSlides, children: [teamMembers.map((member, index) => (_jsxs("div", { className: styles.teamCard, children: [_jsx("img", { src: member.image, alt: member.name, className: styles.teamMember }), _jsx("p", { className: styles.teamName, children: member.name }), _jsx("p", { className: styles.teamPosition, children: member.position })] }, `original-${index}`))), teamMembers.map((member, index) => (_jsxs("div", { className: styles.teamCard, children: [_jsx("img", { src: member.image, alt: member.name, className: styles.teamMember }), _jsx("p", { className: styles.teamName, children: member.name }), _jsx("p", { className: styles.teamPosition, children: member.position })] }, `duplicate-${index}`)))] }) })] }), _jsxs("div", { className: styles.faqSection, children: [_jsx("div", { className: styles.badgeWrapper, children: _jsxs("div", { className: styles.experienceBadge, children: ["8", _jsx("span", { children: "Years of experience" })] }) }), _jsxs("div", { className: styles.faqContent, children: [_jsx("h2", { className: styles.faqHeading, children: "Have any Question to our team?" }), _jsx("div", { className: styles.faqItems, children: faqItems.map((item, index) => (_jsxs("details", { className: styles.faqItem, children: [_jsxs("summary", { className: styles.faqQuestion, children: [item.question, " ", _jsx("span", { className: styles.faqToggle })] }), _jsx("p", { className: styles.faqAnswer, children: item.answer })] }, index))) })] })] }), _jsxs("div", { className: styles.recentProjectsSection, children: [_jsx("p", { className: styles.recentLabel, children: "LATEST STUDIES" }), _jsx("h2", { className: styles.recentHeading, children: "Our Recent Launched Projects Available" }), _jsxs("div", { className: styles.recentProjectsGrid, children: [_jsxs("div", { className: styles.projectCard, children: [_jsx("img", { src: ilirianaIbraj, alt: "Tailoring Software Solutions", className: styles.projectImage, style: { height: "380px", objectFit: "cover", borderRadius: "20px", width: "100%" } }), _jsxs("div", { className: styles.cardContent, children: [_jsx("p", { className: styles.projectCategory, children: "TECHNOLOGY" }), _jsx("h4", { className: styles.projectTitle, children: "Tailoring Software Solutions" })] })] }), _jsxs("div", { className: styles.projectCard, children: [_jsx("img", { src: leonaTahiri, alt: "We Are Success IT With Solution", className: styles.projectImage, style: { height: "380px", objectFit: "cover", borderRadius: "20px", width: "100%" } }), _jsxs("div", { className: styles.cardContent, children: [_jsx("p", { className: styles.projectCategory, children: "SECURITY" }), _jsx("h4", { className: styles.projectTitle, children: "We Are Success IT With Solution" })] })] }), _jsxs("div", { className: styles.projectCard, children: [_jsx("img", { src: zimrieIdrizi, alt: "Software Solution With Client", className: styles.projectImage, style: { height: "380px", objectFit: "cover", borderRadius: "20px", width: "100%" } }), _jsxs("div", { className: styles.cardContent, children: [_jsx("p", { className: styles.projectCategory, children: "SECURITY, TECHNOLOGY" }), _jsx("h4", { className: styles.projectTitle, children: "Software Solution With Client" })] })] })] })] }), _jsx("div", { className: styles.testimonialSection, children: _jsxs("div", { className: styles.testimonialContent, children: [_jsx("p", { className: styles.testimonialLabel, children: "WHAT CLIENTS SAY" }), _jsx("h2", { className: styles.testimonialHeading, children: "Hear What Our Global Clients Say" }), _jsx("div", { className: styles.testimonialStars, children: "\u2605\u2605\u2605\u2605\u2605" }), _jsx("p", { className: styles.testimonialText, children: "Amazing theme! Neotech brings a professional and modern look, perfect for my tech website. The interface is easy to customize with fast support." }), _jsxs("div", { className: styles.testimonialAuthor, children: [_jsx("img", { src: testimonials[currentIndex].avatar, alt: testimonials[currentIndex].name, className: styles.authorImage }), _jsxs("div", { children: [_jsx("p", { className: styles.authorName, children: testimonials[currentIndex].name }), _jsx("p", { className: styles.authorRole, children: testimonials[currentIndex].role })] })] }), _jsx("div", { className: styles.testimonialDots, children: testimonials.map((_, index) => (_jsx("span", { className: `${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`, onClick: () => setCurrentIndex(index), role: "button", tabIndex: 0, onKeyDown: (e) => e.key === 'Enter' && setCurrentIndex(index) }, index))) })] }) })] }));
};
export default HomePage;
