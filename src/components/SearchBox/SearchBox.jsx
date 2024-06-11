import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { useId } from "react";
import { selectNameFilter } from "../../redux/selectors";
import { setStatusFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const finedId = useId();
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);
  const handleChange = (event) => {
    dispatch(setStatusFilter(event.target.value));
  };
  return (
    <div className={css.searchBox_container}>
      <label htmlFor={finedId}>Find contacts by name</label>
      <input
        className={css.filter_input}
        id={finedId}
        type="text"
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
};
export default SearchBox;
