import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdPermMedia } from "react-icons/md";

import Navigation from "../../components/Navigation/Navigation";
import Button from "../../components/UI/Button";
import Card from "../../components/UI/Card";
import Input from "../../components/UI/Input/Input";
import useFetch from "../../hooks/useFetch";


import { MdPublish } from "react-icons/md";
import { SlEye } from "react-icons/sl";
import { IoPinSharp } from "react-icons/io5";
import { TiPin } from "react-icons/ti";
import { CgFileDocument } from "react-icons/cg";
import { FaImage } from "react-icons/fa6";
import { GoVideo } from "react-icons/go";
import { GoLink } from "react-icons/go";


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
        url: `${import.meta.env.VITE_API_BASE_URL}/blogs`,
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
      <div className="px-[3.5rem] pt-8">
        <p className="text-[3.5rem] font-[500]">Add New Post</p>
        <button className="text-[1.2rem] bg-white font-[500] flex items-center gap-[.7rem] rounded-xl p-2"><span><MdPermMedia /></span>Add Media</button>
      </div>
      <div className="w-full p-[3.5rem] flex space-x-12">
        <div className="w-[70%]">
          <Card className="">
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
        </div>
        <div className="w-[35%] flex flex-col space-y-10">
          <div className="w-full bg-white">
            <p className="p-6 border-b-[.1rem] border-[#ccc] text-[1.3rem] font-[700]">Publish</p>
            <div className="p-6 flex items-center justify-between"><button className="bg-[#ccc] text-[1.2rem] rounded-lg py-2 px-6">Save Draft</button> <button className="bg-[#ccc] text-[1.2rem] rounded-lg py-2 px-6">Preview</button></div>
            <div className="px-6 py-2 flex flex-col space-y-4">
              <div className="flex items-center space-x-1"><IoPinSharp className="text-[1.5rem]"/> <span className="text-[1.2rem] text-[#aaa]">Visibility:</span> <span className="text-[1.2rem]">Publish</span> <button className="text-[1.2rem] text-blue-500 underline">Edit</button></div>
              <div className="flex items-center space-x-1"><SlEye className="text-[1.5rem]"/> <span className="text-[1.2rem] text-[#aaa]">Visibility:</span> <span className="text-[1.2rem]">Publish</span> <button className="text-[1.2rem] text-blue-500 underline">Edit</button></div>
              <div className="flex items-center space-x-1"><MdPublish className="text-[1.5rem]"/> <span className="text-[1.2rem] text-[#aaa]">Visibility:</span> <span className="text-[1.2rem]">Publish</span> <button className="text-[1.2rem] text-blue-500 underline">Edit</button></div>
              <div className="flex items-center justify-between p-6">
                <button className="text-[1.5rem] text-red-500 underline">Move to Trash</button>
                <button className="bg-[#4426FF] py-2 px-8 text-[1.4rem] font-[500] text-white rounded-lg">Publish</button>
              </div>
            </div>
          </div>
          <div className="w-full bg-white">
            <p className="p-6 border-b-[.1rem] border-[#ccc] text-[1.3rem] font-[700]">Format</p>
            <ul className="p-6 flex flex-col space-y-4">
              <li className="flex items-center gap-[2rem] text-[13px] font-[500]"><span className="flex items-center space-x-2"><input type="radio" /> <TiPin className="text-[1.4rem]"/></span> Standard</li>
              <li className="flex items-center gap-[2rem] text-[13px] font-[500]"><span className="flex items-center space-x-2"><input type="radio" /> <CgFileDocument className="text-[1.4rem]"/></span> Aside</li>
              <li className="flex items-center gap-[2rem] text-[13px] font-[500]"><span className="flex items-center space-x-2"><input type="radio" /> <FaImage className="text-[1.4rem]"/></span> Image</li>
              <li className="flex items-center gap-[2rem] text-[13px] font-[500]"><span className="flex items-center space-x-2"><input type="radio" /> <GoVideo className="text-[1.4rem]"/></span> Video</li>
              <li className="flex items-center gap-[2rem] text-[13px] font-[500]"><span className="flex items-center space-x-2"><input type="radio" /> <GoLink className="text-[1.4rem]"/></span> Link</li>
            </ul>
          </div>
          <div className="w-full bg-white">
            <p className="p-6 border-b-[.1rem] border-[#ccc] text-[1.3rem] font-[700]">Format</p>
            <ul className="p-6 flex items-center gap-6">
              <li  className="text-[1.2rem]"><a href="">All Categories</a></li>
              <li  className="text-[1.2rem]"><a href="">Most Used</a></li>
            </ul>
            <ul className="p-6 flex flex-col space-y-4">
              <li className="flex items-center gap-[1rem] text-[13px] font-[500]"><input type="checkbox" /> Standard</li>
              <li className="flex items-center gap-[1rem] text-[13px] font-[500]"><input type="checkbox" /> Aside</li>
              <li className="flex items-center gap-[1rem] text-[13px] font-[500]"><input type="checkbox" /> Image</li>
              <li className="flex items-center gap-[1rem] text-[13px] font-[500]"><input type="checkbox" /> Video</li>
              <li className="flex items-center gap-[1rem] text-[13px] font-[500]"><input type="checkbox" /> Link</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddNewPost;
