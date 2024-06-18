import { useSelector } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";
import Loading from "../../components/Loading/Loading";
import SearchBox from "../../components/SearchBox/SearchBox";
import css from "./ContactsPage.module.css";
import ContactList from "../../components/ContactList/ContactList";
import { selectLoading } from "../../redux/contacts/selectors";
import { useDispatch } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import { useEffect } from "react";

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const isLoading = useSelector(selectLoading);
  return (
    <div className={css.container}>
      <DocumentTitle>Your Contacts</DocumentTitle>
      <ContactForm />
      <SearchBox />
      {isLoading && <Loading />}
      <ContactList />
    </div>
  );
};
export default ContactsPage;
