import Layout from "../src/components/layouts/content";
import { Container } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeLabel } from "../src/redux/slices/navbarSlice";

const Work = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeLabel(".work()"));
  })
  return (
    <Layout title="daro.work">
      <Container maxWidth="container.md">
        <p>Coming soon</p>
      </Container>
    </Layout>
  );
};

export default Work;
