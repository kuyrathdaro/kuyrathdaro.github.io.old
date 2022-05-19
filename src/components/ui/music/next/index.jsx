import styles from "./index.module.css";
import { Image } from "@chakra-ui/react";

const Next = (props) => {
  return (
    <Image
      className={styles.next}
      width="50px"
      height="50px"
      src={props.src}
      onClick={props.onClick}
      _hover={{
        cursor: "pointer",
        transform: "scale(1.2)",
      }}
      alt="next"
    />
  );
};

export default Next;
