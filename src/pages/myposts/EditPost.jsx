import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Modal from "../../components/Modal/Modal";

import Navigation from "../../components/Navigation/Navigation";
import Button from "../../components/UI/Button";
import Card from "../../components/UI/Card";
import Input from "../../components/UI/Input/Input";
import useFetch from "../../hooks/useFetch";

const EditPost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [body, setBody] = useState("");
  const [categories, setCategories] = useState([]);
  const { error, fetchRequest, clearError } = useFetch();
  const navigate = useNavigate();
  function closeModal() {
    clearError();
    navigate(-1);
  }

  const { postId } = useParams();

  useEffect(() => {
    const handleResponseData = (response) => {
      console.log("🎯", response.data.blog);
      const { title, description, body, tags } = response.data.blog;
      setTitle(title);
      setDescription(description);
      setBody(body);
      setCategories(tags);
    };
    const jwt = document.cookie.split("=")[1];
    (async () => {
      await fetchRequest({
        url: `${
          import.meta.env.VITE_API_BASE_URL
        }/blogs/confirmAccess?blogId=${postId}`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt}`,
        },
      });
    })();
    (async () => {
      await fetchRequest(
        {
          url: `${import.meta.env.VITE_API_BASE_URL}/blogs/my/${postId}`,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwt}`,
          },
        },
        handleResponseData
      );
    })();
  }, [fetchRequest, postId]);

  const categoryOnChangeHandler = (e) => {
    const options = e.target.selectedOptions;
    const categories = Array.from(options);
    const selectedCategories = categories.map((category) => category.value);
    setCategories(selectedCategories);
  };

  const backHandler = () => {
    navigate(`/myposts/${postId}`);
  };
  const titleOnChangeHandler = (e) => {
    setTitle(e.target.value);
  };
  const descriptionOnChangeHandler = (e) => {
    setDescription(e.target.value);
  };
  const bodyOnChangeHandler = (e) => {
    setBody(e.target.value);
  };

  const updatePostHandler = async (e) => {
    e.preventDefault();

    const jwt = document.cookie.split("=")[1];

    await fetchRequest({
      url: `${import.meta.env.VITE_API_BASE_URL}/blogs/${postId}`,
      method: "PATCH",
      body: {
        title: title,
        body: body,
        description: description,
      },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    });

    backHandler();
  };

  return error.hasError ? (
    <Modal
      showModal={error.hasError}
      closeModal={closeModal}
      message={error.message}
    />
  ) : (
    <>
      <Navigation />
      <Card className="new__post--card">
        <form onSubmit={updatePostHandler}>
          <Input
            label="Title"
            type="text"
            placeholder="What is your article title"
            name="title"
            onChange={titleOnChangeHandler}
            value={title}
            required={true}
          />
          <Input
            label="Description"
            type="text"
            placeholder="What is your article description"
            name="description"
            onChange={descriptionOnChangeHandler}
            value={description}
            required={true}
          />
          <Input
            field="textarea"
            label="Body"
            type="text"
            placeholder="Type your post body here..."
            name="body"
            value={body}
            onChange={bodyOnChangeHandler}
            required={true}
          />

          <div className="input__group">
            <label htmlFor="categories">Select category</label>

            <select
              name="categories"
              id="categories"
              multiple
              onChange={categoryOnChangeHandler}
              value={categories}
            >
              <option value="null" disabled>
                Hold down the ctrl button to select multiple options
              </option>
              <option value="Technology">Technology</option>
              <option value="Finance">Finance</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Movies">Movies</option>
              <option value="Self-help">Self-help</option>
            </select>
          </div>

          <div className="new__post--box">
            <Button type="submit" className="new__post--button">
              Edit
            </Button>
          </div>
        </form>
      </Card>
    </>
  );
};
export default EditPost;
