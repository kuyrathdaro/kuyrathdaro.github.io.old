import { Image, useColorModeValue } from "@chakra-ui/react";
import ThreeAvatar from "../3d-avatar";
import dynamic from "next/dynamic";
import { ThemeData } from "../../../utils/constants";
import { motion } from "framer-motion";

const LazyThreeAvatar = dynamic(() => import("../3d-avatar"), {
  ssr: false,
  loading: () => <ThreeAvatar />,
});

const Avatar = () => {
  const avatarImg = `/images/${useColorModeValue(
    ThemeData.light.avatar,
    ThemeData.dark.avatar
  )}.png`;
  return (
    <Image
      as={motion.img}
      src={avatarImg}
      objectFit="cover"
      boxSize={320}
      alt="avatar"
      borderRadius="50%"
      backgroundColor={useColorModeValue(ThemeData.light.bg, ThemeData.dark.bg)}
      whileHover={{
        cursor: "pointer",
        borderRadius: "20%",
        transitionProperty: "background-color",
        transitionDuration: "0.4s",
        transitionTimingFunction: "ease-out",
        transitionDelay: "0s",
        scale: 1.2
      }}
    />
  );
};

export default Avatar;
