import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AiOutlineEdit } from "react-icons/ai";

import logo from "../../assets/renzologo.png";
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
            <img src={logo} alt="Lorenzo Tv" />
            <h3>Lorenzo Tv</h3>
          </div>
        </Link>
        <ul className="links">
          {isLoggedIn ? (
            <>
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
              <li>
                <Link to="/myposts">Home</Link>
              </li>
              <li>
                <Link to="/myposts/addpost">Blog</Link>
              </li>
              <li>
                <Link to="/founderseries">Founder's Series</Link>
              </li>
              <li>
                <Link to="/aboutus">About us</Link>
              </li>
              <li>
                <Link to="/myposts/addpost">Pages</Link>
              </li>
              <li>
                <Link style={{display:'flex', alignItems:'center'}} to="/myposts/addpost"><AiOutlineEdit /> Write</Link>
              </li>
              <li>
                <Button
                  type="button"
                  className="button button__nav"
                  onClick={logOutHandler}
                >
                  Logout
                </Button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/signup">Sign up free</Link>
              </li>
              <li>
                <Link to="/login">Log in</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
