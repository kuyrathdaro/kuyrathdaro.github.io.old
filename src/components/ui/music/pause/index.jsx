import styles from "./index.module.css";
import { Image } from "@chakra-ui/react";

const Pause = (props) => {
  return (
    <Image
      className={styles.pause}
      width="60px"
      height="60px"
      src={props.src}
      onClick={props.onClick}
      _hover={{
        cursor: "pointer",
        transform: "scale(1.2)",
      }}
      alt="pause"
    />
  );
};

export default Pause;
