import { Composition } from "remotion";
import { TestComponents } from "./components/TestComponent";


export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="TestComponents"
        component={TestComponents}
        durationInFrames={900} // Adjust based on total testing duration
        fps={30}
        width={1080}
        height={1920}
      />
    </>
  );
};

// import { Composition, staticFile } from "remotion";
// import {
//   CaptionedVideo,
//   calculateCaptionedVideoMetadata,
//   captionedVideoSchema,
// } from "./CaptionedVideo";

// Each <Composition> is an entry in the sidebar!
/* TIK TOK TEMPLATE
export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="CaptionedVideo"
      component={CaptionedVideo}
      calculateMetadata={calculateCaptionedVideoMetadata}
      schema={captionedVideoSchema}
      width={1080}
      height={1920}
      defaultProps={{
        src: staticFile("sample-video.mp4"),
      }}
    />
  );
};
*/