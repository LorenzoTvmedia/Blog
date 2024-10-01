import useFetch from "../../hooks/useFetch";
import { Link, useNavigate } from "react-router-dom";

import Form from "./Form";
import logo from "../../assets/renzologo.png";
import lorenzoTvImg2 from "../../assets/lorenTvImage2.png";
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
      <div 
        className="logincon leading-[3rem] overflow-hidden flex items-center justify-between bg-[#8C0202] out"
        data-testid="login__page">
        <div className={`md:w-[100%] lg:w-[50%] hidden md:flex lg:flex flex-col justify-center items-center p-12 bg-[#8C0202] h-screen`}>
          {/* <Link to="/">
            <div
              className={classes.logo}
              onClick={() => {
                navigate("/posts");
              }}>
              <img src={logo} alt="Lorenzo Tv" />
              <h3 className="font-[600]">Lorenzo Tv</h3>
            </div>
          </Link> */}
          <div className="loginimage flex flex-col justify-center items-center space-y-[2rem]">
            <div className="lorenzo"><img src={lorenzoTvImg2} alt="lorenzoTV img" /></div>
            <div><p className="text-white text-[20px] text-center font-[700] mt-4">Join Us On The Journey Of Ideas And Discovery</p></div>
          </div>
        </div>
        <div className={`${classes.seccol} overflow-hidden h-screen w-[100%] flex flex-col justify-center items-center rounded-bl-none rounded-tl-none lg:w-[50%] lg:rounded-l-[61px] md:rounded-l-[61px]`} id="seccol">
          <div className='text-center mb-[2rem]'>
            <h1 className="font-[800] text-[35px]">Login</h1>
          </div>
          <div className="flex flex-col space-y-4">
            <Form
              onSubmit={signInHandler}
              isLoading={isLoading}
              error={error}
              success={success}
            />

            <div className="forget w-full gap-10 flex items-center justify-between">
              <p className='text-[14px] font-[500]'>
                Do not have an account?
                <Link to="/signup" style={{color: '#b91c1c'}} className='text-[#b91c1c] ml-2'>Sign Up</Link>
              </p>
              <p className='text-red-600 text-[1.4rem]'>
                <Link to="/forgotPassword" className=''>
                  Forgot password?
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
