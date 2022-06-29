import Layout from "../src/components/layouts/content";
import { Container, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeLabel } from "../src/redux/slices/navbarSlice";
import VoxelDogLoader from "../src/components/ui/voxel-dog/loader";
import dynamic from "next/dynamic";

const LazyVoxelDog = dynamic(() => import("../src/components/ui/voxel-dog"), {
  loading: () => <VoxelDogLoader />,
});

const Work = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeLabel(".work()"));
  });
  return (
    <Layout title="daro.work">
      <Container maxWidth="container.md">
        <LazyVoxelDog/>
        <Text>Sorry No Content</Text>
      </Container>
    </Layout>
  );
};

export default Work;
