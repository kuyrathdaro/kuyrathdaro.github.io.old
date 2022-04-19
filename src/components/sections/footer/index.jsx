import { Box } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" align="center" opacity={0.5} fontSize="sm">
      &copy; {new Date().getFullYear()} Rathdaro Kuy. All Rights Reserved.
    </Box>
  );
};

export default Footer;
