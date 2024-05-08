import React from "react";

import useFetch from "../../hooks/useFetch";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/renzologo.png";
import Form from "./Form";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const { isLoading, error, success, fetchRequest: fetchUsers } = useFetch();
  const submitHandler = async (formData) => {
    const handleRequestData = (response) => {
      console.log(response);
    };
    fetchUsers(
      {
        url: `${import.meta.env.VITE_API_BASE_URL}/auth/forgotPassword`,
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
    <div className="fixPassword">
      <nav>
        <Link to="/">
          <div
            className="appLogo"
            onClick={() => {
              navigate("/posts");
            }}
          >
            <img src={logo} alt="Lorenzo Tv" />
            <h3>Lorenzo Tv</h3>
          </div>
        </Link>
      </nav>
      <div className="action">
        <h3>Forgot Password</h3>
        <p>Enter your email address to reset your password</p>
        <Form
          onSubmit={submitHandler}
          isLoading={isLoading}
          error={error}
          success={success}
        />
      </div>
    </div>
  );
};

export default ForgotPassword;
