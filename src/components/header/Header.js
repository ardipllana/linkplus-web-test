import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState, useMemo } from "react";
import { Layout, Row, Col, Space, Typography, Menu, Badge, Button, Drawer, Grid, } from "antd";
import { ClockCircleOutlined, MailOutlined, EnvironmentOutlined, FacebookOutlined, InstagramOutlined, LinkedinOutlined, PhoneOutlined, SearchOutlined, ShoppingCartOutlined, MenuOutlined, ExportOutlined, } from "@ant-design/icons";
import { Link } from "react-router-dom";
const { Header } = Layout;
const { Text } = Typography;
const FORCE_CSS = `

.lp-container { padding-left: 70px !important; padding-right: 90px !important; }

/* Make the top utility bar slim */
.lp-topbar { padding-top: 8px !important; padding-bottom: 2px !important; }

/* Compact the main header row */
.lp-header-compact { height: 80px !important; line-height: 48px !important; }

/* AntD horizontal menu default is tall; shrink it */
.lp-header-compact :where(.ant-menu-horizontal) {
  height: 34px !important;
  line-height: 34px !important;
  border-bottom: none !important;
  background: transparent !important;
}
.lp-header-compact :where(.ant-menu-horizontal) > :where(.ant-menu-item),
.lp-header-compact :where(.ant-menu-horizontal) > :where(.ant-menu-submenu) {
  padding-inline: 10px !important;
}
.lp-header-compact :where(.ant-menu-submenu-title) {
  line-height: 34px !important;
}

/* Buttons on the right side also compact */
.lp-header-compact :where(.ant-btn) {
  height: 32px !important;
  line-height: 32px !important;
  padding-inline: 12px !important;
}

/* Tighten typography line-height a bit */
.lp-topbar :where(.ant-typography),
.lp-header-compact :where(.ant-typography) { line-height: 1.2 !important; }
`;
const WRAP = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 1000,
    color: "#fff",
};
const TOPBAR = {
    borderBottom: "1px solid rgba(255,255,255,0.25)",
    background: "transparent",
};
const MAINBAR = {
    background: "transparent",
    padding: 0,
    borderBottom: "1px solid rgba(255,255,255,0.18)",
};
const NAV_LINK = {
    color: "#fff",
    opacity: 0.9,
    fontWeight: 500,
    fontSize: 13,
};
const TOPBAR_TEXT = {
    color: "#fff",
    opacity: 0.85,
    fontSize: 11,
};
const LOGO_TEXT = {
    fontSize: 18,
    fontWeight: 700,
    color: "#fff",
};
const GRADIENT_BTN = {
    border: "none",
    borderRadius: 10,
    fontWeight: 600,
    fontSize: 12,
};
const Logo = () => (_jsx(Space, { align: "center", size: 8, children: _jsx(Text, { style: LOGO_TEXT, children: "LINKPLUS IT" }) }));
function useMenuItems(opts) {
    const { isAuthenticated, isCompanyUser, isEmployeeUser, onLinkClick, t } = opts;
    const tr = (k, def) => (t ? t(k) : def);
    const linkStyle = NAV_LINK;
    return useMemo(() => {
        const authDashboard = isAuthenticated && (isCompanyUser || isEmployeeUser)
            ? {
                key: "authDashboard",
                label: (_jsxs("div", { style: {
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 15,
                    }, children: [isCompanyUser && (_jsx(Link, { to: "/company/dashboard", onClick: onLinkClick, style: linkStyle, children: tr("navigationlinks.dashboard", "Dashboard") })), isEmployeeUser && (_jsx(Link, { to: "/employee/dashboard", onClick: onLinkClick, style: linkStyle, children: tr("navigationlinks.dashboard", "Dashboard") }))] })),
            }
            : null;
        // const featuresOverlay = (
        //   <Menu
        //     items={[
        //       {
        //         key: "company",
        //         label: (
        //           <Link to="/company" onClick={onLinkClick} style={linkStyle}>
        //             {tr("navigationlinks.company", "Company")}
        //           </Link>
        //         ),
        //       },
        //       {
        //         key: "jobseeker",
        //         label: (
        //           <Link to="/jobseeker" onClick={onLinkClick} style={linkStyle}>
        //             {tr("navigationlinks.jobseeker", "Jobseeker")}
        //           </Link>
        //         ),
        //       },
        //     ]}
        //   />
        // );
        const desktop = [
            authDashboard || undefined,
            {
                key: "home",
                label: (_jsx(Link, { to: "/", onClick: onLinkClick, style: linkStyle, children: tr("navigationlinks.product", "Home") })),
            },
            {
                key: "about",
                label: (_jsx(Link, { to: "/aboutus", onClick: onLinkClick, style: linkStyle, children: tr("navigationlinks.about", "About") })),
            },
            {
                key: "services",
                label: (_jsx(Link, { to: "/services", onClick: onLinkClick, style: linkStyle, children: tr("navigationlinks.services", "Services") })),
            },
            {
                key: "blog",
                label: (_jsx(Link, { to: "/blog", onClick: onLinkClick, style: linkStyle, children: tr("navigationlinks.blog", "Blog") })),
            },
            //   {
            //     key: "features",
            //     label: (
            //       <Dropdown overlay={featuresOverlay} placement="bottom">
            //         <a onClick={(e) => e.preventDefault()} style={linkStyle}>
            //           {tr("navigationlinks.features", "Features")} <DownOutlined style={{ fontSize: 10 }} />
            //         </a>
            //       </Dropdown>
            //     ),
            //   },
            //   { key: "services",label: <Link to="/services" onClick={onLinkClick} style={linkStyle}>{tr("navigationlinks.services", "Services")}</Link> },
        ].filter(Boolean);
        const mobile = [
            authDashboard || undefined,
            {
                key: "home-m",
                label: (_jsx(Link, { to: "/", onClick: onLinkClick, style: linkStyle, children: tr("navigationlinks.product", "Home") })),
            },
            {
                key: "pricing-m",
                label: (_jsx(Link, { to: "/pricing", onClick: onLinkClick, style: linkStyle, children: tr("navigationlinks.pricing", "Pricing") })),
            },
            {
                key: "about-m",
                label: (_jsx(Link, { to: "/aboutus", onClick: onLinkClick, style: linkStyle, children: tr("navigationlinks.about", "About") })),
            },
            {
                key: "features-m",
                label: tr("navigationlinks.features", "Features"),
                children: [
                    {
                        key: "company-m",
                        label: (_jsx(Link, { to: "/company", onClick: onLinkClick, style: linkStyle, children: tr("navigationlinks.company", "Company") })),
                    },
                    {
                        key: "jobseeker-m",
                        label: (_jsx(Link, { to: "/jobseeker", onClick: onLinkClick, style: linkStyle, children: tr("navigationlinks.jobseeker", "Jobseeker") })),
                    },
                ],
            },
            {
                key: "services-m",
                label: (_jsx(Link, { to: "/services", onClick: onLinkClick, style: linkStyle, children: tr("navigationlinks.services", "Services") })),
            },
        ].filter(Boolean);
        return { desktop, mobile };
    }, [isAuthenticated, isCompanyUser, isEmployeeUser, onLinkClick, t]);
}
const UtilityBar = () => (_jsx("div", { className: "lp-topbar", style: TOPBAR, children: _jsx("div", { className: "lp-container", children: _jsxs(Row, { align: "middle", gutter: [12, 4], children: [_jsx(Col, { flex: "auto", children: _jsxs(Space, { size: 16, wrap: true, style: {
                            width: "100%",
                            justifyContent: "flex-start",
                            textAlign: "left",
                        }, children: [_jsxs(Space, { size: 6, style: { color: "#fff" }, children: [_jsx(ClockCircleOutlined, { style: { fontSize: 12 } }), _jsx(Text, { style: TOPBAR_TEXT, children: "Mon - Fri : 9:00 - 17:00" })] }), _jsxs(Space, { size: 6, style: { color: "#fff" }, children: [_jsx(MailOutlined, { style: { fontSize: 12 } }), _jsx(Text, { style: TOPBAR_TEXT, children: "info@linkplus.com" })] }), _jsxs(Space, { size: 6, style: { color: "#fff" }, children: [_jsx(EnvironmentOutlined, { style: { fontSize: 12 } }), _jsx(Text, { style: TOPBAR_TEXT, children: "Str.Tirana, Ico Tower - 12 Floor, no.46, Prishtine, 10000, Kosovo" })] })] }) }), _jsx(Col, { children: _jsxs(Space, { size: 10, style: { color: "#fff" }, children: [_jsx(FacebookOutlined, { style: { fontSize: 12 } }), _jsx(InstagramOutlined, { style: { fontSize: 12 } }), _jsx(LinkedinOutlined, { style: { fontSize: 12 } })] }) })] }) }) }));
export const SiteHeader = ({ isAuthenticated, isCompanyUser, isEmployeeUser, t, }) => {
    const screens = Grid.useBreakpoint();
    const [open, setOpen] = useState(false);
    const handleLinkClick = () => setOpen(false);
    const { desktop, mobile } = useMenuItems({
        isAuthenticated,
        isCompanyUser,
        isEmployeeUser,
        onLinkClick: handleLinkClick,
        t,
    });
    return (_jsxs("div", { style: WRAP, children: [_jsx("style", { children: FORCE_CSS }), _jsx(UtilityBar, {}), _jsx(Header, { className: "lp-header-compact", style: MAINBAR, children: _jsx("div", { className: "lp-container", children: _jsxs(Row, { align: "middle", gutter: 12, wrap: true, children: [_jsx(Col, { children: _jsx(Logo, {}) }), _jsx(Col, { flex: "auto", children: screens.lg ? (_jsx(Menu, { mode: "horizontal", selectable: false, items: desktop, style: {
                                        border: "none",
                                        background: "transparent",
                                        marginLeft: 12,
                                    } })) : (_jsx(Button, { type: "text", icon: _jsx(MenuOutlined, {}), onClick: () => setOpen(true), style: { color: "#fff" } })) }), _jsx(Col, { children: screens.md ? (_jsxs(Space, { size: 12, align: "center", style: { color: "#fff" }, children: [_jsx(Space, { size: 6, align: "start", children: _jsxs("div", { children: [_jsx(Text, { style: {
                                                            color: "#fff",
                                                            opacity: 0.7,
                                                            fontSize: 11,
                                                            display: "block",
                                                        }, children: "Have Any Questions?" }), _jsx(PhoneOutlined, { style: { fontSize: 16 } }), " ", _jsx(Text, { style: { color: "#fff", fontWeight: 700, fontSize: 14 }, children: "+1 800 34 678 900" })] }) }), _jsx(Badge, { count: 0, color: "#872121ff", overflowCount: 99, offset: [-2, 6] }), _jsxs(Button, { style: GRADIENT_BTN, children: ["GET STARTED", " ", _jsx(ExportOutlined, { style: { marginLeft: 6, fontSize: 12 } })] })] })) : (_jsxs(Space, { children: [_jsx(Button, { type: "text", icon: _jsx(SearchOutlined, {}), style: { color: "#fff" } }), _jsx(Badge, { count: 0, color: "#741c1cff", overflowCount: 99, offset: [-2, 6], children: _jsx(Button, { type: "text", icon: _jsx(ShoppingCartOutlined, {}), style: { color: "#fff" } }) })] })) })] }) }) }), _jsx(Drawer, { title: "Menu", placement: "left", onClose: () => setOpen(false), open: open, bodyStyle: { padding: 0 }, children: _jsx(Menu, { mode: "inline", style: { borderRight: "none" }, items: mobile }) })] }));
};
export default SiteHeader;
