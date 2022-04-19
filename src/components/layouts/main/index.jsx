import { Container, Box } from "@chakra-ui/react";
import Head from "next/head";
import Footer from "../../sections/footer";
import NavBar from "../../sections/navbar";

const Layout = ({ children, router, title }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <title>{title}</title>
      </Head>
      <NavBar path={router.asPath} />
      <Container maxWidth="container.xl" py={14}>
        {children}
        <Footer />
      </Container>
    </Box>
  );
};
export default Layout;
