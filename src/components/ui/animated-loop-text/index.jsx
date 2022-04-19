import { Center } from "@chakra-ui/react";
import { TextLoop } from "react-text-loop-next";

const AnimatedLoopText = () => {
  return (
    <Center fontSize="xl">
      <TextLoop interval={3000}>
        <span>Wash Hands 🧼</span>
        <span>Wear Mask 😷</span>
        <span>6 Feet Apart 📏</span>
        <span>Stay Safe 😊</span>
      </TextLoop>
    </Center>
  );
};

export default AnimatedLoopText;
