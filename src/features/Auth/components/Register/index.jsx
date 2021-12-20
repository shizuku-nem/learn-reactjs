import { unwrapResult } from "@reduxjs/toolkit";
import {register} from "features/Auth/userSlice";
import React from "react";
import { useDispatch } from "react-redux";
import RegisterForm from "../RegisterForm";

Register.propTypes = {};

function Register(props) {
  const dispatch = useDispatch();
  const handleSubmit = async (values) => {
    try {
      // auto set username = email (follow api)
      values.username = values.email;

      const action = register(values);
      const resultAction = await dispatch(action);
      const user = unwrapResult(resultAction);
      console.log("🚀 new user", user);
    } catch (error) {
      console.log("🚀 error handleSubmit in RegisterForm:", error);
    }
  };

  return (
    <div>
      <RegisterForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Register;
