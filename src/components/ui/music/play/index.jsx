import styles from "./index.module.css";
import { Image } from "@chakra-ui/react";

const Play = (props) => {
  return (
    <Image
      className={styles.play}
      width="60px"
      height="60px"
      src={props.src}
      onClick={props.onClick}
      _hover={{
        cursor: "pointer",
        transform: "scale(1.2)",
      }}
      alt="play"
    />
  );
};

export default Play;
