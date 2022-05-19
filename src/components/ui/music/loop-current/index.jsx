import styles from "./index.module.css";
import { Image } from "@chakra-ui/react";

const LoopCurrent = (props) => {
  return (
    <Image
      className={styles.loop_current}
      width="26px"
      height="26px"
      src={props.src}
      onClick={props.onClick}
      _hover={{
        cursor: "pointer",
        transform: "scale(1.2)",
      }}
      alt="loop"
    />
  );
};

export default LoopCurrent;
