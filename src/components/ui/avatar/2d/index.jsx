import {
  IconButton,
  Image,
  ModalFooter,
  Spinner,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
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
import { useEffect, useState } from "react";
import AnimatedAvatar from "../animated";

const LazyAvatar3D = dynamic(() => import("../3d"), {
  ssr: false,
  loading: () => <Avatar3D />,
});

const LazyAnimatedAvatar = dynamic(() => import("../animated"), {
  ssr: false,
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
  const color = useColorModeValue(
    ThemeData.light.color,
    ThemeData.dark.color
  )
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
          <ModalHeader>
            {isAnimated === false ? "3D View" : "Shooting through your ❤️"}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody align="center">
            {isAnimated === false ? <LazyAvatar3D /> : <LazyAnimatedAvatar />}
          </ModalBody>
          <ModalFooter>
            {isAnimated === false ? (
              <IconButton
                onClick={() => setAnimate(true)}
                bg=""
                _hover={{color: bgColor}}
                aria-label="animate"
                icon={<GiPiercedHeart color={color} size="40px" />}
              />
            ) : (
              <IconButton
                onClick={() => setAnimate(false)}
                _hover={{color: bgColor}}
                bg=""
                aria-label="animate"
                icon={<GiPerson color={color} size="40px" />}
              />
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Avatar2D;
