import { useCurrentFrame } from 'remotion';

interface TwistProps {
  takeaway: string;
}

export const Twist: React.FC<TwistProps> = ({ takeaway }) => {
  const frame = useCurrentFrame();
  const opacity = Math.min(1, frame / 30);

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
        color: 'gold',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '2.5rem',
        textAlign: 'center',
        opacity,
      }}
    >
      {takeaway}
    </div>
  );
};
