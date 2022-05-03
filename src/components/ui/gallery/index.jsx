import ImageGallery from "react-image-gallery";
import { ImageList } from "../../../utils/constants";

const Gallery = () => {
  return (
    <ImageGallery
      items={ImageList}
      autoPlay={true}
      showFullscreenButton={true}
      showThumbnails={true}
      showPlayButton={true}
      showNav={true}
      showBullets={true}
    />
  );
};

export default Gallery;
