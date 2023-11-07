import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Navigation from "../../components/Navigation/Navigation";
import Button from "../../components/UI/Button";
import Card from "../../components/UI/Card";
import Input from "../../components/UI/Input/Input";
import useFetch from "../../hooks/useFetch";

const AddNewPost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [body, setBody] = useState("");
  const [categories, setCategories] = useState([]);
  const { fetchRequest: fetchPosts } = useFetch();

  const navigate = useNavigate();

  const titleOnChangeHandler = (e) => {
    setTitle(e.target.value);
  };
  const descriptionOnChangeHandler = (e) => {
    setDescription(e.target.value);
  };

  const bodyOnChangeHandler = (e) => {
    setBody(e.target.value);
  };
  const categoryOnChangeHandler = (e) => {
    const options = e.target.selectedOptions;
    const categories = Array.from(options);
    const selectedCategories = categories.map((category) => category.value);
    setCategories(selectedCategories);
  };
  const addPostHandler = async (e) => {
    e.preventDefault();
    const post = {
      body: body,
      title: title,
      description: description,
      tags: categories,
    };

    const jwt = document.cookie.split("=")[1];

    const handleResponseData = (response) => {
      navigate("/myposts");
    };

    await fetchPosts(
      {
        url: `${process.env.REACT_APP_API_BASE_URL}/blogs`,
        method: "POST",
        body: post,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt}`,
        },
      },
      handleResponseData
    );
  };

  return (
    <>
      <Navigation />
      <Card className="new__post--card">
        <form onSubmit={addPostHandler}>
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
              Save draft
            </Button>
          </div>
        </form>
      </Card>
    </>
  );
};
export default AddNewPost;
