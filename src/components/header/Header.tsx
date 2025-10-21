import React, { useState, useMemo } from "react";
import type { CSSProperties } from "react";
import {
  Layout,
  Row,
  Col,
  Space,
  Typography,
  Menu,
  Dropdown,
  Badge,
  Button,
  Drawer,
  Grid,
} from "antd";
import {
  ClockCircleOutlined,
  MailOutlined,
  EnvironmentOutlined,
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  PhoneOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  DownOutlined,
  MenuOutlined,
  ExportOutlined,
} from "@ant-design/icons";
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

const WRAP: CSSProperties = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  zIndex: 1000,
  color: "#fff",
};

const TOPBAR: CSSProperties = {
  borderBottom: "1px solid rgba(255,255,255,0.25)",
  background: "transparent",
};
const MAINBAR: CSSProperties = {
  background: "transparent",
  padding: 0,
  borderBottom: "1px solid rgba(255,255,255,0.18)",
};

const NAV_LINK: CSSProperties = {
  color: "#fff",
  opacity: 0.9,
  fontWeight: 500,
  fontSize: 13,
};
const TOPBAR_TEXT: CSSProperties = {
  color: "#fff",
  opacity: 0.85,
  fontSize: 11,
};
const LOGO_TEXT: CSSProperties = {
  fontSize: 18,
  fontWeight: 700,
  color: "#fff",
};

const GRADIENT_BTN: CSSProperties = {
  border: "none",
  borderRadius: 10,
  fontWeight: 600,
  fontSize: 12,
};

type Props = {
  isAuthenticated?: boolean;
  isCompanyUser?: boolean;
  isEmployeeUser?: boolean;
  t?: (k: string) => string;
};

const Logo = () => (
  <Space align="center" size={8}>
    <Text style={LOGO_TEXT}>LINKPLUS IT</Text>
  </Space>
);

function useMenuItems(opts: {
  isAuthenticated?: boolean;
  isCompanyUser?: boolean;
  isEmployeeUser?: boolean;
  onLinkClick?: () => void;
  t?: (k: string) => string;
}) {
  const { isAuthenticated, isCompanyUser, isEmployeeUser, onLinkClick, t } =
    opts;
  const tr = (k: string, def: string) => (t ? t(k) : def);
  const linkStyle = NAV_LINK;

  return useMemo(() => {
    const authDashboard =
      isAuthenticated && (isCompanyUser || isEmployeeUser)
        ? {
            key: "authDashboard",
            label: (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 15,
                }}
              >
                {isCompanyUser && (
                  <Link
                    to="/company/dashboard"
                    onClick={onLinkClick}
                    style={linkStyle}
                  >
                    {tr("navigationlinks.dashboard", "Dashboard")}
                  </Link>
                )}
                {isEmployeeUser && (
                  <Link
                    to="/employee/dashboard"
                    onClick={onLinkClick}
                    style={linkStyle}
                  >
                    {tr("navigationlinks.dashboard", "Dashboard")}
                  </Link>
                )}
              </div>
            ),
          }
        : null;

    const featuresOverlay = (
      <Menu
        items={[
          {
            key: "company",
            label: (
              <Link to="/company" onClick={onLinkClick} style={linkStyle}>
                {tr("navigationlinks.company", "Company")}
              </Link>
            ),
          },
          {
            key: "jobseeker",
            label: (
              <Link to="/jobseeker" onClick={onLinkClick} style={linkStyle}>
                {tr("navigationlinks.jobseeker", "Jobseeker")}
              </Link>
            ),
          },
        ]}
      />
    );

    const desktop = [
      authDashboard || undefined,
      {
        key: "home",
        label: (
          <Link to="/" onClick={onLinkClick} style={linkStyle}>
            {tr("navigationlinks.product", "Home")}
          </Link>
        ),
      },
      {
        key: "about",
        label: (
          <Link to="/aboutus" onClick={onLinkClick} style={linkStyle}>
            {tr("navigationlinks.about", "About")}
          </Link>
        ),
      },
      {
        key: "services",
        label: (
          <Link to="/services" onClick={onLinkClick} style={linkStyle}>
            {tr("navigationlinks.services", "Services")}
          </Link>
        ),
      },
      {
        key: "blog",
        label: (
          <Link to="/blog" onClick={onLinkClick} style={linkStyle}>
            {tr("navigationlinks.blog", "Blog")}
          </Link>
        ),
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
    ].filter(Boolean) as any[];

    const mobile = [
      authDashboard || undefined,
      {
        key: "home-m",
        label: (
          <Link to="/" onClick={onLinkClick} style={linkStyle}>
            {tr("navigationlinks.product", "Home")}
          </Link>
        ),
      },
      {
        key: "pricing-m",
        label: (
          <Link to="/pricing" onClick={onLinkClick} style={linkStyle}>
            {tr("navigationlinks.pricing", "Pricing")}
          </Link>
        ),
      },
      {
        key: "about-m",
        label: (
          <Link to="/aboutus" onClick={onLinkClick} style={linkStyle}>
            {tr("navigationlinks.about", "About")}
          </Link>
        ),
      },
      {
        key: "features-m",
        label: tr("navigationlinks.features", "Features"),
        children: [
          {
            key: "company-m",
            label: (
              <Link to="/company" onClick={onLinkClick} style={linkStyle}>
                {tr("navigationlinks.company", "Company")}
              </Link>
            ),
          },
          {
            key: "jobseeker-m",
            label: (
              <Link to="/jobseeker" onClick={onLinkClick} style={linkStyle}>
                {tr("navigationlinks.jobseeker", "Jobseeker")}
              </Link>
            ),
          },
        ],
      },
      {
        key: "services-m",
        label: (
          <Link to="/services" onClick={onLinkClick} style={linkStyle}>
            {tr("navigationlinks.services", "Services")}
          </Link>
        ),
      },
    ].filter(Boolean) as any[];

    return { desktop, mobile };
  }, [isAuthenticated, isCompanyUser, isEmployeeUser, onLinkClick, t]);
}

const UtilityBar = () => (
  <div className="lp-topbar" style={TOPBAR}>
    <div className="lp-container">
      <Row align="middle" gutter={[12, 4]}>
        <Col flex="auto">
          <Space
            size={16}
            wrap
            style={{
              width: "100%",
              justifyContent: "flex-start",
              textAlign: "left",
            }}
          >
            <Space size={6} style={{ color: "#fff" }}>
              <ClockCircleOutlined style={{ fontSize: 12 }} />
              <Text style={TOPBAR_TEXT}>Mon - Fri : 9:00 - 17:00</Text>
            </Space>
            <Space size={6} style={{ color: "#fff" }}>
              <MailOutlined style={{ fontSize: 12 }} />
              <Text style={TOPBAR_TEXT}>info@linkplus.com</Text>
            </Space>
            <Space size={6} style={{ color: "#fff" }}>
              <EnvironmentOutlined style={{ fontSize: 12 }} />
              <Text style={TOPBAR_TEXT}>
                Str.Tirana, Ico Tower - 12 Floor, no.46, Prishtine, 10000,
                Kosovo
              </Text>
            </Space>
          </Space>
        </Col>
        <Col>
          <Space size={10} style={{ color: "#fff" }}>
            <FacebookOutlined style={{ fontSize: 12 }} />
            <InstagramOutlined style={{ fontSize: 12 }} />
            <LinkedinOutlined style={{ fontSize: 12 }} />
          </Space>
        </Col>
      </Row>
    </div>
  </div>
);

export const SiteHeader: React.FC<Props> = ({
  isAuthenticated,
  isCompanyUser,
  isEmployeeUser,
  t,
}) => {
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

  return (
    <div style={WRAP}>
      {/* inject hard overrides once */}
      <style>{FORCE_CSS}</style>

      <UtilityBar />

      <Header className="lp-header-compact" style={MAINBAR}>
        <div className="lp-container">
          <Row align="middle" gutter={12} wrap>
            <Col>
              <Logo />
            </Col>

            <Col flex="auto">
              {screens.lg ? (
                <Menu
                  mode="horizontal"
                  selectable={false}
                  items={desktop}
                  style={{
                    border: "none",
                    background: "transparent",
                    marginLeft: 12,
                  }}
                />
              ) : (
                <Button
                  type="text"
                  icon={<MenuOutlined />}
                  onClick={() => setOpen(true)}
                  style={{ color: "#fff" }}
                />
              )}
            </Col>

            <Col>
              {screens.md ? (
                <Space size={12} align="center" style={{ color: "#fff" }}>
                  <Space size={6} align="start">
                    <div>
                      <Text
                        style={{
                          color: "#fff",
                          opacity: 0.7,
                          fontSize: 11,
                          display: "block",
                        }}
                      >
                        Have Any Questions?
                      </Text>
                      <PhoneOutlined style={{ fontSize: 16 }} />{" "}
                      <Text
                        style={{ color: "#fff", fontWeight: 700, fontSize: 14 }}
                      >
                        +1 800 34 678 900
                      </Text>
                    </div>
                  </Space>
                  <Badge
                    count={0}
                    color="#872121ff"
                    overflowCount={99}
                    offset={[-2, 6]}
                  />
                  <Button style={GRADIENT_BTN}>
                    GET STARTED{" "}
                    <ExportOutlined style={{ marginLeft: 6, fontSize: 12 }} />
                  </Button>
                </Space>
              ) : (
                <Space>
                  <Button
                    type="text"
                    icon={<SearchOutlined />}
                    style={{ color: "#fff" }}
                  />
                  <Badge
                    count={0}
                    color="#741c1cff"
                    overflowCount={99}
                    offset={[-2, 6]}
                  >
                    <Button
                      type="text"
                      icon={<ShoppingCartOutlined />}
                      style={{ color: "#fff" }}
                    />
                  </Badge>
                </Space>
              )}
            </Col>
          </Row>
        </div>
      </Header>

      <Drawer
        title="Menu"
        placement="left"
        onClose={() => setOpen(false)}
        open={open}
        bodyStyle={{ padding: 0 }}
      >
        <Menu mode="inline" style={{ borderRight: "none" }} items={mobile} />
      </Drawer>
    </div>
  );
};

export default SiteHeader;
