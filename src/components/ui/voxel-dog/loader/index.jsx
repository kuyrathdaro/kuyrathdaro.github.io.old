import { forwardRef } from "react";

import { Box, Spinner } from "@chakra-ui/react";

const VoxelDogSpinner = () => (
  <Spinner
    size="xl"
    position="absolute"
    left="50%"
    top="50%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - var(--spinner-size))"
  />
);

const VoxelDogContainer = forwardRef(({ children }, ref) => (
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
VoxelDogContainer.displayName = 'VoxelDogContainer';

const VoxelDogLoader = () => {
  return (
    <VoxelDogContainer>
      <VoxelDogSpinner />
    </VoxelDogContainer>
  );
}

export { VoxelDogContainer, VoxelDogSpinner};
export default VoxelDogLoader;