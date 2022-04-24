import Link from "next/link";

import { Text, useColorModeValue, Image } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { ThemeData } from "../../../utils/constants";

const LogoBox = styled.span`
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  img {
    transition: 200ms ease;
  }

  &:hover img {
    transform: rotate(20deg);
  }
`;

const Logo = () => {
  const logo = `/images/${useColorModeValue(ThemeData.light.logo, ThemeData.dark.logo)}.png`;
  return (
    <Link href="/" scroll={false}>
      <a>
        <LogoBox>
          <Image src={logo} boxSize="20px" alt="logo" />
          <Text
            color={useColorModeValue(ThemeData.light.color, ThemeData.dark.color)}
            _hover={{
              color: useColorModeValue(ThemeData.light.bg, ThemeData.dark.bg),
              transitionProperty: "color",
              transitionDuration: "0.4s",
              transitionTimingFunction: "ease-out",
              transitionDelay: "0s",
            }}
            fontWeight="bold"
            fontSize="xl"
            ml={2}
          >
            Rathdaro Kuy
          </Text>
        </LogoBox>
      </a>
    </Link>
  );
};

export default Logo;
