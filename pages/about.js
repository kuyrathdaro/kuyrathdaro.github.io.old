import Layout from "../src/components/layouts/content";
import { Container, Heading, Text, Box, useColorModeValue, SimpleGrid } from "@chakra-ui/react";
import data from "../public/data/about.json";
import { ThemeData } from "../src/utils/constants";

const About = () => {
  return (
    <Layout title="daro.about">
      <Container maxWidth="container.md" mt={10}>
        <SimpleGrid columns={3} spacing={5} mb={10}>
          
        </SimpleGrid>
        <SimpleGrid columns={[1, null, 2]} mb={10}>
          
        </SimpleGrid>
        <Text mb={10}>
          I am a web developer, backend developer. From Cambodia, Phnom Penh
        </Text>
        <Heading as="h3" fontSize="2xl" mb={5}>
          Main skills
        </Heading>
        <SimpleGrid columns={[1, null, 2]} spacing={10} mb={10}>
          {data.skills.map((item) => (
            <Box>
              <Text>{item.name}</Text>
            </Box>
          ))}
        </SimpleGrid>
        <Heading as="h3" fontSize="2xl" mb={5}>
          Experience
        </Heading>
        <SimpleGrid columns={[1, null, 2]} spacing={10} mb={10}>
          {
            data.experience.map((item) => (
              <Box>
                <Text fontWeight="bold" color={useColorModeValue(ThemeData.light.bg_hex, ThemeData.dark.bg_hex)}>
                  {item.position}
                </Text>
                <Text fontSize="md">
                  @ {item.company}
                </Text>
                <Text fontSize="sm">
                  {item.date}
                </Text>
              </Box>
            ))
          }
        </SimpleGrid>
        <Heading as="h3" fontSize="2xl" mb={5}>
          Hobbies
        </Heading>
        <SimpleGrid columns={[1, null, 3]} spacing={5} mb={10}>
          {
            data.hobbies.map((item) => (
              <Text>{item.name}</Text>
            ))
          }
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default About;
