import { useContext, useRef } from "react";
import Button from "../UI/Button";
import Input from "../UI/Input/Input";
import { AppContext } from "../../store/AppContext";

const CommentBox = ({ onClose, onAdd }) => {
  const bodyRef = useRef("");
  const nameRef = useRef("");
  const { isLoggedIn } = useContext(AppContext);

  const addCommentHandler = (e) => {
    e.preventDefault();
    const comment = bodyRef.current.value;
    let fullName, userId;
    if (nameRef.current.value) {
      fullName = nameRef.current.value;
    } else {
      const userData = JSON.parse(localStorage.getItem("loggedInUser"));
      fullName = userData.firstName + userData.lastName;
      userId = userData._id;
    }
    onAdd({ fullName, comment, userId });
  };
  return (
    <form className="comment__box" onSubmit={addCommentHandler}>
      <Input
        required={true}
        type="text"
        field="textarea"
        placeholder="What is your take on the article?"
        ref={bodyRef}
      />
      <div className="comment__box--buttonbox">
        {!isLoggedIn && (
          <Input
            type="text"
            className="comment__box--input"
            placeholder="What is your full name?"
            ref={nameRef}
            required={true}
          />
        )}
        <Button
          type="button"
          onClick={onClose}
          className="comment__box--button"
        >
          Close
        </Button>
        <Button type="submit" className="comment__box--button">
          Add
        </Button>
      </div>
    </form>
  );
};
export default CommentBox;
