import styles from "./index.module.css";

const PlaylistTemplate = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default PlaylistTemplate;
