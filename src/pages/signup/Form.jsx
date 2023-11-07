import { useState } from "react";

import { ValidatePassword, ValidateEmail } from "../../lib/Validations";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Input from "../login/LoginInput";
import Button from "../../components/UI/Button";

import classes from "./SignUpForm.module.css";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
// import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

const Form = ({ onSubmit, isLoading, error, success }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
    firstnameIsValid: false,
    lastnameIsValid: false,
    emailIsValid: false,
    passwordIsValid: false,
    confirmpasswordIsValid: false,
    firstnameIsFocus: false,
    lastnameIsFocus: false,
    emailIsFocus: false,
    confirmpasswordIsFocus: false,
    formIsValid: false,
  });
  const {
    firstnameIsValid,
    lastnameIsValid,
    emailIsValid,
    passwordIsValid,
    confirmpasswordIsValid,
  } = form;
  const formIsValid =
    firstnameIsValid &&
    lastnameIsValid &&
    emailIsValid &&
    passwordIsValid &&
    confirmpasswordIsValid;

  if (!isLoading && error.hasError) {
    toast.warn(`Sign up failed! - ${error.message}`, {
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
  if (success) {
    toast.success(
      `Almost done, ${form.firstname}. A verification email has been sent to the email address provided.`,
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

  const firstnameOnChangeHandler = (e) => {
    setForm((prev) => {
      return { ...prev, firstname: e.target.value };
    });
  };
  const lastnameOnChangeHandler = (e) => {
    setForm((prev) => {
      return { ...prev, lastname: e.target.value };
    });
  };

  const emailOnChangeHandler = (e) => {
    setForm((prev) => {
      return { ...prev, email: e.target.value };
    });
  };

  const passwordOnChangeHandler = (e) => {
    setForm((prev) => {
      return { ...prev, password: e.target.value };
    });
  };

  const confirmpasswordOnChangeHandler = (e) => {
    setForm((prev) => {
      return { ...prev, confirmpassword: e.target.value };
    });
  };

  // Allowing the user to unfocus the input field before checking if the input field is correct.
  const firstnameOnBlurHandler = (e) => {
    setForm((prev) => {
      return { ...prev, firstnameIsFocus: true };
    });

    if (form.firstname.length >= 2) {
      setForm((prev) => {
        return { ...prev, firstnameIsValid: true };
      });
    } else {
      setForm((prev) => {
        return { ...prev, firstnameIsValid: false };
      });
    }
  };

  const lastnameOnBlurHandler = (e) => {
    setForm((prev) => {
      return { ...prev, lastnameIsFocus: true };
    });

    if (form.lastname.length >= 2) {
      setForm((prev) => {
        return { ...prev, lastnameIsValid: true };
      });
    } else {
      setForm((prev) => {
        return { ...prev, lastnameIsValid: false };
      });
    }
  };
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

  const passwordOnBlurHandler = (e) => {
    setForm((prev) => {
      return { ...prev, passwordIsFocus: true };
    });

    const isValid = ValidatePassword(form.password);
    if (isValid) {
      setForm((prev) => {
        return { ...prev, passwordIsValid: true };
      });
    } else {
      setForm((prev) => {
        return { ...prev, passwordIsValid: false };
      });
    }
  };

  const confirmpasswordOnBlurHandler = (e) => {
    setForm((prev) => {
      return { ...prev, confirmpasswordIsFocus: true };
    });

    const isValid = form.password === form.confirmpassword;
    if (isValid) {
      setForm((prev) => {
        return { ...prev, confirmpasswordIsValid: true };
      });
    } else {
      setForm((prev) => {
        return { ...prev, confirmpasswordIsValid: false };
      });
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // Send form details to backend
    onSubmit({
      firstName: form.firstname,
      lastName: form.lastname,
      email: form.email,
      password: form.password,
      confirmPassword: form.confirmpassword,
    });

    // Clearing the input fields
    // setForm({
    //   firstname: "",
    //   lastname: "",
    //   email: "",
    //   password: "",
    //   confirmpassword: "",
    //   firstnameIsValid: false,
    //   lastnameIsValid: false,
    //   emailIsValid: false,
    //   passwordIsValid: false,
    //   confirmpasswordIsValid: false,
    //   firstnameIsFocus: false,
    //   lastnameIsFocus: false,
    //   emailIsFocus: false,
    //   confirmpasswordIsFocus: false,
    //   formIsValid: false,
    // });
  };

  return (
    <form className={classes.auth__form} onSubmit={submitHandler}>
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <Input
            id="firstname"
            type="text"
            invalid={
              !form.firstnameIsValid && form.firstnameIsFocus ? "invalid" : ""
            }
            placeholder="First Name"
            value={form.firstname}
            onChange={firstnameOnChangeHandler}
            onBlur={firstnameOnBlurHandler}
          />
          {form.firstnameIsFocus && !form.firstnameIsValid && (
            <pre className={classes.invalid__input}>
              Please provide a first name that consists of at least two
              characters.
            </pre>
          )}
        </div>
        <div className="col-md-6 col-sm-12">
          <Input
            id="lastname"
            type="text"
            invalid={
              !form.lastnameIsValid && form.lastnameIsFocus ? "invalid" : ""
            }
            placeholder="Last Name"
            value={form.lastname}
            onChange={lastnameOnChangeHandler}
            onBlur={lastnameOnBlurHandler}
          />
          {form.lastnameIsFocus && !form.lastnameIsValid && (
            <pre className={classes.invalid__input}>
              Please provide a last name that consists of at least two
              characters.
            </pre>
          )}
        </div>
      </div>

      <Input
        id="email"
        type="email"
        invalid={!form.emailIsValid && form.emailIsFocus ? "invalid" : ""}
        placeholder="Email Address"
        value={form.email}
        onChange={emailOnChangeHandler}
        onBlur={emailOnBlurHandler}
      />
      {form.emailIsFocus && !form.emailIsValid && (
        <pre className={classes.invalid__input}>
          Please provide a valid email.
        </pre>
      )}

      <div className="row">
        <div className="col-md-6 col-sm-12">
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            invalid={
              !form.passwordIsValid && form.passwordIsFocus ? "invalid" : ""
            }
            placeholder="Password"
            value={form.password}
            onChange={passwordOnChangeHandler}
            onBlur={passwordOnBlurHandler}
            passwordIcon={true}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
          />
          {form.passwordIsFocus && !form.passwordIsValid && (
            <pre className={classes.invalid__input}>
              Minimum length(8), uppercase, lowercase, character, number
            </pre>
          )}
        </div>

        <div className="col-md-6 col-sm-12">
          <Input
            id="confirmpassword"
            type={showConfirmPassword ? "text" : "password"}
            invalid={
              !form.confirmpasswordIsValid && form.confirmpasswordIsFocus
                ? "invalid"
                : ""
            }
            placeholder="Confirm Password"
            value={form.confirmpassword}
            onChange={confirmpasswordOnChangeHandler}
            onBlur={confirmpasswordOnBlurHandler}
            passwordIcon={true}
            showPassword={showConfirmPassword}
            setShowPassword={setShowConfirmPassword}
          />
          {form.confirmpasswordIsFocus && !form.confirmpasswordIsValid && (
            <pre className={classes.invalid__input}>
              Password does not match!
            </pre>
          )}
        </div>
      </div>
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
          id="btn__submit"
          type="submit"
          disabled={!formIsValid}
          className={classes.button}
        >
          Sign Up
        </Button>
      </div>
    </form>
  );
};
export default Form;
