import Layout from "../src/components/layouts/content";
import { Center, Container, SimpleGrid, Heading } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeLabel } from "../src/redux/slices/navbarSlice";
import data from "../public/data/blog.json";
import { GridItem } from "../src/components/ui/grid-item";
import FadingText from "../src/components/ui/fading-text";

const Blog = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeLabel(".blog()"));
  });
  return (
    <Layout title="daro.blog">
      <Container maxWidth="container.md">
        <Center mb={10} mt={10}>
          <Heading>Welcome to my blog!</Heading>
        </Center>
        <Center mb={10}>
          <FadingText />
        </Center>
        <SimpleGrid columns={[1, 2, 3]} spacing={10}>
          {data.map((item, key) => {
            return (
              <GridItem
                key={key}
                title={item.title}
                href={item.href}
                thumbnail={item.thumbnail}
              />
            );
          })}
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Blog;
