import React from "react";
import "./Footer.css";
import FooterCol from "../FooterCol/FooterCol";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faGooglePlusG,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const noNamed = [
    { name: "Basic Package", link: "/safety" },
    { name: "V.I.P Package", link: "/instructors" },
    { name: "BEST SAFETY MEASURES", link: "/personal-safety" },
    { name: "EXPERIENCED INSTRUCTORS", link: "/experienced" },
    { name: "PERFECT TIMING", link: "/instructors" },
  ];
  const ourAddress = [
    { name: "3261 Anmoore Road Brooklyn, NY 1123", link: "//google.com/map" },
    { name: "Yards", link: "//google.com/map" },
  ];
  const oralPlan = [
    { name: "BEST SAFETY MEASURES", link: "/safety" },
    { name: "EXPERIENCED INSTRUCTORS", link: "/instructors" },
    { name: "PERFECT TIMING", link: "/personal-safety" },
    { name: "AFFORDABLE FEE", link: "/experienced" },
    { name: "CLASS FORMATS", link: "/instructors" },
    { name: "PAYMENT PLANS", link: "/instructors" },
    { name: "PAYMENT PLANS", link: "/instructors" },
  ];
  const services = [
    { name: "Basic Package", link: "/safety" },
    { name: "V.I.P Package", link: "/instructors" },
    { name: "Extra Package", link: "/personal-safety" },
    { name: "Senior Driving Package", link: "/experienced" },
    { name: "Adult Driving Package", link: "/instructors" },
    { name: "Woman Driving Package", link: "/instructors" },
    { name: "Couple Driving Package", link: "/instructors" },
  ];
  return (
    <footer className="footer-area clear-both">
      <div className="container pt-5">
        <div className="row py-5">
          <FooterCol key={1} menuTitle={"."} menuItems={noNamed} />
          <FooterCol key={2} menuTitle="Services" menuItems={services} />
          <FooterCol key={3} menuTitle="Why Choose Us?" menuItems={oralPlan} />
          <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}>
            <ul className="social-media list-inline">
              <li className="list-inline-item">
                <a href="//facebook.com">
                  <FontAwesomeIcon
                    className="icon active-icon"
                    icon={faFacebookF}
                  />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="//google.com">
                  <FontAwesomeIcon className="icon" icon={faGooglePlusG} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="//instagram.com">
                  <FontAwesomeIcon className="icon" icon={faInstagram} />
                </a>
              </li>
            </ul>
            <div className="mt-5">
              <h6>Call now</h6>
              <button className="btn btn-primary">+800-123-4567</button>
            </div>
          </FooterCol>
        </div>
        <div className="copyRight text-center">
          <p>Copyright {new Date().getFullYear()} All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
