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
import { Footerlinks } from "../smallComponents/Smallcomponents";
import { CiMail } from "react-icons/ci";
// import { FaWhatsapp } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import Logo2 from '../../assets/newlogo.png'
import Logo2white from '../../assets/logo2white.png'


const Footer = () => {
  const navigate = useNavigate();

  const scrollToTopHandler = () => {
    const header = document.getElementById("header");
    header.scrollIntoView({ behavior: "smooth" });
  };
  

const quickLinks = [
  {label: 'Home', to:''},
  {label: 'About Us', to:''},
  {label: 'Our Services', to:''},
  {label: 'Contact Us', to:''}
]

const community = [
  {label: 'Blog', to:''},
  {label: 'Help Centers', to:''},
  {label: 'Partners', to:''}
]

const legal = [
  {label: 'Terms', to:''},
  {label: 'Privacy', to:''},
  {label: 'Cookies', to:''},
  {label: 'Licences', to:''}
]


  // <Link to="/">
  //           <div
  //             className="logo"
  //             onClick={() => {
  //               navigate("/posts");
  //             }}
  //           >
  //             <img src={logo} alt="Lorenzo Tv" />
  //             <h3>Lorenzo Tv</h3>
  //           </div>
  // </Link>
  return (
    <footer className="footer p-6">
      {/* <div className="footer__main">
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
      </div> */}
      {/* <div className="footer__notes">
        <p> &copy; 2022 | All Rights Reserved lorenzotv</p>
      </div> */}
      <div className="flex items-center justify-center"><p className="text-white font-[600] text-[19px] text-center md:text-[23px] lg:text-[30px] font-sans capitalize">lets get started on something great</p></div>
      <div className="flex items-center justify-center gap-[3rem] mt-10">
        <button className="text-white border-[1px] border-white rounded-xlg p-2 text-[15px] font-[500]">Chat Us</button>
        <button className="text-white rounded-md py-2 px-4 text-[15px] font-[500] bg-red-400">Get Started</button>
      </div>
      <div className="flex justify-evenly gap-4 flex-wrap mt-10">
        <Footerlinks linktitle='Quick Links' links={quickLinks}/>
        <Footerlinks linktitle='Community' links={community}/>
        <Footerlinks linktitle='Legal' links={legal}/>
        <div className="flex items-center flex-col gap-4">
          <h5 className="text-[20px] font-[700]">Contact Us</h5>
          <p className="flex items-center space-x-2"><CiMail className="text-[19px] font-[600]"/><span className="text-[13px] cursor-pointer hover:underline">ahmadbene13@gail.com</span></p>
          <div className="flex gap-2 text-[19px]">
            <Link><FaWhatsapp /></Link>
            <Link><FaTwitter /></Link>
            <Link><FaInstagram /></Link>
            <Link><FaFacebookF /></Link>
            <Link><FaLinkedin /></Link>
          </div>
          <p className="flex items-center space-x-2"><CiLocationOn className="text-[19px] font-[600]"/> <span className="capitalize text-[16px]">bariga,lagos nigeria</span></p>
        </div>
        <div className="flex flex-col space-y-4">
          <h5 className="text-[20px] font-[700]">Newsletter</h5>
          <p className="text-[11px]">Let's get one thing out of the way: <br />you don't norProduct Design. We sat </p>
          <form action="" className="w-full">
            <input type="email" placeholder="Enter your email address" className="w-full pl-4 h-16"/>
            <button className="block text-black bg-white mt-2 w-full p-2 text-[15px] font-[800] rounded-md">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="flex items-center justify-between mt-14">
        <Link to="/">
          <div
            className="logo flex items-center gap-[1rem]"
            onClick={() => {
              navigate("/posts");
            }}
          >
            <div className="w-[2.3rem]"><img src={Logo2white} className="w-full" alt="" /></div>
            <h3 className="text-white text-[23px] font-[600] uppercase tracking-widest">LorenzoTvBlog</h3>
          </div>
        </Link>
        <p className="text-[10px] md:text-[13px]">2022 | all rights reserved lorenzotvblog</p>
      </div>
      

      <div className="footer__scroll--box" onClick={scrollToTopHandler}>
        <FaAngleDoubleUp className="footer__scroll" />
      </div>
    </footer>
  );
};
export default Footer;
