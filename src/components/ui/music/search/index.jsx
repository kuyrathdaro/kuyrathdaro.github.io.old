import styles from "./index.module.css";

const Search = ({ onChange, value, placeHolder }) => {
  return (
    <div className={styles.wrapper}>
      <input
        type="text"
        className={styles.search}
        onChange={onChange}
        value={value}
        placeholder={placeHolder}
      />
    </div>
  );
};

export default Search;
