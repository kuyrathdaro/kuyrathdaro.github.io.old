import { Stack } from "@chakra-ui/react";
import Avatar from "../../ui/avatar";
import Headings from "../../ui/headings";

const Hero = () => {
  return (
    <Stack
      as="section"
      alignItems="center"
      direction={{ base: "column", md: "row" }}
      maxWidth="container.xl"
      spacing={10}
    >
      <Headings />
      <Avatar />
    </Stack>
  );
};

export default Hero;
