import styles from "./index.module.css";

export const Pause = ({ src, onClick }) => {
  return <img className={styles.pause} src={src} onClick={onClick} />;
};
