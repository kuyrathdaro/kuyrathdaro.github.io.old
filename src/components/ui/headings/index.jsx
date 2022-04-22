import { VStack, Heading } from "@chakra-ui/react";
import { useEffect } from "react";
import useDencrypt from "use-dencrypt-effect";
import AnimatedLoopText from "../animated-loop-text";

const Greeting = () => {
  const { result, dencrypt } = useDencrypt();
  useEffect(() => {
    dencrypt("Hi,");
  });
  return (
    <Heading as="h2" fontSize="5xl">
      {result}
    </Heading>
  );
};

const Intro = () => {
  const { result, dencrypt } = useDencrypt();
  useEffect(() => {
    dencrypt("I'm Daro,");
  });
  return (
    <Heading as="h2" fontSize="5xl">
      {result}
    </Heading>
  );
};

const Job = () => {
  const { result, dencrypt } = useDencrypt();
  useEffect(() => {
    dencrypt("web developer");
  });
  return (
    <Heading as="h3" fontSize="4xl">
      {result}
    </Heading>
  );
};

const Headings = () => {
  return (
    <VStack alignItems="flex-start" w="full" h="full" spacing={5}>
      <Greeting />
      <Intro />
      <Job />
      <AnimatedLoopText />
    </VStack>
  );
};

export default Headings;
