import { FC, useState, useRef, ReactNode } from "react";
import { ArrowIcon } from "./icons/icons";
import HoverGallery from "./HoverGallery";
import GridCanvas from "./GridCanvas";
import { THEMES } from "../constants/themes";

interface HiProps {
  dataKey: string;
  children: ReactNode;
  accent: string;
  ink: string;
  onEnter: (key: string, el: HTMLElement) => void;
  onLeave: () => void;
}

const Hi: FC<HiProps> = ({ dataKey, children, accent, ink, onEnter, onLeave }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [hovered, setHovered] = useState(false);

  return (
    <span
      ref={ref}
      className="hi-word"
      style={{ color: hovered ? accent : ink }}
      onMouseEnter={() => {
        setHovered(true);
        if (ref.current) onEnter(dataKey, ref.current);
      }}
      onMouseLeave={() => {
        setHovered(false);
        onLeave();
      }}
    >
      {children}
    </span>
  );
};

interface HeroProps {
  dark: boolean;
  t: typeof THEMES.light;
}

const Hero: FC<HeroProps> = ({ dark, t }) => {
  const [galleryKey, setGalleryKey] = useState<string | null>(null);
  const [galleryAnchor, setGalleryAnchor] = useState<HTMLElement | null>(null);

  const onHiEnter = (key: string, el: HTMLElement) => {
    setGalleryKey(key);
    setGalleryAnchor(el);
  };

  const onHiLeave = () => {
    setGalleryKey(null);
    setGalleryAnchor(null);
  };

  const hiProps = {
    accent: t.accent,
    ink: t.ink,
    onEnter: onHiEnter,
    onLeave: onHiLeave,
  };

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        padding: "80px 0 60px",
        width: "100%",
      }}
    >
      <GridCanvas dark={dark} />

      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          pointerEvents: "none",
          background: `radial-gradient(ellipse 80% 80% at 50% 50%, transparent 25%, ${t.bg} 100%)`,
          transition: "background 0.3s",
        }}
      />

      {galleryKey && <HoverGallery activeKey={galleryKey} anchorEl={galleryAnchor} dark={dark} />}

      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          maxWidth: 860,
          padding: "0 32px",
          width: "100%",
        }}
      >
        <p
          className="anim-fade-up-1"
          style={{
            fontSize: 10,
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            color: t.ink3,
            marginBottom: 36,
            fontWeight: 500,
          }}
        >
          Product Designer &amp; Strategist
        </p>

        <p
          className="anim-fade-up-2"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "clamp(15px, 2vw, 24px)",
            textWrap: "balance",
            maxWidth: 700,
            fontWeight: 300,
            lineHeight: 1.55,
            letterSpacing: "-0.01em",
            color: t.ink,
            transition: "color 0.3s",
          }}
        >
          <Hi dataKey="founding-designer" {...hiProps}>
            Founding Designer
          </Hi>{" "}
          at AgentAnalytics.AI (
          <span className="thub-wrap">
            T&#8209;Hub
            <span className="thub-note">
              <svg
                width="30"
                height="20"
                viewBox="0 0 30 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ transform: "scaleX(-1)" }}
              >
                <path d="M4 3 C7 5, 14 9, 18 15" stroke={t.accent} strokeWidth="1.5" strokeLinecap="round" />
                <path
                  d="M14 12.5 L18 15 L15.5 10.5"
                  stroke={t.accent}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span
                style={{
                  fontFamily: "'Caveat', cursive",
                  fontSize: 24,
                  fontWeight: 400,
                  color: t.accent,
                  lineHeight: 1.3,
                  textAlign: "left",
                  marginBottom: 3,
                  whiteSpace: "nowrap",
                }}
              >
                world's largest innovation center
              </span>
            </span>
          </span>
          ), and a <Hi dataKey="cat-mom" {...hiProps}>cat mom</Hi> based in <Hi dataKey="hyderabad" {...hiProps}>Hyderabad</Hi>, designing humanist AI experiences. Currently crafting AI experiences for <Hi dataKey="waveflowdb" {...hiProps}>WaveflowDB</Hi> and <Hi dataKey="waveflow-studio" {...hiProps}>Waveflow Studio</Hi>.
          <br />
          Previously shaped products at Hashira and PossibleWorks.
          <br />
          Passionate about working with startups to create magical experiences that drive growth.
        </p>

        <div
          className="anim-fade-up-3"
          style={{ marginTop: 44, display: "flex", gap: 16, alignItems: "center", justifyContent: "center" }}
        >
          <a
            href="#works"
            className="btn-primary"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("works")?.scrollIntoView({ behavior: "smooth" });
            }}
            style={{
              background: t.ink,
              color: t.bg,
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 12,
              fontWeight: 500,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              padding: "12px 28px",
              borderRadius: 40,
              border: "none",
              textDecoration: "none",
              display: "inline-block",
              transition: "background 0.2s, transform 0.2s",
            }}
          >
            View Work
          </a>
          <a
            href="#"
            className="btn-secondary"
            style={{
              fontSize: 13,
              color: t.ink3,
              textDecoration: "none",
              letterSpacing: "0.04em",
              display: "flex",
              alignItems: "center",
              gap: 6,
              transition: "color 0.2s",
            }}
          >
            About me <ArrowIcon />
          </a>
        </div>
      </div>

      <div
        className="anim-fade-up-4"
        style={{
          position: "absolute",
          bottom: 36,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        <div className="scroll-line" />
        <span style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: t.ink3 }}>
          Scroll to explore
        </span>
      </div>
    </section>
  );
};

export default Hero;
