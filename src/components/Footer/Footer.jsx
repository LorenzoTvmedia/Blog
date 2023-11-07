import { HiOutlineLocationMarker, HiOutlineMail } from "react-icons/hi";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaAngleDoubleUp,
} from "react-icons/fa";

import logo from "./../../assets/renzologo.png";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const scrollToTopHandler = () => {
    const header = document.getElementById("header");
    header.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="footer__info">
          <Link to="/">
            <div
              className="logo"
              onClick={() => {
                navigate("/posts");
              }}
            >
              <img src={logo} alt="Lorenzo Tv" />
              <h3>Lorenzo Tv</h3>
            </div>
          </Link>
          <ul>
            <li>
              <HiOutlineLocationMarker /> <span>Bariga, Lagos Nigeria</span>
            </li>
            <li>
              <HiOutlineMail />{" "}
              <span>
                <a href="mailto:lorenzotv@gmail.com">lorenzotv@gmail.com</a>
              </span>
            </li>
          </ul>
        </div>
        <div className="footer__quick">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About Us</a>
            </li>
            <li>
              <a href="/">Our Services</a>
            </li>
            <li>
              <a href="/">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="footer__quick">
          <h3>Community</h3>
          <ul>
            <li>
              <a href="/">Blog</a>
            </li>
            <li>
              <a href="/">Help Centers</a>
            </li>
            <li>
              <a href="/">Patners</a>
            </li>
          </ul>
        </div>
        <div className="footer__socials">
          <h3>Socials</h3>
          <ul>
            <li>
              <a href="/">
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a href="/">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="/">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="/">
                <FaWhatsapp />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__notes">
        <p> &copy; 2022 | All Rights Reserved lorenzotv</p>
      </div>
      <div className="footer__scroll--box" onClick={scrollToTopHandler}>
        <FaAngleDoubleUp className="footer__scroll" />
      </div>
    </footer>
  );
};
export default Footer;
