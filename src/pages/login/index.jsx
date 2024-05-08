import useFetch from "../../hooks/useFetch";
import { Link, useNavigate } from "react-router-dom";

import Form from "./Form";
import logo from "../../assets/renzologo.png";
import lorenzoTvImg from "../../assets/lorenzoTVImg.png";
import classes from "./Login.module.css";

const Login = () => {
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

  const signInHandler = async (formData) => {
    const handleRequestData = (response) => {
      const setCookie = function (value) {
        // Calculate the cookie expiration time
        const expirationDate = new Date();
        expirationDate.setTime(
          expirationDate.getTime() + 10 * 60 * 60 * 1000 // Convert 10 hours to milliseconds
        );

        // Format the cookie string
        const cookieString = `jwt=${encodeURIComponent(
          value
        )}; expires=${expirationDate.toUTCString()}; path=/;`;

        // Set the cookie
        document.cookie = cookieString;
      };
      setCookie(response.token);
      // Store user details in LS
      localStorage.setItem("loggedInUser", JSON.stringify(response.data.user));
    };
    await fetchUsers(
      {
        url: `${import.meta.env.VITE_API_BASE_URL}/auth/signin`,
        method: "POST",
        body: formData,
        headers: {
          "Content-Type": "application/json",
        },
      },
      handleRequestData
    );
  };

  return (
    <>
      <div className={classes.login} data-testid="login__page">
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
            <h1>Login</h1>
            <h2>Welcome back, good to see you again!</h2>
          </div>
          <Form
            onSubmit={signInHandler}
            isLoading={isLoading}
            error={error}
            success={success}
          />

          <p className={classes.p}>
            Do not have an account?
            <Link to="/signup" className={classes.a}>
              Create now
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
