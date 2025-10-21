import React from "react";
import styles from "./ServiceFeatureCard.module.scss";

export type ServiceCardProps = {
  imageSrc: string;
  title: string;
  excerpt: string;
  category?: string;
  showIcon?: boolean;
};

const BadgeIcon = () => (
  <svg className={styles.svcIcon} viewBox="0 0 24 24" aria-hidden="true">
    <defs>
      <linearGradient id="svcGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#7C3AED" />
        <stop offset="100%" stopColor="#3B82F6" />
      </linearGradient>
    </defs>
    <path
      fill="url(#svcGrad)"
      d="M3 6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H9l-1.2 2H15v2H6v-2h.8L8 14H5a2 2 0 0 1-2-2V6zm14.4.7.7-1.2 1.7 1-.7 1.2c.17.52.17 1.08 0 1.6l.7 1.2-1.7 1-.7-1.2c-.52.17-1.08.17-1.6 0l-1.2.7-1.7-1 .7-1.2a3 3 0 0 1 0-1.6L13.8 6l1.7-1 .7 1.2c.52-.17 1.08-.17 1.6 0Z"
    />
  </svg>
);

const ServiceFeatureCard: React.FC<ServiceCardProps> = ({
  imageSrc,
  title,
  excerpt,
  category,
  showIcon = true,
}) => {
  return (
    <article className={styles.svcCard}>
      <img className={styles.svcImage} src={imageSrc} alt={title} loading="lazy" />

      <div className={styles.svcPanel}>
        <div className={styles.svcHeader}>
          {showIcon && (
            <span className={styles.svcBadge}>
              <BadgeIcon />
            </span>
          )}
          <div className={styles.svcHeading}>
            {category && <p className={styles.svcCategory}>{category}</p>}
            <h3 className={styles.svcTitle}>{title}</h3>
          </div>
        </div>
        <p className={styles.svcExcerpt}>{excerpt}</p>
      </div>
    </article>
  );
};

export default ServiceFeatureCard;
