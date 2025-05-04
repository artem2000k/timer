import React from "react";
import './footer.css';

const Footer = ({ className = '' }) => {
    return (
        <div className={`footer ${className}`}>
            <span>Arbeit macht Frei</span>
        </div>
    )
}

export default Footer;