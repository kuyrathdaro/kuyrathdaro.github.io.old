import Layout from "../src/components/layouts/content";
import { Container } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeLabel } from "../src/redux/slices/navbarSlice";

const Blog = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeLabel(".blog()"));
  })
  return (
    <Layout title="daro.blog">
      <Container maxWidth="container.md">
        <p>Coming soon</p>
      </Container>
    </Layout>
  );
};

export default Blog;
