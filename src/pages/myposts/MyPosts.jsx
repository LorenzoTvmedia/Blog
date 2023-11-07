import Navigation from "../../components/Navigation/Navigation";
import AllPosts from "../../components/AllPosts";
import Footer from "../../components/Footer/Footer";
import { useLocation } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useCallback, useContext, useEffect, useState } from "react";
import { AppContext } from "../../store/AppContext";

const MyPosts = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const currPage = queryParams.get("page");
  const [page, setPage] = useState(currPage ? +currPage : 1);

  const {
    isLoading,
    error,
    fetchRequest: fetchUserPosts,
    clearError,
  } = useFetch();
  const { updatePostsPerPage, updateTotalPosts } = useContext(AppContext);

  const handlePageChange = function (page) {
    setPage(page);
  };

  const handlePagePosts = useCallback(
    function (page) {
      const getUserPosts = (responseBody) => {
        console.log(responseBody.results);
        updateTotalPosts(responseBody.results);
        updatePostsPerPage(responseBody.data.blogs);
      };

      const jwt = document.cookie.split("=")[1];
      fetchUserPosts(
        {
          url: `${process.env.REACT_APP_API_BASE_URL}/blogs/my?limit=2&page=${page}`,
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        },
        getUserPosts
      );
    },
    [updatePostsPerPage, updateTotalPosts, fetchUserPosts]
  );

  useEffect(() => {
    handlePagePosts(page);
  }, [handlePagePosts, page]);

  return (
    <>
      <Navigation />
      <AllPosts
        isLoading={isLoading}
        error={error}
        title="My Posts"
        page={page}
        onPageChange={handlePageChange}
        clearError={clearError}
      />
      <Footer />
    </>
  );
};
export default MyPosts;
