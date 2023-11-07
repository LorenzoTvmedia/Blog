import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ValidateEmail } from "../../lib/Validations";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaAngleLeft } from "react-icons/fa";

import Input from "./Input";
import Button from "../../components/UI/Button";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

import classes from "./Form.module.css";
// import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
const Form = ({ onSubmit, error, isLoading, success }) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    emailIsValid: false,
    emailIsFocus: false,
  });

  if (!isLoading && error.hasError) {
    toast.warn(`Login failed! - ${error.message}`, {
      position: "top-right",
      autoClose: false,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: "dark",
    });
  }

  if (success && !isLoading && !error.hasError) {
    toast.success(
      "Check your email inbox, a link to reset your password has been sent.",
      {
        position: "top-right",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "dark",
      }
    );
  }

  const formIsValid = form.emailIsValid;

  const emailOnChangeHandler = (e) => {
    setForm((prev) => {
      return { ...prev, email: e.target.value };
    });
  };

  // Allowing the user to unfocus the input field before checking if the input field is correct.

  const emailOnBlurHandler = (e) => {
    setForm((prev) => {
      return { ...prev, emailIsFocus: true };
    });

    const isValid = ValidateEmail(form.email);
    if (isValid) {
      setForm((prev) => {
        return { ...prev, emailIsValid: true };
      });
    } else {
      setForm((prev) => {
        return { ...prev, emailIsValid: false };
      });
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const { emailIsValid } = form;
    if (!emailIsValid) return;

    // Send form details to parent component
    onSubmit({
      email: form.email,
    });
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        id="email"
        label="Email"
        type="text"
        invalid={!form.emailIsValid && form.emailIsFocus ? "invalid" : ""}
        placeholder="example@name.com"
        value={form.email}
        onChange={emailOnChangeHandler}
        onBlur={emailOnBlurHandler}
      />
      {form.emailIsFocus && !form.emailIsValid && (
        <pre className={classes.invalid__input}>Please enter a valid email</pre>
      )}

      <div>
        {isLoading && <LoadingSpinner />}
        {!isLoading && error.hasError && (
          <ToastContainer
            position="top-right"
            autoClose={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable={false}
            theme="dark"
          />
        )}
        {success && (
          <ToastContainer
            position="top-right"
            autoClose={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable={false}
            theme="dark"
          />
        )}
      </div>

      <div className={classes.btn__box}>
        <Button
          disabled={!formIsValid}
          id="btn__submit"
          type="submit"
          className={classes.button}
        >
          Reset Password
        </Button>
        <Button
          className={classes.btn}
          type="button"
          onClick={() => {
            navigate("/login");
          }}
        >
          <FaAngleLeft /> Back to Login Page
        </Button>
      </div>
    </form>
  );
};
export default Form;
