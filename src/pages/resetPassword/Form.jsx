import { useState } from "react";

import { ValidatePassword } from "../../lib/Validations";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Input from "./Input";
import Button from "../../components/UI/Button";

import { FaAngleLeft } from "react-icons/fa";
import classes from "./Form.module.css";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
// import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

const checkFormValidity = (form, setForm, e = {}) => {
  const { passwordIsValid } = form;
  if (passwordIsValid && e.target.value === form.password) {
    setForm((prev) => {
      return { ...prev, formIsValid: true };
    });
  } else {
    setForm((prev) => {
      return { ...prev, formIsValid: false };
    });
  }
};

const Form = ({ onSubmit, isLoading, error, success }) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordIcon] = useState(true);
  const [form, setForm] = useState({
    password: "",
    confirmpassword: "",
    passwordIsValid: false,
    confirmpasswordIsValid: false,
    passwordIsFocus: false,
    confirmpasswordIsFocus: false,
    formIsValid: false,
  });

  if (!isLoading && error.hasError) {
    toast.warn(`Password Reset failed! - ${error.message}`, {
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
    toast.success("Password Reset Successful - redirecting to login page", {
      position: "top-right",
      autoClose: false,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: "dark",
    });
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  }

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
    checkFormValidity(form, setForm);
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
    checkFormValidity(form, setForm, e);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // Send form details to backend
    onSubmit({
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
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        id="password"
        type={showPassword ? "text" : "password"}
        invalid={!form.passwordIsValid && form.passwordIsFocus ? "invalid" : ""}
        placeholder="New Password"
        value={form.password}
        onChange={passwordOnChangeHandler}
        onBlur={passwordOnBlurHandler}
        passwordIcon={passwordIcon}
        showPassword={showPassword}
        setShowPassword={setShowPassword}
      />
      {form.passwordIsFocus && !form.passwordIsValid && (
        <pre className={classes.invalid__input}>
          MinLength(8), uppercase, lowercase, character, number
        </pre>
      )}

      <Input
        id="confirmpassword"
        type={showConfirmPassword ? "text" : "password"}
        invalid={
          !form.confirmpasswordIsValid && form.confirmpasswordIsFocus
            ? "invalid"
            : ""
        }
        placeholder="Confirm New Password"
        value={form.confirmpassword}
        onChange={confirmpasswordOnChangeHandler}
        onBlur={confirmpasswordOnBlurHandler}
        passwordIcon={passwordIcon}
        showPassword={showConfirmPassword}
        setShowPassword={setShowConfirmPassword}
      />
      {form.confirmpasswordIsFocus && !form.confirmpasswordIsValid && (
        <pre className={classes.invalid__input}>Password does not match!</pre>
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
          id="btn__submit"
          type="submit"
          disabled={!form.formIsValid}
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
