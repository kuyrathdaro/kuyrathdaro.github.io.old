import {
  Container,
  Box,
  Flex,
  Stack,
  Heading,
} from "@chakra-ui/react";
import ThemeToggleButton from "../../ui/theme-toggle-button";
import Logo from "../../ui/logo";
import React from "react";
import MobileNavbar from "../mobile-navbar";
import LinkItem from "../../ui/link-item";

const NavBar = (props) => {
  const { path } = props;

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      css={{ backdropFilter: "blur(10px)" }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.sm"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            <Logo />
          </Heading>
        </Flex>
        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/about" path={path}>
            About
          </LinkItem>
          <LinkItem href="/work" path={path}>
            Work
          </LinkItem>
          <LinkItem href="/blog" path={path}>
            Blog
          </LinkItem>
        </Stack>
        <Box flex={1} align="right">
          <ThemeToggleButton />
          <MobileNavbar />
        </Box>
      </Container>
    </Box>
  );
};

export default NavBar;
