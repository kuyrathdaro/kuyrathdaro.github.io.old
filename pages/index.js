import { Container } from "@chakra-ui/react";

import Hero from "../src/components/sections/hero";
import Layout from "../src/components/layouts/content";
import Ads from "../src/components/ui/ads";

const Home = () => {
  return (
    <Layout title="Home - Rathdaro Kuy">
      <Container maxWidth="container.md">
        <Ads />
      </Container>
      <Container my={5} maxWidth="container.md">
        <Hero />
      </Container>
    </Layout>
  );
};

export default Home;
