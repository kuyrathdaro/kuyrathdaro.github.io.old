import { Stack } from "@chakra-ui/react";
import Avatar2D from "../../ui/avatar/2d";
import Headings from "../../ui/headings";

const Hero = () => {
  return (
    <Stack
    as="section"
    alignItems="center"
    direction={{ base: "column-reverse", md: "row" }}
    maxWidth="container.md"
    spacing={10}
    >
      <Headings/>
      <Avatar2D/>
    </Stack>
  );
};

export default Hero;
