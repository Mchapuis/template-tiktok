import { useCurrentFrame, Img, staticFile } from 'remotion';

interface CardExplanationProps {
  cardName: string;
  positionName: string;
  explanation: string;
}

export const CardExplanation: React.FC<CardExplanationProps> = ({
  cardName,
  positionName,
  explanation,
}) => {
  const frame = useCurrentFrame();
  const words = explanation.split(' ');
  const visibleWords = Math.min(words.length, Math.floor(frame / 10));
  const myTarotCard = staticFile(`${cardName}.png`);

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
      width: "100%",
      backgroundColor: "black",
    }}>
      {/* Position Name and Explanation */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          width: "50%",
          textAlign: "center",
          color: "white",
        }}
      >
        {/* Position Name */}
        <h2
          style={{
            fontSize: "3rem",
            color: "#FFD700",
            textShadow: "2px 2px 10px black",
            marginBottom: "20px",
          }}
        >
          {positionName.toUpperCase()}
        </h2>

        {/* Explanation */}
        <p
          style={{
            fontSize: "2rem",
            lineHeight: "2.5rem",
            color: "white",
            textShadow: "1px 1px 5px black",
          }}
        >
          {words.slice(0, visibleWords).join(" ")}
        </p>
      </div>

      {/* Tarot Card */}
      <div
        style={{
          bottom: "10%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Img
          src={myTarotCard}
          alt={cardName}
          style={{
            height: "80%",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.4)",
            borderRadius: "10px",
          }}
        />
      </div>
    </div>
  );
};
