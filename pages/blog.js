import Layout from "../src/components/layouts/content";
import { Container, Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeLabel } from "../src/redux/slices/navbarSlice";
import SlideShow from "../src/components/ui/slideshow";

const Blog = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeLabel(".blog()"));
  });
  return (
    <Layout title="daro.blog">
      <Container maxWidth="container.md">
        <Box width="container.md">
        <SlideShow/>
        </Box>
      </Container>
    </Layout>
  );
};

export default Blog;
