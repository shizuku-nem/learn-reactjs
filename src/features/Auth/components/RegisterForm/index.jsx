import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputField from "components/form-controls/InputField";
import { Avatar, Typography, makeStyles, Button } from "@material-ui/core";
import { LockOutlined } from "@material-ui/icons";
import PasswordField from "components/form-controls/PasswordField";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(3),
  },
  avatar: {
    margin: "0 auto",
    backgroundColor: theme.palette.secondary.main,
  },
  title: {
    margin: theme.spacing(2, 0, 4, 0),
    textAlign: "center",
  },
  submit: {
    margin: theme.spacing(3, 0, 2, 0),
  },
}));

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

function RegisterForm(props) {
  const classes = useStyles();

  const schema = yup
    .object()
    .shape({
      fullName: yup
        .string()
        .required("Please enter full name")
        .test(
          "Should have at least two words",
          "Please enter at least two words",
          (value) => {
            return value.split(" ").length >= 2;
          }
        ),
      email: yup
        .string()
        .required("Please enter email")
        .email("Please enter email address"),
      password: yup
        .string()
        .required("Please enter password")
        .min(6, "Please enter min 6 characters."),
      retypePassword: yup
        .string()
        .required("Please enter retype password")
        .oneOf([yup.ref("password")], "Password does not match."),
    })
    .required();

  const form = useForm({
    defaultValues: {
      title: "",
      fullName: "",
      email: "",
      password: "",
      retypePassword: "",
    },
    resolver: yupResolver(schema),
  });

  const handleSubmitForm = (values) => {
    const { onSubmit } = props;
    if (onSubmit) {
      onSubmit(values);
    }
    form.reset();
  };

  return (
    <div className={classes.root}>
      <Avatar className={classes.avatar}>
        <LockOutlined />
      </Avatar>
      <Typography className={classes.title} component="h3" variant="h5">
        Sign Up
      </Typography>
      <form onSubmit={form.handleSubmit(handleSubmitForm)}>
        <InputField form={form} name="fullName" label="Full Name" />
        <InputField form={form} name="email" label="Email" />
        <PasswordField form={form} name="password" label="Password" />
        <PasswordField
          form={form}
          name="retypePassword"
          label="Retype Password"
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Create account
        </Button>
      </form>
    </div>
  );
}

export default RegisterForm;
