import { useContext } from "react";
import "react-toastify/dist/ReactToastify.css";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import Pagination from "../Pagination/Pagination";
import PostItem from "./PostItem";
import { AppContext } from "../../store/AppContext";
import Modal from "../Modal/Modal";
import { useLocation, useNavigate } from "react-router-dom";
import { Categories, Toppost, Currenttrend } from "../smallComponents/Smallcomponents";
import Firstbgimage from '../../assets/first.png'
import Secondbgimage from '../../assets/second.png'
import Heronew from '../../assets/newhero.png'

import Heroimage from '../../assets/heroImage.png'
import { Feauturedformembers, Resentblogpost, Topic, Resentpost } from "../smallComponents/Smallcomponents";
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
    <div className="posts w-full bg-blue-400">
      <Modal
        showModal={error.hasError}
        closeModal={closeModal}
        message={error.message}
      />
    </div>
  ) : (
    <div className="posts w-full p-10">
      {isLoading && !totalPosts ? <LoadingSpinner className='' type="full" /> :(
        <>
          <div className="hero my-[2rem] relative -z-50">
            <div className="w-full p-8 flex flex-col justify-center items-start absolute bottom-0">
              <p className="lg:text-[20px] text-[14px] font-sans text-white">Feautured</p>
              <p className="lg:text-[40px] md:text-[24px] text-[18px] text-white font-[800]">Founder's Series: Navigating obstacles <br /> in the founder's series</p>
              <p className="lg:text-[16px] text-[14px] font-sans text-white lg:w-[50%] md:w-[70%]">The Founder's Series is a curated collections that honors the visionaries behind a venture, showcasing their unique journeys, insights, and contributions in a compelling narrative.</p>
            </div>
          </div>
          <p className="text-[28px] font-[700] pb-4">Popular Topics</p>
          <div className="flex items-center space-x-6 topics">
            <button>All</button>
            <button>Technology</button>
            <button>Finance</button>
            <button>Entertainment</button>
            <button>Movies</button>
          </div>
          <div className="mt-12 mb-[5rem]">
            <Topic className=''/>
          </div>
          <div className="mt-[3rem]">
            <p className="text-[28px] font-[700] pb-4">Founder's Series</p>
            <div className="hero2 flex flex-col space-y-4 items-center justify-center p-10 lg:text-left text-center">
              <p className="lg:text-[36px] md:text-[29px] text-[20px] text-white font-[800] capitalize">osholola daniel  founder of go link</p>
              <p className="lg:text-[16px] text-[14px] font-sans text-white text-center lg:w-[50%] md:w-[70%]">The Founder's Series is a curated collections that honors the visionaries behind a venture, showcasing their unique journeys, insights, and contributions in a compelling narrative.</p>
            </div>
          </div>
          <div>
            <p className="text-[28px] font-[700] mt-[5rem] mb-[2rem] pb-4">Recent blog posts</p>
            <div className="mb-[]">
              <Resentpost />
            </div>
            <div className="flex items-center justify-center mt-[5rem]"><button className="bg-[#8C0202] text-white rounded-md text-[16px] font-[500] py-[.2rem] px-[2rem]">Load More</button></div>
          </div>
        </>
      )}
      {query && <p>Showing results for "{query}".</p>}
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
