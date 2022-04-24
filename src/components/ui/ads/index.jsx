import { Text } from "@chakra-ui/react";
import { TextLoop } from "react-text-loop-next";
import { AdsList } from "../../../utils/constants";

const Ads = () => {
  return (
    <TextLoop interval={3000}>
      {AdsList.map((item, i) => (
        <Text key={i} fontSize="md">
          {item}
        </Text>
      ))}
    </TextLoop>
  );
};

export default Ads;
