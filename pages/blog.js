import Layout from "../src/components/layouts/content";
import { Box, Container, SimpleGrid } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeLabel } from "../src/redux/slices/navbarSlice";
import Gallery from "../src/components/ui/gallery";
import data from "../public/data/blog.json";
import { GridItem } from "../src/components/ui/grid-item";

const Blog = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeLabel(".blog()"));
  });
  return (
    <Layout title="daro.blog">
      <Container maxWidth="container.md">
        <Box mb={10}>
          <Gallery />
        </Box>
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
