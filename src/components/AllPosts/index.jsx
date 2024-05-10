import { useContext } from "react";
import "react-toastify/dist/ReactToastify.css";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import Pagination from "../Pagination/Pagination";
import PostItem from "./PostItem";
import { AppContext } from "../../store/AppContext";
import Modal from "../Modal/Modal";
import { useLocation, useNavigate } from "react-router-dom";
import Heroimage from '../../assets/heroImage.png'
import './index.css'

const AllPosts = ({
  title,
  isLoading,
  error,
  onPageChange,
  page,
  clearError,
}) => {
  const locatn = useLocation();
  const queryParams = new URLSearchParams(locatn.search);
  const query = queryParams.get("query");
  const category = queryParams.get("category");
  const { totalPosts, postsPerPage } = useContext(AppContext);
  const navigate = useNavigate();
  function closeModal() {
    clearError();
    navigate(-1);
  }

  const handlePostsSearch = function (e) {
    // e.preventDefault();
  };
  const handlePostsFilterByCategory = function (e) {
    const chosenCat = e.target.value;
    const urlObj = new URL(window.location.href);
    urlObj.searchParams.set("category", chosenCat);
    const redirectUrl = urlObj.toString();
    window.location.href = redirectUrl;
  };

  return error.hasError ? (
    <div className="posts">
      <Modal
        showModal={error.hasError}
        closeModal={closeModal}
        message={error.message}
      />
    </div>
  ) : (
    <div className="posts">
      {isLoading && !totalPosts && <LoadingSpinner type="full" />}
      <div style={{padding: '2rem'}}>
        <div className="hero">
          
        </div>
        <div className="posts__search">
          <form onSubmit={handlePostsSearch}>
            <label htmlFor="categories">Search Posts</label>
            <input type="search" name="query" required />
          </form>
        </div>
        <div className="posts__query">
          <label htmlFor="categories">Filter by category:</label>
          <select
            name="categories"
            id="categories"
            onChange={handlePostsFilterByCategory}
            value={category ? category : "All"}
          >
            <option value="All">All</option>
            <option value="Technology">Technology</option>
            <option value="Finance">Finance</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Movies">Movies</option>
            <option value="Self-help">Self-help</option>
          </select>
        </div>
        {query && <p>Showing results for "{query}".</p>}
      </div>
      {postsPerPage.length ? (
        <>
          <h3 className="post-list-title">{title}</h3>

          <ul className="post-list">
            {postsPerPage.map((post, index) => (
              <PostItem key={index} post={post} />
            ))}
          </ul>
        </>
      ) : (
        <h3 className="post-list-title">No Posts</h3>
      )}
      {postsPerPage.length && (
        <Pagination
          totalPosts={totalPosts}
          onPageChange={onPageChange}
          page={page}
        />
      )}
    </div>
  );
};
export default AllPosts;
