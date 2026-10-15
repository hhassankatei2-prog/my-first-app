import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FiSend } from "react-icons/fi";
import { LuFacebook } from "react-icons/lu";
import { TbBrandTwitter } from "react-icons/tb";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";
import { DivBcColor } from "./style";
import { Link } from "react-router-dom";
const Footer = () => {
    const { t,i18n } = useTranslation();
    const  currentLang = i18n.language;
  
  const [emailAddress, setEmailAddress] = useState("");
  const handleSubscribe = (event) => {
    setEmailAddress("");
  };
  return (
     <DivBcColor currentLang={currentLang}>
        <footer className="footer container" >
          <div className="footer-container">
    
            {/* Contact Detail */}
            <div className="footer-column">
              <div className="CONTACT-DETAIL">
                <h4>{t("footerContactTitle")}</h4>
    
                <p>{t("footerAddressLine1")}</p>
                <p>{t("footerAddressLine2")}</p>
                <p>{t("footerPhone")} <span dir="ltr">+1 234 567 8900</span></p>
                <p>{t("footerEmail")} <span dir="ltr">info@dkust.com</span></p>
              </div>
            </div>
    
            {/* Quick Links */}
            <div className="footer-column">
              <h4>{t("footerQuickLinksTitle")}</h4>
    
              <ul>
                <li><Link to="/home">{t("footerAboutUs")}</Link></li>
                <li><Link to="/products">{t("footerServices")}</Link></li>
                <li><Link to="/products">{t("footerPortfolio")}</Link></li>
                <li><Link to="/quiz">{t("footerBlog")}</Link></li>
                <li><Link to="/login">{t("footerContactUs")}</Link></li>
              </ul>
            </div>
    
            {/* Our Services */}
            <div className="footer-column">
              <h4>{t("footerOurServicesTitle")}</h4>
    
              <ul>
                <li><Link to="/products">{t("footerWebDevelopment")}</Link></li>
                <li><Link to="/products">{t("footerMachineLearning")}</Link></li>
                <li><Link to="/products">{t("footerRobotics")}</Link></li>
                <li><Link to="/products">{t("footerIndustrialConsulting")}</Link></li>
                <li><Link to="/products">{t("footerDataAnalytics")}</Link></li>
              </ul>
            </div>
    
            {/* Subscribe Newsletter */}
            <div className="footer-column">
              <h4>{t("footerNewsletterTitle")}</h4>
    
              <p>{t("footerNewsletterText")}</p>
    
              <div >
                <input
                className="newsletter-input"
                  type="email"
                  placeholder={t("footerEmailPlaceholder")}
                  value={emailAddress}
                  onChange={(event) => setEmailAddress(event.target.value)}
                />
    
                <button
                  className="newsletter-btn"
                  aria-label={t("footerSubscribe")}
                  onClick={handleSubscribe}
                >
                  <FiSend size={12} color="white" />
                </button>
              </div>
            </div>
    
          </div>
    
          <div className="footer-bottom">
            <p>{t("footerCopyright")}</p>
            <p>{t("footerCreatedBy", { name: "Hassan Katei" })}</p>
            <div className="footer-social">
              <Link to="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <LuFacebook size={13} />
              </Link>
              <Link to="https://x.com" target="_blank" rel="noopener noreferrer">
                <TbBrandTwitter size={13} />
              </Link>
              <Link to="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <SlSocialLinkedin size={13} />
              </Link>
              <Link to="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={13} />
              </Link>
            </div>
          </div>
        </footer>
        </DivBcColor>
  );
};

export default Footer;