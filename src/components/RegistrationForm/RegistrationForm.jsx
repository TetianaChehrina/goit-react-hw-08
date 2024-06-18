import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import toast, { Toaster } from "react-hot-toast";

import css from "./RegistrationForm.module.css";

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, action) => {
    dispatch(register(values))
      .unwrap()
      .then(() =>
        toast.success("Registration successful!", {
          position: "top-center",
        })
      )
      .catch(() =>
        toast.error("Something went wrong!", {
          position: "top-right",
        })
      );
    action.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form className={css.form} autoComplete="off">
          <label className={css.label}>
            Username
            <Field type="text" name="name" placeholder="Enter your name..." />
          </label>
          <label className={css.label}>
            Email
            <Field
              type="email"
              name="email"
              placeholder="Enter your email..."
            />
          </label>
          <label className={css.label}>
            Password
            <Field
              type="password"
              name="password"
              placeholder="Enter your password..."
            />
          </label>
          <button type="submit">Register</button>
          <Toaster />
        </Form>
      </Formik>
    </div>
  );
};
export default RegistrationForm;
