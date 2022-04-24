import { useColorModeValue } from "@chakra-ui/react";
import { ThemeData } from "../../../utils/constants";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href;
  const inactiveColor = useColorModeValue(
    ThemeData.light.color,
    ThemeData.dark.color
  );
  return (
    <NextLink href={href} passHref scroll={false}>
      <Link
        p={2}
        size="m"
        fontSize="lg"
        _hover={{
          color: useColorModeValue(ThemeData.light.bg, ThemeData.dark.bg),
          transitionProperty: "color",
          transitionDuration: "0.4s",
          transitionTimingFunction: "ease-out",
          transitionDelay: "0s",
        }}
        color={active ? "#555555" : inactiveColor}
        target={target}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  );
};

export default LinkItem;
