import { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import useFetch from "../../hooks/useFetch";

const CommentItem = ({ user, comment, user_id, id: commentId }) => {
  const { fetchRequest } = useFetch();
  const [remove, setDelete] = useState(false);
  const userData = JSON.parse(localStorage.getItem("loggedInUser"));
  let isUserComment;
  if (user_id && userData._id) {
    isUserComment = userData._id === user_id;
  }
  const deleteHandler = async () => {
    const areYouSure = window.confirm(
      "Are you sure you want to delete this comment? This action cannot be undone."
    );
    if (!areYouSure) return;
    const jwt = document.cookie.split("=")[1];
    await fetchRequest({
      url: `${process.env.REACT_APP_API_BASE_URL}/comments/${commentId}`,
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    });
    window.location.reload();
  };
  return (
    <li className="comment__item">
      <div className="comment__author">{user}</div>
      <div className="comment__text">{comment}</div>
      {isUserComment && (
        <div className="comment__cta">
          <div className="post__details--iconbox">
            {remove && <p className="post__details--iconname">Delete</p>}
            <AiOutlineDelete
              className="post__details--icon post__details--icon__3"
              onMouseEnter={() => setDelete(true)}
              onMouseLeave={() => setDelete(false)}
              onClick={deleteHandler}
            />
          </div>
        </div>
      )}
    </li>
  );
};
export default CommentItem;
