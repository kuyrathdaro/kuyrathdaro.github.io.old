import { Image, Link } from "@chakra-ui/react";
import { HTB_PROFILE_URL, HTB_IMAGE_URL } from "../../../utils/constants";

const HackTheBox = () => {
  return (
    <Link href={HTB_PROFILE_URL} isExternal>
      <Image src={HTB_IMAGE_URL} alt="Hack The Box" />
    </Link>
  );
};

export default HackTheBox;
