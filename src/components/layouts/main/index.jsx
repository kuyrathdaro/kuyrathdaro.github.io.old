import { Container, Flex } from "@chakra-ui/react";
import Head from "next/head";
import Footer from "../../sections/footer";
import NavBar from "../../sections/navbar";

const Layout = ({ children, router, title }) => {
  return (
    <Flex direction="column" align="center" maxW={{ x: "1200px" }} m="0 auto">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <title>{title}</title>
      </Head>
      <NavBar path={router.asPath} />
      <Container maxWidth="container.xl" mb={16}>
        {children}
      </Container>
      <Footer />
    </Flex>
  );
};
export default Layout;
