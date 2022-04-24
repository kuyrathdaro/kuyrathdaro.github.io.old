import { IconButton, Image, ModalFooter, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import { ThemeData } from "../../../../utils/constants";
import { motion } from "framer-motion";
import Avatar3D from "../3d";
import dynamic from "next/dynamic";
import { GiPiercedHeart, GiPerson } from "react-icons/gi";

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
  ssr: false,
  loading: () => <Avatar3D />
});

const LazyAnimatedAvatar = dynamic(() => import("../animated"), {
  ssr: false,
  loading: () => <AnimatedAvatar />
})

const Avatar2D = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const avatarImg = `/images/avatar.png`;
  const [ isAnimated, setAnimate] = useState(false);
  const color = useColorModeValue(ThemeData.light.bg_hex, ThemeData.dark.bg_hex);
  return (
    <>
      <Image
        as={motion.img}
        src={avatarImg}
        objectFit="cover"
        boxSize={320}
        alt="avatar"
        borderRadius="50%"
        backgroundColor={color}
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
      <Modal
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            { isAnimated == true && "Shooting through your ❤️"}
            { isAnimated == false && "3D View"}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody align="center">
            { isAnimated == false && (<LazyAvatar3D />)}
            { isAnimated == true && (<LazyAnimatedAvatar />) }
          </ModalBody>
          <ModalFooter>
            { isAnimated == false && (<IconButton onClick={() => setAnimate(true)} _hover="" bg="" aria-label="animate" icon={<GiPiercedHeart color={color} size="40px"/>}/>)}
            { isAnimated == true && (<IconButton onClick={() => setAnimate(false)} _hover="" bg="" aria-label="animate" icon={<GiPerson color={color} size="40px"/>}/>)}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Avatar2D;
