import styles from "./index.module.css";

const ButtonsBox = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default ButtonsBox;
