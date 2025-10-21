import React from "react";
export type ServiceCardProps = {
    imageSrc: string;
    title: string;
    excerpt: string;
    category?: string;
    showIcon?: boolean;
};
declare const ServiceFeatureCard: React.FC<ServiceCardProps>;
export default ServiceFeatureCard;
