import { forwardRef } from "react";

import { Box, Spinner } from "@chakra-ui/react";

export const AvatarSpinner = () => (
  <Spinner
    size="xl"
    position="absolute"
    left="50%"
    top="50%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - var(--spinner-size))"
  />
);

export const AvatarContainer = forwardRef(({ children }, ref) => (
  <Box
    ref={ref}
    className="avatar"
    m="auto"
    w={[280, 480, 640]}
    h={[280, 480, 640]}
    position="relative"
  >
    {children}
  </Box>
));

const Loader = () => {
  return (
    <AvatarContainer>
      <AvatarSpinner />
    </AvatarContainer>
  );
};

export default Loader;