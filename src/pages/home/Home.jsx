import Navigation from "../../components/Navigation/Navigation";
import AllPosts from "../../components/AllPosts";
import { useCallback, useContext, useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { AppContext } from "../../store/AppContext";
import Footer from "../../components/Footer/Footer";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const currPage = queryParams.get("page");
  const title = queryParams.get("query");
  const category = queryParams.get("category");
  const [page, setPage] = useState(currPage ? +currPage : 1);
  const { isLoading, error, fetchRequest: fetchPosts, clearError } = useFetch();
  const { updateTotalPosts, updatePostsPerPage } = useContext(AppContext);

  const handlePageChange = function (page) {
    setPage(page);
  };

  const handlePagePosts = useCallback(
    function (page) {
      const getUserPosts = (responseBody) => {
        updateTotalPosts(responseBody.results);
        updatePostsPerPage(responseBody.data.blogs);
      };

      const jwt = document.cookie.split("=")[1];
      const urlObj = new URL(
        `${process.env.REACT_APP_API_BASE_URL}/blogs?limit=2&page=${page}`
      );
      if (title) {
        urlObj.searchParams.append("title", title);
      }
      if (category && category !== "All") {
        urlObj.searchParams.append("tags", category);
      }
      fetchPosts(
        {
          url: urlObj.toString(),
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        },
        getUserPosts
      );
    },
    [updatePostsPerPage, updateTotalPosts, fetchPosts, category, title]
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
        title="All Posts"
        page={page}
        onPageChange={handlePageChange}
        clearError={clearError}
      />
      <Footer />
    </>
  );
};
export default Home;
