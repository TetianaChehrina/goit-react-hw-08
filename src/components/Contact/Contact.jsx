import { IoCallSharp } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

export default function Contact({ contact: { id, name, number } }) {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <div className={css.contact_container}>
      <div className={css.contact_name}>
        <IoPerson className={css.person_icon} size={16} />
        <span>{name}</span>
      </div>

      <div className={css.contact_number}>
        <IoCallSharp className={css.phone_icon} size={16} />
        <span>{number}</span>
      </div>

      <button className={css.contact_button_delete} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
