import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { IntroHook } from "./IntroHook";
import { CardExplanation } from "./CardExplanation";
import { Twist } from "./Twist";
import { TarotVideo } from "./TarotVideo";

export const TestComponents: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#1e1e1e" }}>
      {/* Test IntroHook */}
      <Sequence  durationInFrames={150}>
        <IntroHook cardName="TheLovers" positionName="Feelings" />
      </Sequence>

      {/* Test CardExplanation */}
      <Sequence from={150} durationInFrames={300}>
        <CardExplanation
          cardName="TheLovers"
          positionName="Feelings"
          explanation="The Lovers represents harmony and balance. In feelings, it signifies choices that lead to connection—or distance."
        />
      </Sequence>

      {/* Test Twist */}
      <Sequence from={450} durationInFrames={150}>
        <Twist takeaway="What choice are you avoiding?" />
      </Sequence>

      {/* Test TarotVideo */}
      <Sequence from={600} durationInFrames={300}>
        <TarotVideo
          cardName="TheTower"
          positionName="Future"
          explanation="The Tower indicates transformation and breakthroughs. Chaos leads to renewal."
          takeaway="What will you create from the ashes?"
        />
      </Sequence>
    </AbsoluteFill>
  );
};
