import styles from "./index.css";

export const Previous = ({ src, onClick }) => {
  return <img className={styles.previous} src={src} onClick={onClick} />;
};
