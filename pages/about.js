import Layout from "../src/components/layouts/content";
import {
  Container,
  Heading,
  Text,
  Box,
  SimpleGrid,
  HStack,
  Link,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import data from "../public/data/about.json";
import { GrLinkedin, GrTwitter, GrGithub } from "react-icons/gr";
import { FiInstagram } from "react-icons/fi";
import { ThemeData } from "../src/utils/constants";
import Script from "next/script";

const About = () => {
  const color = useColorModeValue(ThemeData.light.bg, ThemeData.dark.bg);
  return (
    <Layout title="daro.about">
      <Container maxWidth="container.md" mt={10}>
        <HStack spacing="15px" mb={10}>
          <Link
            href="https://linkedin.com/in/kuyrathdaro"
            isExternal
            _hover={{ color: color }}
          >
            <GrLinkedin size="25px" />
          </Link>
          <Link
            href="https://github.com/kuyrathdaro"
            isExternal
            _hover={{ color: color }}
          >
            <GrGithub size="25px" />
          </Link>
          <Link
            href="https://twitter.com/0xdaro"
            isExternal
            _hover={{ color: color }}
          >
            <GrTwitter size="25px" />
          </Link>
          <Link
            href="https://instagram.com/rathdaro/"
            isExternal
            _hover={{ color: color }}
          >
            <FiInstagram size="25px" />
          </Link>
        </HStack>
        <Text mb={10}>
          I am a web developer, backend developer. From Cambodia, Phnom Penh
        </Text>
        <Heading as="h3" fontSize="2xl" mb={5}>
          Main skills
        </Heading>
        <SimpleGrid columns={[1, null, 2]} spacing={10} mb={10}>
          {data.skills.map((item, key) => (
            <Box key={key}>
              <Text>{item.name}</Text>
            </Box>
          ))}
        </SimpleGrid>
        <Heading as="h3" fontSize="2xl" mb={5}>
          Experience
        </Heading>
        <SimpleGrid columns={[1, null, 2]} spacing={10} mb={10}>
          {data.experience.map((item, key) => (
            <Box key={key}>
              <Text fontWeight="bold" color={color}>
                {item.position}
              </Text>
              <Text fontSize="md">@ {item.company}</Text>
              <Text fontSize="sm">{item.date}</Text>
            </Box>
          ))}
        </SimpleGrid>
        <Heading as="h3" fontSize="2xl" mb={5}>
          Hobbies
        </Heading>
        <SimpleGrid columns={[1, null, 3]} spacing={5} mb={10}>
          {data.hobbies.map((item, key) => (
            <Text key={key}>{item.name}</Text>
          ))}
        </SimpleGrid>
        <SimpleGrid columns={[1, null, 2]} mb={10}>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default About;
