import {
  HStack,
  VStack,
  Flex,
  useDisclosure,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  DrawerHeader,
} from "@chakra-ui/react";
import ThemeToggleButton from "../../ui/theme-toggle-button";
import Logo from "../../ui/logo";
import React from "react";
import LinkItem from "../../ui/link-item";
import { HamburgerIcon } from "@chakra-ui/icons";

const NavItems = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Work",
    href: "/work",
  },
  {
    label: "Blog",
    href: "/blog",
  },
];

const DesktopNav = ({ path }) => {
  return (
    <>
      <Logo />
      <HStack as="nav" spacing="5" display={{ base: "none", md: "flex" }}>
        {NavItems.map((item, i) => (
          <LinkItem key={i} href={item.href} path={path}>
            {item.label}
          </LinkItem>
        ))}
      </HStack>
    </>
  );
};

const MobileNav = ({ path }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef;
  return (
    <Flex display={{ base: "flex", md: "none" }}>
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
              {NavItems.map((item, i) => (
                <LinkItem
                  key={i}
                  href={item.href}
                  onClick={onClose}
                  path={path}
                >
                  {item.label}
                </LinkItem>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

const NavBar = (props) => {
  return (
    <Flex
      w="100%"
      px={4}
      py={5}
      align="center"
      justify="space-between"
      css={{ backdropFilter: "blur(10px)" }}
      zIndex={1}
    >
      <DesktopNav />
      <HStack>
        <ThemeToggleButton />
        <MobileNav />
      </HStack>
    </Flex>
  );
};

export default NavBar;
