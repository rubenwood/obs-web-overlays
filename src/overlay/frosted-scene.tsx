export default function FrostedScene() {
  // This woiuld be the source stream
  const EMBED_URL = 'https://www.youtube.com/embed/kysSb10QDv8?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0'

  const blur = "blur(18px) saturate(1.3) brightness(1.1)";

  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        background: "transparent",
      }}
    >
      {/* Layer 1: the stream */}
      {/* <iframe
        src={EMBED_URL}
        allow="autoplay; encrypted-media"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          border: 0,
          pointerEvents: "none",
        }}
      /> */}

      {/* Layer 2: the frosted glass square */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "20%",
          width: 320,
          height: 320,
          borderRadius: 32,
          backdropFilter: blur,
          WebkitBackdropFilter: blur,
          background:
            "linear-gradient(135deg, rgba(255, 255, 255, 0.49), rgba(255, 255, 255, 0.49))",
          border: "1px solid rgba(255,255,255,0.4)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
        }}
      />
    </div>
  );
}
