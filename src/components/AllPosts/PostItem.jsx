import { Link, useLocation, useNavigate } from "react-router-dom";
import { convertDate } from "../../helpers";

import useFetch from "../../hooks/useFetch";

const PostItem = ({ post }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { fetchRequest } = useFetch();

  const formattedDate = convertDate(post.createdAt);

  const publishPostHandler = async () => {
    const areYouSure = window.confirm(
      "Are you sure you want to publish this draft? Once published, the changes will be live and visible to all readers."
    );
    if (!areYouSure) return;
    const jwt = document.cookie.split("=")[1];

    await fetchRequest({
      url: `${import.meta.env.VITE_API_BASE_URL}/blogs/${post._id}`,
      method: "PATCH",
      body: {
        state: "published",
      },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    });

    navigate("/posts");
  };

  return (
    <li>
      <Link to={`${pathname}/` + post._id} className="post-link">
        <h2 className="post-title">{post.title}</h2>
        <p className="post-info">
          Author: {post.author}
          <span>|</span>
          {formattedDate}
        </p>
        <p className="post-body">{post.description}</p>
        <div>
          {post?.tags?.map((tag, i) => (
            <span key={i}>| {tag} |</span>
          ))}
        </div>
        <p>{post.formattedReadingTime}</p>
      </Link>
      {post.state === "draft" && (
        <button onClick={publishPostHandler}>Publish Post</button>
      )}
    </li>
  );
};
export default PostItem;
