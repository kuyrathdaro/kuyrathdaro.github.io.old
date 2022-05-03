import { Image, Link } from "@chakra-ui/react";

const HackTheBox = () => {
  return (
    <Link href="https://www.hackthebox.com/profile/129404" isExternal>
      <Image
        src="http://www.hackthebox.eu/badge/image/129404"
        alt="Hack The Box"
      />
    </Link>
  );
};

export default HackTheBox;
