import { Link, Outlet, useNavigate } from "react-router-dom";
import lorenzoTvImg from "../../assets/lorenzoTVImg.png";
import useFetch from "../../hooks/useFetch";

import Form from "./Form";
import classes from "./SignUp.module.css";
import logo from "../../assets/renzologo.png";

const SignUp = () => {
  const navigate = useNavigate();
  const {
    isLoading,
    error,
    success,
    fetchRequest: fetchUsers,
    clearError,
  } = useFetch();
  if (error.hasError) {
    setTimeout(() => {
      clearError();
    }, 2000);
  }
  const signUpHandler = async (formData) => {
    await fetchUsers({
      url: `${import.meta.env.VITE_API_BASE_URL}/auth/signup`,
      method: "POST",
      body: formData,
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <>
      <Outlet />
      <div className={classes.signup}>
        <div className={classes.bg}>
          <Link to="/">
            <div
              className={classes.logo}
              onClick={() => {
                navigate("/posts");
              }}
            >
              <img src={logo} alt="Lorenzo Tv" />
              <h3>Lorenzo Tv</h3>
            </div>
          </Link>
          <img src={lorenzoTvImg} alt="lorenzoTV img" />
        </div>
        <div className={classes.formBg}>
          <div className={classes.text}>
            <h1>Sign Up</h1>
            <h2>Welcome lets get to know you</h2>
          </div>
          <Form
            onSubmit={signUpHandler}
            isLoading={isLoading}
            error={error}
            success={success}
          />
          <p className={classes.p}>
            Already have an account?
            <Link to="/login" className={classes.a}>
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUp;
