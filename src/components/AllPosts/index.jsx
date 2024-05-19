import { useContext } from "react";
import "react-toastify/dist/ReactToastify.css";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import Pagination from "../Pagination/Pagination";
import PostItem from "./PostItem";
import { AppContext } from "../../store/AppContext";
import Modal from "../Modal/Modal";
import { useLocation, useNavigate } from "react-router-dom";
import { Categories, Toppost } from "../smallComponents/Smallcomponents";

import Heroimage from '../../assets/heroImage.png'
import { Feauturedformembers } from "../smallComponents/Smallcomponents";
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
      <div className="p-10">
        <div className="hero flex flex-col justify-end p-10">
          <p className="text-[20px] font-sans text-white">Feautured</p>
          <p className="text-[40px] text-white font-[500]">Founder's Series: Navigating obstacles <br /> in the founder's series</p>
          <p className="text-[20px] font-sans text-white">The Founder's Series is a curated collections that honors the visionaries behind <br /> a venture, showcasing their unique journeys, insights, and contributions in a <br /> compelling narrative.</p>
        </div>
        <div className="flex justify-between mt-12">
          <div>
              <div className="posts__search">
                <form onSubmit={handlePostsSearch}>
                  {/* <label htmlFor="categories" className="">Search Posts</label> */}
                  <input 
                  className="bg-[#fff] outline-none shadow-lg p-6 w-[200px] rounded-[100px] placeholder:text-[1.3rem]"
                  type="search" 
                  placeholder="Search post"
                  name="query" required />
                </form>
              </div>
              <div className="posts__query mt-4">
                <label htmlFor="categories" className="text-[#A1A1A1] text-[1.2rem]">Filter by category:</label>
                <select
                  className="p-2 outline-none bg-transparent border-[1px] border-[#D9D9D9] rounded-[100px] w-[140px] text-[#A1A1A1]"
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
              <div className="mt-14 flex items-center space-y-10 flex-col">
                <Categories />
                <Toppost />
              </div>
          </div>
          <div>
            <p className="text-[1.7rem] font-[500]">Featured for members</p>
          </div>
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
