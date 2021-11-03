import React from "react";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.components";
import "./sing-in-and-sign-up.style.scss";

const SingInAndSignUpPage = () => {
  return (
    <div className="sing-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SingInAndSignUpPage;
