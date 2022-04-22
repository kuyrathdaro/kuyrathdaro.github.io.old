import { useSelector } from "react-redux";
import { selectCursorColor } from "../../../redux/slices/themeSlice";
import dynamic from "next/dynamic";

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

const Cursor = () => {
  const color = useSelector(selectCursorColor);
  return (
    <AnimatedCursor
      innerSize={8}
      outerSize={8}
      color={color}
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
    />
  );
};

export default Cursor;
