import NextLink from "next/link";
import {
  Container,
  Box,
  Flex,
  Stack,
  Link,
  Heading,
  useColorModeValue,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  DrawerHeader,
  VStack,
} from "@chakra-ui/react";
import ThemeToggleButton from "../../ui/theme-toggle-button";
import Logo from "../../ui/logo";
import { HamburgerIcon } from "@chakra-ui/icons";
import React from "react";
import { ThemeData } from "../../../utils/constants";

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href;
  const inactiveColor = useColorModeValue(ThemeData.light.color, ThemeData.dark.color);
  return (
    <NextLink href={href} passHref scroll={false}>
      <Link
        p={2}
        size="m"
        fontSize="lg"
        _hover={{
          color: useColorModeValue(ThemeData.light.bg, ThemeData.dark.bg),
          transitionProperty: "color",
          transitionDuration: "0.4s",
          transitionTimingFunction: "ease-out",
          transitionDelay: "0s",
        }}
        color={active ? "#555555" : inactiveColor}
        target={target}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  );
};

const NavBar = (props) => {
  const { path } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef;

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

          <Box ml={2} display={{ base: "inline-block", md: "none" }}>
            <IconButton
              bg=""
              icon={<HamburgerIcon w={6} h={6} />}
              variant="none"
              aria-label="Options"
              onClick={onOpen}
            />
            <Drawer
              isOpen={isOpen}
              placement="right"
              onClose={onClose}
              size="xs"
              finalFocusRef={btnRef}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader></DrawerHeader>
                <DrawerBody>
                  <VStack alignItems="left">
                    <LinkItem href="/about" onClick={onClose} path={path}>
                      About
                    </LinkItem>
                    <LinkItem href="/work" onClick={onClose} path={path}>
                      Work
                    </LinkItem>
                    <LinkItem href="/blog" onClick={onClose} path={path}>
                      Blog
                    </LinkItem>
                  </VStack>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default NavBar;
