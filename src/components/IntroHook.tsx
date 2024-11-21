import { spring, useCurrentFrame, useVideoConfig, Img, staticFile } from 'remotion';

interface IntroHookProps {
  cardName: string;
  positionName: string;
}

export const IntroHook: React.FC<IntroHookProps> = ({ cardName, positionName }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const zoom = spring({
    frame,
    fps,
    from: 1,
    to: 1.1,
    durationInFrames: 30,
  });
  const myTarotCard = staticFile(`${cardName}.png`)
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <Img
        src={myTarotCard}
        alt={cardName}
        style={{
          transform: `scale(${zoom})`,
          filter: 'brightness(1.2)',
          borderRadius: '10px',
        }}
      /> 
      <h1
        style={{
          position: 'absolute',
          top: '70%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white',
          fontSize: '3rem',
          textShadow: '2px 2px 10px black',
        }}
      >
        What does {cardName} mean as {positionName}?
      </h1>
    </div>
  );
};
