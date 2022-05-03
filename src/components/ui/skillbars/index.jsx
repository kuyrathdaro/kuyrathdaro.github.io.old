import { Box, HStack, Text } from "@chakra-ui/react";

const SkillBars = ({ level, bgColor }) => {
  return (
    <HStack spacing={3}>
      <HStack spacing={1}>
        {Array.from(Array(level), (e, i) => {
          return (
            <Box width="25px" height="4px" bgColor={bgColor} key={i}></Box>
          );
        })}
      </HStack>
      <Text fontSize="sm">{level}/10</Text>
    </HStack>
  );
};

export default SkillBars;
