import { Text, Box, Image, LinkBox, LinkOverlay } from "@chakra-ui/react";

export const GridItem = ({ title, thumbnail, href, children }) => {
  return (
    <Box w="100%" textAlign="center">
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          borderRadius="12px"
          placeholder="blur"
          loading="lazy"
        />
        <LinkOverlay href={href} target="_blank">
          <Text mt={2}>{title}</Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </Box>
  );
};
