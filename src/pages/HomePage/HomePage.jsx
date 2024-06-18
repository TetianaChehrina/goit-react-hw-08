import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";
import css from "./HomePage.module.css";
import { FaAddressBook } from "react-icons/fa6";

const HomePage = () => {
  return (
    <>
      <DocumentTitle>Home</DocumentTitle>
      <div className={css.container}>
        <h1 className={css.title}>
          <FaAddressBook />
          Welcome to your phone book!
        </h1>
      </div>
    </>
  );
};
export default HomePage;
