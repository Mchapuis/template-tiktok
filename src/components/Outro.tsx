export const Outro: React.FC = () => {
    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to bottom, black, darkblue)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <p
          style={{
            color: 'white',
            fontSize: '1.5rem',
            textAlign: 'center',
            opacity: 0.8,
          }}
        >
          What do your cards reveal?
        </p>
      </div>
    );
  };
  