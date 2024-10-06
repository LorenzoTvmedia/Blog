import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { IoPersonCircleOutline } from "react-icons/io5";
import { LuMenuSquare } from "react-icons/lu";

import logo from "../../assets/renzologo.png";
import Logo1 from '../../assets/logo1.jpeg'
import Logo2 from '../../assets/newlogo.png'
import Logo2white from '../../assets/logo2white.png'
import { AppContext } from "../../store/AppContext";
import Button from "../UI/Button";
// import useFetch from "../../hooks/useFetch";
import axios from 'axios'

import { Sidebar } from "../smallComponents/Smallcomponents";

const Navigation = () => {
  const navigate = useNavigate();
  const { isLoggedIn, updateLoggedInState } = useContext(AppContext);

  const [ openNav, setopenNav ] = useState(false)

  // useEffect(() => {
  //   // Sticky navigation
  //   const nav = document.querySelector("#nav");
  //   const header = document.querySelector(".navigation__container");

  //   const stickyNav = function (entries) {
  //     const [entry] = entries;
  //     if (!entry.isIntersecting) nav.classList.add(`sticky`);
  //     else nav.classList.remove(`sticky`);
  //   };

  //   const headerObserver = new IntersectionObserver(stickyNav, {
  //     root: null,
  //     threshold: 0,
  //   });

  //   headerObserver.observe(header);
  // }, []);

  const logOutHandler = () => {
    const logout = window.confirm("Are you sure you want to logout?");
    if (!logout) return;
    document.cookie = `jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    updateLoggedInState(false);
    localStorage.setItem("loggedInUser", JSON.stringify({}));
    navigate("/posts");
  };
  // sticky

  return (
    <header className="navigation__container h-[7rem] flex items-center justify-center" style={{width: ''}} id="header">
      <nav className="main__header fixed top-6 md:top-0 w-[95%] md:w-full flex items-center justify-between" id="nav">
        {
          openNav && (
            <>
              <Sidebar setopenNav={setopenNav} logOutHandler={logOutHandler}/>
            </>
          )
        }
        <Link to="/">
          <div
            className="logo"
            onClick={() => {
              navigate("/posts");
            }}
          >
            <div className="w-[2.3rem]"><img className="w-full md:block hidden" src={Logo2} alt="Lorenzo Tv" /><img src={Logo2white} className="w-full md:hidden block" alt="" /></div>
            <h3 className="md:text-[#8C0202] text-white">LorenzoTvBlog</h3>
          </div>
        </Link>
        <ul className="links">
          {isLoggedIn ? (
            <>
              <div>
                <LuMenuSquare className="text-[2.7rem] cursor-pointer md:hidden block"
                  onClick={() => setopenNav(true)}
                />
              </div>
              <div className="flex items-center space-x-[2rem]">
                {/* <div> */}
                
                {/* </div> */}
                <ul className="navlinks">
                  {/* <li>
                    <NavLink
                      to="/myposts"
                      className={({ isActive }) =>
                        isActive ? "header__active" : ""
                      }
                    >
                      My Posts
                    </NavLink>
                    </li> */}
                    <li className="signuplist">
                      <Link to="/myposts" className="link">Home</Link>
                    </li>
                    {/* <li>
                      <Link to="/myposts/addpost">Blog</Link>
                    </li> */}
                    <li className="signuplist">
                      <Link to="/founderseries" className="link">Founder's Series</Link>
                    </li>
                    <li className="signuplist">
                      <Link 
                        target="_blank"
                        to="https://lorenzotvmedia.netlify.app/about" className="link">About us</Link>
                    </li>
                    <li className="signuplist">
                      <Link to="/posts/blogpost" className="link"> Blog Post</Link>
                    </li>
                    <li className="signuplist">
                      <Link to="/posts/addpost" className="link"> Write</Link>
                    </li>
                </ul>
                <div className="flex items-center space-x-[2rem]">
                  <Link to='/profile' className="">
                    <IoPersonCircleOutline className="text-[2.5rem] md:text-[#222222] text-white"/>
                  </Link>
                  <span className="flex items-center space-x-6">
                        <Button
                          type="button"
                          className="logout text-[.9rem] bg-[#8C0202] text-white font-[600] rounded-md"
                          onClick={logOutHandler}
                        >
                          Logout
                        </Button>
                  </span>
                </div>
              </div>
            </>
            
          ) : (
            <>
              <li className="relative signuplist">
                <Link to="/login" className="link login">Log in</Link>
              </li>
              <li className="relative signuplist">
                <Link to="/signup" className="bg-[#8C0202] p-[.7rem] rounded-md" style={{color: "white"}}>Sign up free </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
