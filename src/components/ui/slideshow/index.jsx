import ImageGallery from "react-image-gallery";
import { ImageList } from "../../../utils/constants";

const SlideShow = () => {
  return (
    <ImageGallery
      items={ImageList}
      autoPlay={true}
      showFullscreenButton={false}
      showThumbnails={false}
      showPlayButton={false}
      showNav={false}
    />
  );
};

export default SlideShow;
