import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@material-ui/core";
import QuantityField from "components/form-controls/QuantityField";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import * as yup from "yup";

AddToCartForm.propTypes = {
  onSubmit: PropTypes.func,
};

function AddToCartForm({ onSubmit = null }) {
  const schema = yup
    .object()
    .shape({
      quantity: yup
        .number()
        .required("Please enter a quantity")
        .min(1, "Please enter at least one.")
        .typeError("Please enter a number"),
    })
    .required();

  const form = useForm({
    defaultValues: {
      quantity: 1,
    },
    resolver: yupResolver(schema),
  });

  const handleSubmitForm = async (values) => {
    if (onSubmit) {
      await onSubmit(values);
    }
  };
  return (
    <form onSubmit={form.handleSubmit(handleSubmitForm)}>
      <QuantityField form={form} name="quantity" label="Số lượng" />

      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        size="large"
        style={{ width: "250px" }}
      >
        Chọn mua
      </Button>
    </form>
  );
}

export default AddToCartForm;
