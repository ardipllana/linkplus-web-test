import React, { useState, useEffect } from 'react';
import { Check, ArrowUp } from 'lucide-react';
import styles from './AboutUs.module.scss';

const AboutUs: React.FC = () => {
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

  return (
    <>
      <section className={styles.hero}>
        <div 
          className={styles.heroBackground}
          style={{
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <div className={styles.heroContainer}>
            <h1 className={styles.heroTitle}>About Us</h1>
            <p className={styles.heroSubtitle}>
              Discover our journey and commitment to excellence
            </p>
          </div>
        </div>
      </section>

      <section className={styles.mainContent}>
        <div className={styles.container}>
          <div className={styles.contentGrid}>
            <div className={styles.textContent}>
              <div className={styles.badge}>
                <span className={styles.badgeDot} />
                <span className={styles.badgeText}>WHO WE ARE</span>
              </div>
              
              <h2 className={styles.mainTitle}>
                Exclusive Technology to Provide IT Solutions & Services
              </h2>
              
              <p className={styles.description}>
                We have over 20+ years of experience in all stages of software design, 
                development, maintenance, and support. Our expertise spans across 
                multiple industries and technologies.
              </p>
              
              <div className={styles.servicesList}>
                {[
                  'IT Professional Services',
                  'Application Development Services',
                  'Managed IT Services',
                  'Maintenance And Support'
                ].map((service, index) => (
                  <div key={index} className={styles.serviceItem}>
                    <div className={styles.serviceIcon}>
                      <Check size={16} />
                    </div>
                    <span>{service}</span>
                  </div>
                ))}
              </div>
              
              <p className={styles.additionalText}>
                Our teams know how to harness the power of data, artificial intelligence, 
                modernising core, optimising and automating operations to achieve your 
                business goals.
              </p>
              
              <div className={styles.ctaSection}>
                <button className={styles.ctaButton}>
                  <span>MORE ABOUT US</span>
                  <span className={styles.ctaArrow}>→</span>
                </button>
                
              </div>
            </div>
            
            <div className={styles.imageContent}>
              <div className={styles.imageWrapper}>
                <div className={styles.primaryImage} />
                <div className={styles.secondaryImage} />
                
                <div className={styles.decorativePattern}>
                  {Array.from({ length: 25 }, (_, i) => (
                    <div key={i} className={styles.patternDot} />
                  ))}
                </div>
                
                <div className={styles.decorativeLines}>
                  {Array.from({ length: 3 }, (_, i) => (
                    <div key={i} className={styles.line} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <button
        onClick={scrollToTop}
        className={`${styles.backToTop} ${showBackToTop ? styles.visible : ''}`}
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </button>
    </>
  );
};

export default AboutUs;