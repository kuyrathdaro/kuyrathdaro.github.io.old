import NextLink from "next/link";
import {
  Box,
  Heading,
  Text,
  Container,
  Button,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";

const NotFound = () => {
  return (
    <Container align="center" mt={25}>
      <Image src="/images/you-shall-not-pass.gif" borderRadius={5} alt="" />
      <Heading as="h1" my={5}>
        404 | Page Not Found
      </Heading>
      <Text>The page you&apos;re looking for was not found.</Text>
      <Box my={5} align="center">
        <NextLink href="/" passHref>
          <Button
            bg={useColorModeValue("orange", "purple.500")}
            _hover={{ bg: "" }}
            color={useColorModeValue("gray200", "whiteAlpha.900")}
          >
            Go back home
          </Button>
        </NextLink>
      </Box>
    </Container>
  );
};

export default NotFound;
