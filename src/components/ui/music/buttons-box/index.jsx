import styles from "./index.module.css";

export const ButtonsBox = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};
