import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { ValidatePassword, ValidateEmail } from "../../lib/Validations";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Input from "./LoginInput";
import Button from "../../components/UI/Button";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import { AppContext } from "../../store/AppContext";

import classes from "./LoginForm.module.css";

import Line2 from '../../assets/Line 2.png'
import Google from '../../assets/google.png'
import Apple from '../../assets/apple.png'
import Facebook from '../../assets/facebook.png'
// import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
const Form = ({ onSubmit, error, isLoading, success }) => {
  const navigate = useNavigate();
  const { updateLoggedInState } = useContext(AppContext);
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
    emailIsValid: false,
    passwordIsValid: false,
    emailIsFocus: false,
    passwordIsFocus: false,
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
    toast.success("Login successful. Redirecting to blog....", {
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
      updateLoggedInState(true);
      navigate("/posts");
    }, 2000);
  }

  const formIsValid = form.emailIsValid && form.passwordIsValid;

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

  const submitHandler = (event) => {
    event.preventDefault();
    const { emailIsValid, passwordIsValid } = form;
    if (!emailIsValid || !passwordIsValid) return;

    // Send form details to parent component
    onSubmit({
      email: form.email,
      password: form.password,
    });
  };

  return (
    <form className='w-full' onSubmit={submitHandler}>
       <label htmlFor="" className="text-[20px] font-[700]">Email</label>
      <Input
        id="email"
        label="Email"
        type="text"
        invalid={!form.emailIsValid && form.emailIsFocus ? "invalid" : ""}
        placeholder="example@name.com"
        value={form.email}
        onChange={emailOnChangeHandler}
        onBlur={emailOnBlurHandler}
        className='mt-4'
      />
      {form.emailIsFocus && !form.emailIsValid && (
        <pre className={classes.invalid__input}>
          Please provide a valid email.
        </pre>
      )}
      <label htmlFor="" className="text-[20px] font-[700]">Pasword</label>
      <Input
        id="password"
        label="Password"
        type={showPassword ? "text" : "password"}
        invalid={!form.passwordIsValid && form.passwordIsFocus ? "invalid" : ""}
        placeholder="e.g, Password@1234"
        value={form.password}
        onChange={passwordOnChangeHandler}
        onBlur={passwordOnBlurHandler}
        passwordIcon={true}
        showPassword={showPassword}
        setShowPassword={setShowPassword}
        className='mt-4'
      />
      
      {form.passwordIsFocus && !form.passwordIsValid && (
        <pre className={classes.invalid__input}>
          MinLength(8), uppercase, lowercase, character, number
        </pre>
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

      <div className='flex justify-center items-center'>
        <Button
          disabled={!formIsValid}
          id="btn__submit"
          type="submit"
          className={classes.button}
        >
          LOG IN
        </Button>
      </div>
      <div className="flex flex-col space-y-4">
        <div className="flex items-center justify-center space-x-2 mt-6">
          <img src={Line2} className="w-[4rem]" alt="" />
          <p className="font-[700] text-[15px]">Or Log In With</p>
          <img src={Line2} className="w-[4rem]"  alt="" />
        </div>
        <div className="flex items-center justify-center"><p className="text-[15px] text-center font-[600] flex md:hidden lg:hidden">Join us on the journey of ideas and discovery</p></div>
        <div className="flex items-baseline justify-center space-x-6">
          <Link><img className="w-[3rem]" src={Google} alt="" /></Link>
          <Link><img className="w-[3.2rem]" src={Apple} alt="" /></Link>
          <Link><img className="w-[5.5rem]" src={Facebook} alt="" /></Link>
        </div>
      </div>
    </form>
  );
};
export default Form;
