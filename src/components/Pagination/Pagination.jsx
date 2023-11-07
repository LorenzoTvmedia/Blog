import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Pagination = (props) => {
  const { totalPosts, onPageChange, page } = props;
  const postsPerPage = process.env.REACT_APP_POSTS_PER_PAGE || 2;

  const total_pages = Math.ceil(totalPosts / postsPerPage);
  console.log(page, total_pages, totalPosts, postsPerPage);

  const prevHandler = () => {
    if (page === 1) return;
    onPageChange(page - 1);
  };
  const nextHandler = () => {
    if (page === total_pages) return;
    onPageChange(page + 1);
  };

  return (
    <div className="pagination__card">
      <div className="pagination__icons--box">
        <FaAngleLeft
          onClick={prevHandler}
          className={`pagination__icons--prev ${
            page === 1 ? " not__allowed" : ""
          }`}
        />
        <p className="pagination__icons--paragraph">{page}</p>
        <FaAngleRight
          onClick={nextHandler}
          className={`pagination__icons--next ${
            page === total_pages || total_pages < 1 ? " not__allowed" : ""
          }`}
        />
      </div>
      <div className="pagination__buttons">
        {Array.from({ length: total_pages }, (_, index) => index + 1).map(
          (each) => (
            <button
              key={each}
              onClick={() => {
                onPageChange(each);
              }}
              className={`${
                page === each
                  ? "active__button pagination__btn"
                  : "pagination__btn"
              }`}
            >
              {`${each}`.padStart(2, 0)}
            </button>
          )
        )}
      </div>
    </div>
  );
};
export default Pagination;
