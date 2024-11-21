import { Sequence } from 'remotion';
import { IntroHook } from './IntroHook';
import { CardExplanation } from './CardExplanation';
import { Twist } from './Twist';
import { Outro } from './Outro';

export interface TarotVideoProps {
  cardName: string;
  positionName: string;
  explanation: string;
  takeaway: string;
}

export const TarotVideo: React.FC<TarotVideoProps> = ({
  cardName,
  positionName,
  explanation,
  takeaway,
}) => {
  return (
    <>
      <Sequence  durationInFrames={150}>
        <IntroHook cardName={cardName} positionName={positionName} />
      </Sequence>
      <Sequence from={150} durationInFrames={600}>
        <CardExplanation
          cardName={cardName}
          positionName={positionName}
          explanation={explanation}
        />
      </Sequence>
      <Sequence from={750} durationInFrames={150}>
        <Twist takeaway={takeaway} />
      </Sequence>
      <Sequence from={900} durationInFrames={150}>
        <Outro />
      </Sequence>
    </>
  );
};
