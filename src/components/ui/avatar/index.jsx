import { Image, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import ThreeAvatar from "../three-avatar";
import dynamic from "next/dynamic";
import { ThemeData } from "../../../utils/constants";
import { motion } from "framer-motion";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

const LazyThreeAvatar = dynamic(() => import("../three-avatar"), {
  ssr: false,
  loading: () => <ThreeAvatar />,
});

const Avatar = () => {
  const avatarImg = `/images/${useColorModeValue(
    ThemeData.light.avatar,
    ThemeData.dark.avatar
  )}.png`;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const removeCursor = () => {
    
  }
  return (
    <>
      <Image
        as={motion.img}
        src={avatarImg}
        objectFit="cover"
        boxSize={320}
        alt="avatar"
        borderRadius="50%"
        backgroundColor={useColorModeValue(
          ThemeData.light.bg,
          ThemeData.dark.bg
        )}
        whileHover={{
          cursor: "pointer",
          borderRadius: "20%",
          transitionProperty: "background-color",
          transitionDuration: "0.4s",
          transitionTimingFunction: "ease-out",
          transitionDelay: "0s",
          scale: 1.1,
        }}
        onClick={() => {
          onOpen();
          removeCursor();
        }}
      />
      <Modal
        isCentered
        isOpen={isOpen}
        onClose={onClose}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ThreeAvatar />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Avatar;
