import { VStack, Heading, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import useDencrypt from "use-dencrypt-effect";

const Greeting = () => {
  const { result, dencrypt } = useDencrypt();
  useEffect(() => {
    dencrypt("Hi");
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
    dencrypt("I'm Daro");
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
    dencrypt("Web Developer");
  });
  return (
    <Heading as="h3" fontSize="4xl">
      {result}
    </Heading>
  );
};

const FrontEndText = () => {
  const { result, dencrypt } = useDencrypt();
  useEffect(() => {
    dencrypt("Front-end Developer");
  });
  return (
    <Text fontSize="xl" as="s">
      {result}
    </Text>
  );
};

const BackEndText = () => {
  const { result, dencrypt } = useDencrypt();
  useEffect(() => {
    dencrypt("Back-end Developer");
  });
  return <Text fontSize="xl">{result}</Text>;
};

const Headings = () => {
  return (
    <VStack alignItems="flex-start" w="full" h="full" spacing={4}>
      <Greeting />
      <Intro />
      <Job />
      <FrontEndText />
      <BackEndText />
    </VStack>
  );
};

export default Headings;
