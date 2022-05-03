import { Image, Link } from "@chakra-ui/react";

export default function TryHackMe() {
  return (
    <Link href="https://tryhackme.com/p/0xdaro" isExternal>
      <Image
        src="https://tryhackme-badges.s3.amazonaws.com/0xdaro.png"
        alt="TryHackMe"
      />
    </Link>
  );
}
