import Layout from "../src/components/layouts/content";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { changeLabel } from "../src/redux/slices/navbarSlice";
import { Container } from "@chakra-ui/react";

const Music = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeLabel(".music()"));
  });
  return (
    <Layout title="daro.music">
      <Container maxWidth="container.md">
        
      </Container>
    </Layout>
  );
};

export default Music;
