import {
  Box,
  VStack,
  useDisclosure,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  DrawerHeader,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import LinkItem from "../../ui/link-item";
import React from "react";

const MobileNavbar = ({ path }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef;
  return (
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
  );
};

export default MobileNavbar;
