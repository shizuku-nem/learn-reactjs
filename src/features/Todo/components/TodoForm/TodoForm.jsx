import React from "react";
import PropTypes from "prop-types";
// import InputField from "../../../../components/form-controls/InputField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputField from "components/form-controls/InputField";

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

function TodoForm(props) {
  const schema = yup
    .object()
    .shape({
      title: yup
        .string()
        .required("Please enter title")
        .min(5, "Title is short < 5 characters"),
    })
    .required();

  const form = useForm({
    defaultValues: {
      title: "",
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
    <form onSubmit={form.handleSubmit(handleSubmitForm)}>
      Todo Form
      <InputField form={form} name="title" label="title" />
    </form>
  );
}

export default TodoForm;
