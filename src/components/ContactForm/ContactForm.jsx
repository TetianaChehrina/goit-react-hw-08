import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import toast, { Toaster } from "react-hot-toast";
const ContactFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short")
    .max(50, "Too Long")
    .required("Required!"),
  number: Yup.string()
    .min(2, "Too Short")
    .max(50, "Too Long")
    .required("Required!"),
});

const ContactForm = () => {
  const id = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    values.id = nanoid();
    dispatch(addContact(values))
      .unwrap()
      .then(() =>
        toast.success("You successfully add contact!", {
          position: "top-center",
        })
      )
      .catch(() =>
        toast.error("You have not registered, please register first", {
          position: "top-centre",
        })
      );
    actions.resetForm();
  };

  return (
    <div className={css.container}>
      <Formik
        initialValues={{
          name: "",
          number: "",
        }}
        validationSchema={ContactFormSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.contact_form}>
          <div className={css.input_container}>
            <label htmlFor={`${id}-name`}>Name</label>
            <Field
              className={css.form_input}
              type="text"
              name="name"
              id={`${id}-name`}
            />
            <ErrorMessage
              className={css.form_messageError}
              name="name"
              component="span"
            />
          </div>
          <div className={css.input_container}>
            <label htmlFor={`${id}-number`}>Number</label>
            <Field
              className={css.form_input}
              type="text"
              name="number"
              id={`${id}-number`}
            />
            <ErrorMessage
              className={css.form_messageError}
              name="number"
              component="span"
            />
          </div>

          <button className={css.form_button} type="submit">
            Add contact
          </button>
          <Toaster />
        </Form>
      </Formik>
    </div>
  );
};
export default ContactForm;
