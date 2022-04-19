import { Image, useColorModeValue } from "@chakra-ui/react";

const Avatar = () => {
  const avatarImg = `/images/avatar${useColorModeValue("", "-dark")}.png`;
  return (
    <Image
      src={avatarImg}
      backgroundColor={useColorModeValue("orange", "purple.500")}
      borderRadius="full"
      objectFit="cover"
      boxSize={320}
      alt="avatar"
    />
  );
};

export default Avatar;
