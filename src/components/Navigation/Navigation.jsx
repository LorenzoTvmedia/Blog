import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AiOutlineEdit } from "react-icons/ai";

import logo from "../../assets/renzologo.png";
import Logo1 from '../../assets/logo1.jpeg'
import Logo2 from '../../assets/newlogo.png'
import { AppContext } from "../../store/AppContext";
import Button from "../UI/Button";
// import useFetch from "../../hooks/useFetch";
import axios from 'axios'

const Navigation = () => {
  const navigate = useNavigate();
  const { isLoggedIn, updateLoggedInState } = useContext(AppContext);

  useEffect(() => {
    // Sticky navigation
    const nav = document.querySelector("#nav");
    const header = document.querySelector(".navigation__container");

    const stickyNav = function (entries) {
      const [entry] = entries;
      if (!entry.isIntersecting) nav.classList.add(`sticky`);
      else nav.classList.remove(`sticky`);
    };

    const headerObserver = new IntersectionObserver(stickyNav, {
      root: null,
      threshold: 0,
    });

    headerObserver.observe(header);
  }, []);

  const logOutHandler = () => {
    const logout = window.confirm("Are you sure you want to logout?");
    if (!logout) return;
    document.cookie = `jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    updateLoggedInState(false);
    localStorage.setItem("loggedInUser", JSON.stringify({}));
    navigate("/posts");
  };
  

  return (
    <header className="navigation__container" id="header">
      <nav className="main__header" id="nav">
        <Link to="/">
          <div
            className="logo"
            onClick={() => {
              navigate("/posts");
            }}
          >
            <div><img className="" src={Logo2} alt="Lorenzo Tv" /></div>
            <h3 className="text-[#8C0202]na">LorenzoTvBlog</h3>
          </div>
        </Link>
        <ul className="links">
          {isLoggedIn ? (
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
                <Link to="/myposts" className="signup">Home</Link>
              </li>
              {/* <li>
                <Link to="/myposts/addpost">Blog</Link>
              </li> */}
              <li className="signuplist">
                <Link to="/founderseries" className="signup">Founder's Series</Link>
              </li>
              <li className="signuplist">
                <Link to="/aboutus" className="signup">About us</Link>
              </li>
              <li className="signuplist">
                <Link style={{display:'flex', alignItems:'center'}} to="/myposts/addpost" className="signup"><AiOutlineEdit /> Write</Link>
              </li>
              <li className="flex items-center">
                <span className="flex items-center">
                  <img src="" alt="" />
                  <p>Kabir yousuf</p>
                </span>
                <Button
                  type="button"
                  className="button button__nav text-[1.3rem] bg-white text-red-600 font-[600] rounded-md px-4"
                  onClick={logOutHandler}
                >
                  Logout
                </Button>
              </li>
            </ul>
          ) : (
            <>
              <li className="relative signuplist">
                <Link to="/login" className="signup" style={{color: "black"}}>Log in</Link>
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
