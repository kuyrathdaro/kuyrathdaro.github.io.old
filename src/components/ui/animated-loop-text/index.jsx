import { Center } from "@chakra-ui/react";
import { TextLoop } from "react-text-loop-next";
import { LoopText } from "../../../utils/constants";

const AnimatedLoopText = () => {
  return (
    <Center fontSize="xl">
      <TextLoop interval={3000}>
        {LoopText.map(item => (
          <span>{item}</span>
        ))}
      </TextLoop>
    </Center>
  );
};

export default AnimatedLoopText;
