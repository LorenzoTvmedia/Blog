import React from "react";

import useFetch from "../../hooks/useFetch";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/renzologo.png";
import Form from "./Form";

const ResetPassword = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");
  const { isLoading, error, success, fetchRequest: fetchUsers } = useFetch();
  const submitHandler = async (formData) => {
    const handleRequestData = (response) => {
      console.log(response);
    };
    fetchUsers(
      {
        url: `${process.env.REACT_APP_API_BASE_URL}/auth/resetPassword/${token}`,
        method: "PATCH",
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
        <h3>Reset password</h3>
        <p>Enter a strong password to reset new password</p>
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

export default ResetPassword;
