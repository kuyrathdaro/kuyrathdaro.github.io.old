import styles from "./index.module.css";

export const ButtonsAndVolumeBox = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};
