import React from "react";
type Props = {
    isAuthenticated?: boolean;
    isCompanyUser?: boolean;
    isEmployeeUser?: boolean;
    t?: (k: string) => string;
};
export declare const SiteHeader: React.FC<Props>;
export default SiteHeader;
