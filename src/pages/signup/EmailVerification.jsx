import React, { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { useNavigate, useParams } from "react-router-dom";
import Modal from "../../components/Modal/Modal";

const EmailVerification = () => {
  const { isLoading, error, success, fetchRequest } = useFetch();
  const params = useParams();
  const navigate = useNavigate();

  const emailVerificationToken = params.token;

  function closeModal() {
    navigate("/signup");
  }

  useEffect(() => {
    const payload = { emailVerificationToken: emailVerificationToken };
    fetchRequest({
      url: `${process.env.REACT_APP_API_BASE_URL}/auth/verifyEmail`,
      method: "POST",
      body: payload,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }, [emailVerificationToken, fetchRequest]);
  let message;
  if (isLoading) {
    message = "Please hold on, email verification in progress...";
  } else if (!isLoading && error.hasError) {
    message = error.message;
  } else if (success) {
    message = "Email verification successful. Redirecting to signin...";
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  }
  return <Modal showModal={true} closeModal={closeModal} message={message} />;
};

export default EmailVerification;
