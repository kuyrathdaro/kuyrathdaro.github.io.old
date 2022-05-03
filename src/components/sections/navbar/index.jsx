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
  Text,
  useColorModeValue,
  chakra,
} from "@chakra-ui/react";
import ThemeToggleButton from "../../ui/theme-toggle-button";
import React from "react";
import LinkItem from "../../ui/link-item";
import { HamburgerIcon } from "@chakra-ui/icons";
import { ThemeData } from "../../../utils/constants";
import { motion, isValidMotionProp, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectLabel } from "../../../redux/slices/navbarSlice";

const NavItems = [
  {
    label: ".is()",
    href: "/",
  },
  {
    label: ".about()",
    href: "/about",
  },
  {
    label: ".work()",
    href: "/work",
  },
  {
    label: ".blog()",
    href: "/blog",
  },
];

const ChakraBox = chakra(motion.div, isValidMotionProp);

const variants = {
  hidden: {
    x: "-400%",
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
  },
  visible: {
    x: 0,
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
  },
};

const Brand = (props) => {
  const label = useSelector(selectLabel);
  return (
    <AnimatePresence>
      <ChakraBox
        width="100px"
        variants={variants}
        initial="hidden"
        animate="visible"
        key={props.randomkey}
      >
        <Text
          fontSize="lg"
          fontWeight="bold"
          color={useColorModeValue(ThemeData.light.bg, ThemeData.dark.bg)}
        >
          {label}
        </Text>
      </ChakraBox>
    </AnimatePresence>
  );
};

const NavBar = ({path}) => {
  const [randomkey, setRandomKey] = useState(Math.random());
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef;
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
      <Brand randomkey={randomkey}/>
      <HStack as="nav" spacing="5" display={{ base: "none", md: "flex" }}>
        {NavItems.map((item, key) => (
          <LinkItem
            onClick={() => {
              setRandomKey(Math.random());
            }}
            key={key}
            href={item.href}
            path={path}
          >
            {item.label}
          </LinkItem>
        ))}
      </HStack>
      <HStack>
        <ThemeToggleButton />
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
                  {NavItems.map((item, key) => (
                    <LinkItem
                      href={item.href}
                      key={key}
                      onClick={() => {
                        onClose();
                        setRandomKey(Math.random());
                      }}
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
      </HStack>
    </Flex>
  );
};

export default NavBar;
