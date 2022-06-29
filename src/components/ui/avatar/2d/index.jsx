import {
  IconButton,
  Image,
  ModalFooter,
  useColorModeValue,
  useDisclosure,
  Text
} from "@chakra-ui/react";
import { ThemeData } from "../../../../utils/constants";
import { motion } from "framer-motion";
import Avatar3D from "../3d";
import dynamic from "next/dynamic";
import { IoPlay } from "react-icons/io5";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useState } from "react";
import AnimatedAvatar from "../animated";

const LazyAvatar3D = dynamic(() => import("../3d"), {
  loading: () => <Avatar3D />,
});

const LazyAnimatedAvatar = dynamic(() => import("../animated"), {
  loading: () => <AnimatedAvatar />,
});

const Avatar2D = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const avatarImg = `/images/avatar.png`;
  const [isAnimated, setAnimate] = useState(false);
  const bgColor = useColorModeValue(
    ThemeData.light.bg_hex,
    ThemeData.dark.bg_hex
  );
  return (
    <>
      <Image
        as={motion.img}
        src={avatarImg}
        objectFit="cover"
        boxSize={320}
        alt="avatar"
        borderRadius="50%"
        backgroundColor={bgColor}
        whileHover={{
          cursor: "pointer",
          borderRadius: "20%",
          transitionProperty: "background-color",
          transitionDuration: "0.4s",
          transitionTimingFunction: "ease-out",
          transitionDelay: "0s",
          scale: 1.1,
        }}
        onClick={onOpen}
      />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize="lg">
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody align="center">
            {isAnimated === false ? <LazyAvatar3D /> : <LazyAnimatedAvatar />}
          </ModalBody>
          <ModalFooter>
            <IconButton
              onClick={() => setAnimate(!isAnimated)}
              bg={bgColor}
              _hover=""
              aria-label="animate"
              icon={<IoPlay size="20px"/>}
            />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Avatar2D;
