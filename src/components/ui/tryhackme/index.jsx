import { Image, Link } from "@chakra-ui/react";
import { THM_PROFILE_URL, THM_IMAGE_URL } from "../../../utils/constants";

export default function TryHackMe() {
  return (
    <Link href={THM_PROFILE_URL} isExternal>
      <Image src={THM_IMAGE_URL} alt="TryHackMe" />
    </Link>
  );
}
