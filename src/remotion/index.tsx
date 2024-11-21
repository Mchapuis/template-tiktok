import { registerRoot } from 'remotion';
import { Composition } from 'remotion';
import { TarotVideo, TarotVideoProps } from '../components/TarotVideo';
import { tarotCards } from '../data/tarotCards';

// Wrapper to adapt TarotVideo props for Remotion's Composition
const TarotVideoWrapper: React.FC<Record<string, unknown>> = (props) => {
  const { cardName, positionName, explanation, takeaway } = props as unknown as TarotVideoProps;
  return (
    <TarotVideo
      cardName={cardName}
      positionName={positionName}
      explanation={explanation}
      takeaway={takeaway}
    />
  );
};

export const RemotionRoot: React.FC = () => {
  const [firstCard] = tarotCards;

  return (
    <Composition
      id="TarotVideo"
      component={TarotVideoWrapper} // Use the wrapper component
      durationInFrames={1050}
      fps={30}
      width={1080}
      height={1920}
      defaultProps={firstCard as unknown as Record<string, unknown>} // Cast props to Record<string, unknown>
    />
  );
};

registerRoot(RemotionRoot);
