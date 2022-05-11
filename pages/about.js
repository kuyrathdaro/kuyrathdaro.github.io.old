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
  Stack,
} from "@chakra-ui/react";
import data from "../public/data/about.json";
import { GrLinkedin, GrTwitter, GrGithub } from "react-icons/gr";
import { FiInstagram } from "react-icons/fi";
import { INSTAGRAM_URL, LINKEDIN_URL, GITHUB_URL, TWITTER_URL, ThemeData } from "../src/utils/constants";
import TryHackMe from "../src/components/ui/tryhackme";
import HackTheBox from "../src/components/ui/hackthebox";
import SkillBars from "../src/components/ui/skillbars";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeLabel } from "../src/redux/slices/navbarSlice";

const About = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeLabel(".about()"));
  })
  const color = useColorModeValue(ThemeData.light.bg, ThemeData.dark.bg);
  return (
    <Layout title="daro.about">
      <Container maxWidth="container.md" mt={10}>
        <HStack spacing="15px" mb={10}>
          <Link
            href={LINKEDIN_URL}
            isExternal
            _hover={{ color: color }}
          >
            <GrLinkedin size="25px" />
          </Link>
          <Link
            href={GITHUB_URL}
            isExternal
            _hover={{ color: color }}
          >
            <GrGithub size="25px" />
          </Link>
          <Link
            href={TWITTER_URL}
            isExternal
            _hover={{ color: color }}
          >
            <GrTwitter size="25px" />
          </Link>
          <Link
            href={INSTAGRAM_URL}
            isExternal
            _hover={{ color: color }}
          >
            <FiInstagram size="25px" />
          </Link>
        </HStack>
        <Text mb={10}>
          I am a web developer, backend developer. From Phnom Penh, Cambodia.
        </Text>
        <Heading as="h3" fontSize="2xl" mb={5}>
          Main skills
        </Heading>
        <SimpleGrid columns={[1, null, 2]} spacing={10} mb={10}>
          {data.skills.map((item, key) => (
            <Box key={key}>
              <Text>{item.type}</Text>
              <SkillBars level={item.level} bgColor={color}/>
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
        <Stack direction={["column", "row"]} align="center" spacing={5} mb={10}>
          <TryHackMe />
          <HackTheBox />
        </Stack>
      </Container>
    </Layout>
  );
};

export default About;
