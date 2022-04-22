import { Container } from "@chakra-ui/react";

import Hero from "../src/components/sections/hero";
import Layout from "../src/components/layouts/content";

const Home = () => {
  return (
    <Layout title="Home - Rathdaro Kuy">
      <Container my={10} maxWidth="container.md">
        <Hero />
      </Container>
    </Layout>
  );
};

export default Home;
