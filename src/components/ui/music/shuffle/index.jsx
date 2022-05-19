import styles from "./index.module.css";
import { Image } from "@chakra-ui/react";

const Shuffle = (props) => {
  return (
    <Image
      className={styles.shuffle}
      width="26px"
      height="26px"
      src={props.src}
      onClick={props.onClick}
      _hover={{
        cursor: "pointer",
        transform: "scale(1.2)",
      }}
      alt="shuffle"
    />
  );
};

export default Shuffle;
