import Layout from "../src/components/layouts/content";
import dynamic from "next/dynamic";
import VoxelDog from "../src/components/ui/voxel-dog";

const LazyVoxelDog = dynamic(() => import("../src/components/ui/voxel-dog"), {
  ssr: false,
  loading: () => <VoxelDog />,
});

const About = () => {
  return (
    <Layout title="About">
      Coming soon
    </Layout>
  );
};

export default About;
