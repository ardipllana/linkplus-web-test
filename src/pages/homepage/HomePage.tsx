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
  (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M4 4h16v2H4zm0 6h16v2H4zm0 6h10v2H4z" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2a10 10 0 100 20 10 10 0 000-20zM11 14h2v2h-2zm0-8h2v6h-2z" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 5h18v2H3zm0 6h12v2H3zm0 6h18v2H3z" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3H5a2 2 0 00-2 2v16l7-3 7 3V5a2 2 0 00-2-2z" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    </svg>
  ),
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
    message:
      "Amazing theme! Neotech brings a professional and modern look, perfect for my tech website...",
    name: "James K",
    role: "Tech Consultant",
    avatar: zimrieIdrizi,
  },
  {
    message:
      "Fantastic service! Everything was smooth and the design exceeded expectations...",
    name: "Sarah M",
    role: "Product Manager",
    avatar: leonaTahiri,
  },
];

const HomePage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className={styles.container}>
      {/* PURE CSS Slider */}
      <div className={styles.slider}>
        <input type="radio" name="slider" id="slide1" defaultChecked />
        <input type="radio" name="slider" id="slide2" />
        <input type="radio" name="slider" id="slide3" />
        {/* <div className={styles.slides}>
          <div className={styles.slide}>
            <img src="https://via.placeholder.com/1200x400?text=Slide+1" alt="Slide 1" />
          </div>
          <div className={styles.slide}>
            <img src="https://via.placeholder.com/1200x400?text=Slide+2" alt="Slide 2" />
          </div>
          <div className={styles.slide}>
            <img src="https://via.placeholder.com/1200x400?text=Slide+3" alt="Slide 3" />
          </div>
        </div> */}
        <div className={styles.navigation}>
          <label htmlFor="slide1" className={styles.navBtn}></label>
          <label htmlFor="slide2" className={styles.navBtn}></label>
          <label htmlFor="slide3" className={styles.navBtn}></label>
        </div>
      </div>

      {/* Top text section */}
      <div className={styles.textSection}>
        <p className={styles.subheading}>
          <a href='https://linkplus-it.com/'>LinkPlus IT</a> is a software development company specialized in
        </p>
        <h1 className={styles.heading1}>Development</h1>
        <p className={styles.subheading}>of expandable applications.</p>
        <button className={styles.button}>READ MORE</button>
      </div>

      {/* Cards section */}
      <div className={styles.cardSection}>
        {titles.map((title, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.cardIcon}>{icons[index]}</div>
            <h4 className={styles.cardTitle}>{title}</h4>
            <p className={styles.cardText}>
              Expertise in {title.toLowerCase()} for companies across various industries.
            </p>
          </div>
        ))}
      </div>

      {/* Exclusive Technology section */}
      <div className={styles.exclusiveSection}>
        <div className={styles.exclusiveText}>
          <p className={styles.sectionLabel}>WHO WE BRING</p>
          <h2 className={styles.sectionHeading}>
            Exclusive Technology to Provide IT Solutions & Services
          </h2>
          <p className={styles.sectionDescription}>
            We have over 20+ years of experience in all stages of software design, development,
            maintenance, and support.
          </p>
          <div className={styles.listGrid}>
            <ul>
              <li>✔ IT Professional services</li>
              <li>✔ Managed IT services</li>
            </ul>
            <ul>
              <li>✔ Application Development services</li>
              <li>✔ Maintenance And Support</li>
            </ul>
          </div>
          <p className={styles.sectionDescription}>
            Our teams know how to harness the power of data, artificial intelligence,
            modernising core, optimising and automating operations to achieve your business goals.
          </p>
          <button className={styles.button}>MORE ABOUT US</button>
        </div>
        <div className={styles.exclusiveImages}>
          <img
            src="https://via.placeholder.com/300x200"
            alt="Team meeting"
            className={styles.imgTop}
          />
          <img
            src="https://via.placeholder.com/300x200"
            alt="Team discussion"
            className={styles.imgBottom}
          />
        </div>
      </div>

      {/* IT Services Section */}
      <div className={styles.itServicesSection}>
        <p className={styles.subheading}>OUR SERVICES</p>
        <h2 className={styles.heading}>We Offer a Wide Variety of IT Services</h2>
        <div className={styles.itCardSection}>
          <div className={styles.itCard}>
            <img src="https://via.placeholder.com/300x200" alt="Business process solutions" />
            <h4 className={styles.cardTitle}>Business process solutions</h4>
          </div>
          <div className={styles.itCard}>
            <img src="https://via.placeholder.com/300x200" alt="Disaster Recovery & Backup" />
            <h4 className={styles.cardTitle}>Disaster Recovery & Backup</h4>
          </div>
          <div className={styles.itCard}>
            <img src="https://via.placeholder.com/300x200" alt="Managed IT Services" />
            <h4 className={styles.cardTitle}>Managed IT Services</h4>
          </div>
        </div>
        <p className={styles.description1}>
          We have an amazing variety of services to offer so <a href="#">see ALL SERVICES</a>
        </p>
      </div>

      {/* Technology Solution Section */}
      <div className={styles.technologySolutionSection}>
        <div className={styles.imageWrapper}>
          <img src={teamImage} alt="Team working" className={styles.teamImage} />
        </div>

        <div className={styles.technologyContent}>
          <p className={styles.technologyLabel}>Technology Index</p>
          <h2 className={styles.technologyHeading}>
            We Are Always Best For Technology Solution
          </h2>

          <div className={styles.serviceIcons}>
            <div className={styles.serviceItem}>
              <span className={styles.serviceIcon}>💻</span>
              <div className={styles.serviceText}>
                <p>Experience</p>
                <span>We give you best service to your project.</span>
              </div>
            </div>
            <div className={styles.serviceItem}>
              <span className={styles.serviceIcon}>⚡</span>
              <div className={styles.serviceText}>
                <p>Quick Support</p>
                <span>We are always here to support and help.</span>
              </div>
            </div>
          </div>

          <div className={styles.progressBars}>
            <div className={styles.progressItem}>
              <span>IT Management</span>
              <div className={styles.progressBar}>
                <div className={styles.progress} style={{ width: "95%" }}></div>
              </div>
            </div>

            <div className={styles.progressItem}>
              <span>Data Security</span>
              <div className={styles.progressBar}>
                <div className={styles.progress} style={{ width: "80%" }}></div>
              </div>
            </div>

            <div className={styles.progressItem}>
              <span>Technology Solution</span>
              <div className={styles.progressBar}>
                <div className={styles.progress} style={{ width: "90%" }}></div>
              </div>
            </div>
          </div>

          <p className={styles.technologyDescription}>
            We help businesses achieve strategic technology transformation,
            minimising the totality of their end-to-end business risk and maximising
            the business value of their IT infrastructure.
          </p>
        </div>
      </div>

      {/* Meet Our Team Section with Seamless Slider */}
      <div className={styles.teamSection}>
        <p className={styles.teamLabel}>MEET OUR TEAM</p>
        <h2 className={styles.teamHeading}>Meet our team of experts</h2>

        <div className={styles.teamSlider}>
          <div className={styles.teamSlides}>
            {teamMembers.map((member, index) => (
              <div key={`original-${index}`} className={styles.teamCard}>
                <img src={member.image} alt={member.name} className={styles.teamMember} />
                <p className={styles.teamName}>{member.name}</p>
                <p className={styles.teamPosition}>{member.position}</p>
              </div>
            ))}
            {/* Duplicate team members for seamless loop */}
            {teamMembers.map((member, index) => (
              <div key={`duplicate-${index}`} className={styles.teamCard}>
                <img src={member.image} alt={member.name} className={styles.teamMember} />
                <p className={styles.teamName}>{member.name}</p>
                <p className={styles.teamPosition}>{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Frequently Asked Questions Section */}
      <div className={styles.faqSection}>
        <div className={styles.badgeWrapper}>
          <div className={styles.experienceBadge}>
            8<span>Years of experience</span>
          </div>
        </div>
        <div className={styles.faqContent}>
          <h2 className={styles.faqHeading}>Have any Question to our team?</h2>
          <div className={styles.faqItems}>
            {faqItems.map((item, index) => (
              <details key={index} className={styles.faqItem}>
                <summary className={styles.faqQuestion}>
                  {item.question} <span className={styles.faqToggle}></span>
                </summary>
                <p className={styles.faqAnswer}>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.recentProjectsSection}>
        <p className={styles.recentLabel}>LATEST STUDIES</p>
        <h2 className={styles.recentHeading}>Our Recent Launched Projects Available</h2>

        <div className={styles.recentProjectsGrid}>
          {/* Card 1 */}
          <div className={styles.projectCard}>
            <img
              src={ilirianaIbraj}
              alt="Tailoring Software Solutions"
              className={styles.projectImage}
              style={{ height: "380px", objectFit: "cover", borderRadius: "20px", width: "100%" }}
            />
            <div className={styles.cardContent}>
              <p className={styles.projectCategory}>TECHNOLOGY</p>
              <h4 className={styles.projectTitle}>Tailoring Software Solutions</h4>
            </div>
          </div>

          {/* Card 2 */}
          <div className={styles.projectCard}>
            <img
              src={leonaTahiri}
              alt="We Are Success IT With Solution"
              className={styles.projectImage}
              style={{ height: "380px", objectFit: "cover", borderRadius: "20px", width: "100%" }}
            />
            <div className={styles.cardContent}>
              <p className={styles.projectCategory}>SECURITY</p>
              <h4 className={styles.projectTitle}>We Are Success IT With Solution</h4>
            </div>
          </div>

          {/* Card 3 */}
          <div className={styles.projectCard}>
            <img
              src={zimrieIdrizi}
              alt="Software Solution With Client"
              className={styles.projectImage}
              style={{ height: "380px", objectFit: "cover", borderRadius: "20px", width: "100%" }}
            />
            <div className={styles.cardContent}>
              <p className={styles.projectCategory}>SECURITY, TECHNOLOGY</p>
              <h4 className={styles.projectTitle}>Software Solution With Client</h4>
            </div>
          </div>
        </div>
      </div>

   {/* Testimonials Section */}
<div className={styles.testimonialSection}>
  {/* <div className={styles.testimonialImages}>
    <img src={ilirianaIbraj} alt="Client 1" className={styles.testimonialImage} />
    <img src={leonaTahiri} alt="Client 2" className={styles.testimonialImage1} />
  </div> */}
  <div className={styles.testimonialContent}>
    <p className={styles.testimonialLabel}>WHAT CLIENTS SAY</p>
    <h2 className={styles.testimonialHeading}>Hear What Our Global Clients Say</h2>
    <div className={styles.testimonialStars}>★★★★★</div>
    <p className={styles.testimonialText}>
      Amazing theme! Neotech brings a professional and modern look, perfect for my tech website. The interface is easy to customize with fast support.
    </p>
    <div className={styles.testimonialAuthor}>
      <img src={testimonials[currentIndex].avatar} alt={testimonials[currentIndex].name} className={styles.authorImage} />
      <div>
        <p className={styles.authorName}>{testimonials[currentIndex].name}</p>
        <p className={styles.authorRole}>{testimonials[currentIndex].role}</p>
      </div>
    </div>
    <div className={styles.testimonialDots}>
      {testimonials.map((_, index) => (
        <span
          key={index}
          className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
          onClick={() => setCurrentIndex(index)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && setCurrentIndex(index)}
        />
      ))}
    </div>
  </div>
</div>
    </div>
  );
};

export default HomePage;
