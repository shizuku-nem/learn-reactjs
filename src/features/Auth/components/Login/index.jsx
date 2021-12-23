import { login } from "features/Auth/userSlice";
import { useSnackbar } from "notistack";
import PropTypes from "prop-types";
import React from "react";
import { useDispatch } from "react-redux";
import LoginForm from "../LoginForm";

Login.propTypes = {
  closeDialog: PropTypes.func,
};

function Login(props) {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (values) => {
    try {
      const action = login(values);
      await dispatch(action);
      // const resultAction = await dispatch(action);
      // const user = unwrapResult(resultAction);

      // close dialog
      const { closeDialog } = props;
      if (closeDialog) {
        closeDialog();
      }
      // enqueueSnackbar("Success Login", { variant: "success" });
    } catch (error) {
      console.log("Failed to Login:", error);
      enqueueSnackbar(error.message, { variant: "error" });
    }
  };

  return (
    <div>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Login;
