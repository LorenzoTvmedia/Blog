import React, { useCallback, useEffect, useState } from "react";

import jwt from "jwt-decode";

export const AppContext = React.createContext({
  isLoggedIn: false,
  user: {},
  postsPerPage: [],
  totalPosts: 0,
  updateLoggedInState: (data) => {},
  updatePostsPerPage: (posts) => {},
  updateTotalPosts: (posts) => {},
});

const AppContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLogggedIn] = useState(false);
  const [totalPosts, setTotalPosts] = useState(0);
  const [postsPerPage, setPostsPerPage] = useState([]);

  useEffect(() => {
    const token = document.cookie.split("=")[1];
    if (token) {
      try {
        const decoded = jwt(token);
        const currentDate = new Date();
        if (decoded.exp * 1000 > currentDate.getTime() && decoded.user) {
          setIsLogggedIn(true);
        } else {
          setIsLogggedIn(false);
        }
      } catch (error) {
        console.log(error);
        setIsLogggedIn(false);
      }
    } else {
      setIsLogggedIn(false);
    }
  }, [setIsLogggedIn]);

  const updateLoggedInState = useCallback((data) => {
    setIsLogggedIn(data);
  }, []);

  const updatePostsPerPage = useCallback((posts) => {
    setPostsPerPage(posts);
  }, []);

  const updateTotalPosts = useCallback((totalPosts) => {
    setTotalPosts(totalPosts);
  }, []);

  const data = {
    isLoggedIn,
    postsPerPage,
    totalPosts,
    updateTotalPosts,
    updateLoggedInState,
    updatePostsPerPage,
  };
  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
};
export default AppContextProvider;
