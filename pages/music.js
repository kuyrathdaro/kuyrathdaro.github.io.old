import Layout from "../src/components/layouts/content";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { changeLabel } from "../src/redux/slices/navbarSlice";
import Play from "../src/components/ui/music";
import tracks from "../public/data/music.json";
import { useColorModeValue } from "@chakra-ui/react";

const colorLight = `html{
  --searchBackground: #18191f;
  --searchText: #ffffff;
  --searchPlaceHolder: #575a77;
  --playerBackground: #18191f;
  --titleColor: #ffffff;
  --timeColor: #ffffff;
  --progressSlider: #FFA500;
  --progressUsed: #ffffff;
  --progressLeft: #151616;
  --volumeSlider: #FFA500;
  --volumeUsed: #ffffff;
  --volumeLeft:  #151616;
  --playlistBackground: #18191f;
  --playlistText: #575a77;
  --playlistBackgroundHoverActive:  #18191f;
  --playlistTextHoverActive: #ffffff;
}`;

const colorDark = `html{
  --searchBackground: #18191f;
  --searchText: #ffffff;
  --searchPlaceHolder: #575a77;
  --playerBackground: #18191f;
  --titleColor: #ffffff;
  --timeColor: #ffffff;
  --progressSlider: #805ad5;
  --progressUsed: #ffffff;
  --progressLeft: #151616;
  --volumeSlider: #805ad5;
  --volumeUsed: #ffffff;
  --volumeLeft:  #151616;
  --playlistBackground: #18191f;
  --playlistText: #575a77;
  --playlistBackgroundHoverActive:  #18191f;
  --playlistTextHoverActive: #ffffff;
}`;

const Music = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeLabel(".music()"));
  });
  const colors = useColorModeValue(colorLight, colorDark);
  return (
    <Layout title="daro.music">
      <Play trackList={tracks} customColorScheme={colors} showPlaylist="true" />
    </Layout>
  );
};

export default Music;
