import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Comments from "../../components/Comments";
import CommentBox from "../../components/Comments/CommentBox";
import { BsPersonCircle } from "react-icons/bs";
import {
  AiOutlineEdit,
  AiOutlineDelete,
  AiOutlineComment,
} from "react-icons/ai";
import { BsArrow90DegLeft } from "react-icons/bs";
import Footer from "../../components/Footer/Footer";
import Navigation from "../../components/Navigation/Navigation";
// import { AppContext } from "../../store/AppContext";
import useFetch from "../../hooks/useFetch";
import { convertDate } from "../../helpers";

const PostDetails = () => {
  const { fetchRequest } = useFetch();

  const { pathname } = useLocation();
  const navigate = useNavigate();
  const params = useParams();

  const postId = params.postId;

  const [isAuthor, setIsAuthor] = useState(false);
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [post, setPost] = useState({});
  const [comment, setComment] = useState(false);
  const [remove, setDelete] = useState(false);
  const [edit, setEdit] = useState(false);

  const [comments, setComments] = useState([]);

  // const { userPosts, allPosts } = useContext(AppContext);
  const lastIndex = pathname?.lastIndexOf("/");
  const path = pathname?.slice(0, lastIndex);
  const postType = pathname.split("/")[1];
  // const selectedPosts = path === "/myposts" ? userPosts : allPosts;
  const backHandler = () => {
    navigate(path);
  };

  const closeCommentBox = () => {
    setShowCommentBox(false);
  };

  const editHandler = () => {
    navigate(`${pathname}/edit`);
  };
  const deleteHandler = async () => {
    const areYouSure = window.confirm(
      "Are you sure you want to delete this post? This action cannot be undone."
    );
    if (!areYouSure) return;
    const jwt = document.cookie.split("=")[1];

    await fetchRequest({
      url: `${import.meta.env.VITE_API_BASE_URL}/blogs/${postId}`,
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    });

    backHandler();
  };

  const addCommentHandler = (input) => {
    const commentDetails = {
      comment: input.comment,
      user: input.fullName,
      blogId: postId,
      userId: input.userId,
    };
    const updateComments = (responseBody) => {
      setComments((comments) => [responseBody.data.comment, ...comments]);
      setShowCommentBox(false);
    };
    fetchRequest(
      {
        url: `${import.meta.env.VITE_API_BASE_URL}/comments`,
        method: "POST",
        body: commentDetails,
        headers: {
          "Content-Type": "application/json",
        },
      },
      updateComments
    );
  };

  useEffect(() => {
    const getPost = (res) => {
      const blog = res.data.blog;
      setPost(blog);
      const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
      setIsAuthor(loggedInUser._id === blog.author_id._id);
    };
    const jwt = document.cookie.split("=")[1];

    fetchRequest(
      {
        url: `${import.meta.env.VITE_API_BASE_URL}/blogs${
          postType === "myposts" ? "/my/" : "/"
        }${postId}`,
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      },
      getPost
    );
  }, [fetchRequest, postId, postType]);
  useEffect(() => {
    const getComments = (responseBody) => {
      const data = responseBody?.data;
      setComments(data?.comments);
    };
    fetchRequest(
      {
        url: `${import.meta.env.VITE_API_BASE_URL}/comments?blogId=${postId}`,
        method: "GET",
      },
      getComments
    );
  }, [fetchRequest, postId]);

  return (
    <>
      <Navigation />
      <section className="post__details">
        <div className="post__details--backiconbox">
          <BsArrow90DegLeft
            className="post__details--backicon"
            onClick={backHandler}
          />
        </div>
        <div className="post__body">
          <div className="post__details--header">
            <BsPersonCircle className="post__details--img" />
            <h3 className="post__details--h3">
              <span>Author: {post.author}</span>
              <span>{convertDate(post.createdAt)}</span>
            </h3>
          </div>
          <h1 className="post__details--h1">{post?.title}</h1>
          <article className="post__details--article">{post?.body}</article>
          <div>
            {post?.tags?.map((tag, i) => (
              <span key={i}>| {tag} |</span>
            ))}
          </div>
          <p>{post.formattedReadingTime}</p>
          <div className="post__details--footer">
            <div
              onClick={() => setShowCommentBox(true)}
              className="post__details--iconbox"
            >
              {comment && <p className="post__details--iconname">Comment</p>}
              <AiOutlineComment
                className="post__details--icon post__details--icon__1"
                onMouseEnter={() => setComment(true)}
                onMouseLeave={() => setComment(false)}
              />
            </div>
            {isAuthor && (
              <>
                <div className="post__details--iconbox">
                  {" "}
                  {edit && <p className="post__details--iconname">Edit</p>}
                  <AiOutlineEdit
                    className="post__details--icon post__details--icon__2"
                    onMouseEnter={() => setEdit(true)}
                    onMouseLeave={() => setEdit(false)}
                    onClick={editHandler}
                  />
                </div>
                <div className="post__details--iconbox">
                  {remove && <p className="post__details--iconname">Delete</p>}
                  <AiOutlineDelete
                    className="post__details--icon post__details--icon__3"
                    onMouseEnter={() => setDelete(true)}
                    onMouseLeave={() => setDelete(false)}
                    onClick={deleteHandler}
                  />
                </div>
              </>
            )}
          </div>
        </div>
        {showCommentBox && (
          <div className="post__comment--box">
            <CommentBox onClose={closeCommentBox} onAdd={addCommentHandler} />
          </div>
        )}
        <div className="post__comment--list">
          <Comments comments={comments} />
        </div>
      </section>
      <Footer />
    </>
  );
};
export default PostDetails;
