import { Container } from "@chakra-ui/react";

import Hero from "../src/components/sections/hero";
import Layout from "../src/components/layouts/content";
import Ads from "../src/components/ui/ads";

const Home = () => {
  return (
    <Layout title="daro.is">
      <Container maxWidth="container.md" mt={10}>
        <Ads />
      </Container>
      <Container my={5} maxWidth="container.md">
        <Hero />
      </Container>
    </Layout>
  );
};

export default Home;
