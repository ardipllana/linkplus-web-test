import React from "react";
import { Row, Col, Typography, Space } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  LinkedinOutlined,
  InstagramOutlined,
  RightOutlined,
} from "@ant-design/icons";
import styles from "./Footer.module.scss";

const { Title, Text, Link } = Typography;

interface FooterLinkProps {
  children: React.ReactNode;
  href?: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ children, href = "#" }) => {
  return (
    <div className={styles.footerLinkWrapper}>
      <Link href={href} className={styles.footerLink}>
        <RightOutlined className={styles.footerLinkBullet} />
        <span>{children}</span>
      </Link>
    </div>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerBackground}>
        <div className={styles.footerOverlay}>
          <div className={styles.footerContent}>
            <Row gutter={[32, 32]} justify="space-between">
              {/* Logo and Description */}
              <Col xs={24} sm={24} md={6} lg={6}>
                <div className={styles.footerBrand}>
                  <div className={styles.logoContainer}>
                    <div className={styles.logoIcon}></div>
                    <Title level={3} className={styles.brandName}>
                      LinkPlus IT
                    </Title>
                  </div>
                  <Text className={styles.brandDescription}>
                    We are the best world Information Technology Company.
                    Providing the highest quality in hardware, Software &
                    Network solutions.
                  </Text>
                  <Space size="large" className={styles.socialIcons}>
                    <Link href="#" className={styles.socialLink}>
                      <FacebookOutlined />
                    </Link>
                    <Link href="#" className={styles.socialLink}>
                      <TwitterOutlined />
                    </Link>
                    <Link href="#" className={styles.socialLink}>
                      <LinkedinOutlined />
                    </Link>
                    <Link href="#" className={styles.socialLink}>
                      <InstagramOutlined />
                    </Link>
                  </Space>
                </div>
              </Col>

              {/* Company Links */}
              <Col xs={24} sm={12} md={6} lg={5}>
                <div className={styles.footerSection}>
                  <Title level={4} className={styles.sectionTitle}>
                    Company
                  </Title>
                  <div className={styles.footerLinks}>
                    <FooterLink href="#">About Company</FooterLink>
                    <FooterLink href="#">For Customers</FooterLink>
                    <FooterLink href="#">Blog & News</FooterLink>
                    <FooterLink href="#">Careers & Reviews</FooterLink>
                    <FooterLink href="#">Sitemap</FooterLink>
                  </div>
                </div>
              </Col>

              {/* Quick Links */}
              <Col xs={24} sm={12} md={6} lg={5}>
                <div className={styles.footerSection}>
                  <Title level={4} className={styles.sectionTitle}>
                    Quick Links
                  </Title>
                  <div className={styles.footerLinks}>
                    <FooterLink href="#">Services</FooterLink>
                    <FooterLink href="#">Pricing</FooterLink>
                    <FooterLink href="#">Team</FooterLink>
                    <FooterLink href="#">Contact</FooterLink>
                    <FooterLink href="#">Terms of use</FooterLink>
                  </div>
                </div>
              </Col>

              {/* Contact Info */}
              <Col xs={24} sm={24} md={6} lg={6}>
                <div className={styles.footerSection}>
                  <Title level={4} className={styles.sectionTitle}>
                    Contact
                  </Title>
                  <div className={styles.contactInfo}>
                    <Text className={styles.contactAddress}>
                      Str.Tirana, Ico Tower - 12 Floor, no.46, Prishtine, 10000,
                      Kosovo
                    </Text>
                    <div className={styles.contactPhone}>
                      <Text className={styles.phoneLabel}>
                        Need help? Call us
                      </Text>
                      <Link
                        href="tel:+1084456-0789"
                        className={styles.phoneNumber}
                      >
                        +(084) 456-0789
                      </Link>
                    </div>
                    <Text className={styles.contactEmail}>
                    info@linkplus.com
                    </Text>
                  </div>
                </div>
              </Col>
            </Row>
          </div>

          {/* Copyright */}
          <div className={styles.footerBottom}>
            <Text className={styles.copyrightText}>
              © Copyright 2025{" "}
              <span className={styles.brandHighlight}>Link Plus IT</span>. All
              rights reserved.
            </Text>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
