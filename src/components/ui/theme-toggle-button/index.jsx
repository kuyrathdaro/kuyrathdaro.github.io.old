import { AnimatePresence, motion } from "framer-motion";
import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const ThemeToggleButton = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        style={{ display: "inline-block" }}
        key={useColorModeValue("light", "dark")}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.1 }}
        whileHover={{ scale: 1.2 }}
      >
        <IconButton
          aria-label="Toggle Theme"
          bg=""
          _hover={{
            "&>*": {
              color: useColorModeValue("orange", "purple.500"),
              transitionProperty: "color",
              transitionDuration: "0.4s",
              transitionTimingFunction: "ease-out",
              transitionDelay: "0s",
            },
          }}
          icon={useColorModeValue(
            <MoonIcon w={6} h={6} />,
            <SunIcon w={6} h={6} />
          )}
          onClick={toggleColorMode}
        ></IconButton>
      </motion.div>
    </AnimatePresence>
  );
};

export default ThemeToggleButton;
