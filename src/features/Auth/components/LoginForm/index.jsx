import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputField from "components/form-controls/InputField";
import {
  Avatar,
  Typography,
  makeStyles,
  Button,
  LinearProgress,
} from "@material-ui/core";
import { LockOutlined } from "@material-ui/icons";
import PasswordField from "components/form-controls/PasswordField";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(3),
    position: "relative",
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
  progress: {
    position: "absolute",
    left: 0,
    right: 0,
    top: theme.spacing(1),
  },
}));

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
};

function LoginForm(props) {
  const classes = useStyles();

  const schema = yup
    .object()
    .shape({
      identifier: yup
        .string()
        .required("Please enter email")
        .email("Please enter email address"),
      password: yup.string().required("Please enter password"),
    })
    .required();

  const form = useForm({
    defaultValues: {
      identifier: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const { isSubmitting } = form.formState;

  const handleSubmitForm = async (values) => {
    const { onSubmit } = props;
    if (onSubmit) {
      await onSubmit(values);
    }
    // form.reset();
  };

  return (
    <div className={classes.root}>
      {isSubmitting && <LinearProgress className={classes.progress} />}
      <Avatar className={classes.avatar}>
        <LockOutlined />
      </Avatar>
      <Typography className={classes.title} component="h3" variant="h5">
        Sign In
      </Typography>
      <form onSubmit={form.handleSubmit(handleSubmitForm)}>
        <InputField form={form} name="identifier" label="Email" />
        <PasswordField form={form} name="password" label="Password" />

        <Button
          disabled={isSubmitting}
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          size="large"
        >
          Sign In
        </Button>
      </form>
    </div>
  );
}

export default LoginForm;
