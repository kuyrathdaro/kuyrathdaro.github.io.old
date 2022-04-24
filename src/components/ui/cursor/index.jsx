import { useSelector } from "react-redux";
import { selectCursorColor } from "../../../redux/slices/themeSlice";
import dynamic from "next/dynamic";
import { Global, css } from "@emotion/react";

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

const Cursor = () => {
  const color = useSelector(selectCursorColor);
  return (
    <>
      <Global
        styles={css`
          .cursor {
            position: fixed;
            background: orange;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            will-change: transform;
            user-select: none;
            pointer-events: none;
            z-index: 100000;
            margin: -10px 0 0 -20px;
          }

          .shapes {
            position: relative;
            height: 100vh;
            width: 100vw;
            background: "orange";
            overflow: hidden;
          }

          .shape {
            will-change: transform;
            position: absolute;
            border-radius: 50%;
          }
          .shape.shape-1 {
            background: orange;
            width: 550px;
            height: 550px;
            margin: -325px 0 0 -325px;
          }
          .shape.shape-2 {
            background: #ffe5e3;
            width: 340px;
            height: 340px;
            margin: -220px 0 0 -220px;
          }
          .shape.shape-3 {
            background: #000;
            width: 170px;
            height: 170px;
            margin: -135px 0 0 -135px;
          }
        `}
      />
      <AnimatedCursor
        innerSize={8}
        outerSize={8}
        color={color}
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
      />
    </>
  );
};

export default Cursor;
