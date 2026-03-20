import { useState, FC } from "react";
import Lottie from "lottie-react";
import marutiAnimation from "./components/Mobile-app-showcase2.json";
import { THEMES } from "./constants/themes";
import FontLoader from "./styles/FontLoader";
import Cursor from "./components/Cursor";
import Navbar from "./components/navbar";
import Hero from "./components/Hero.tsx";
import { Routes, Route, useNavigate } from "react-router-dom";
import Project1 from "./pages/project1";
import Project2 from "./pages/Project2";
import { Link } from "react-router-dom";

/* â”€â”€ Gallery data */


/* â”€â”€ Main App  */
const App: FC = () => {
  const navigate = useNavigate();
  const [dark, setDark] = useState(false);
  const t = dark ? THEMES.dark : THEMES.light;

  // const iconLinkStyle: React.CSSProperties = {
  //   display: 'flex', alignItems: 'center', justifyContent: 'center',
  //   width: 36, height: 36, borderRadius: '50%',
  //   color: t.ink2, border: `1px solid ${t.border}`,
  //   transition: 'color 0.2s, border-color 0.2s, transform 0.2s',
  //   textDecoration: 'none',
  // };

  return (
  <Routes>
    <Route
      path="/"
      element={
        <div
          style={{
            background: t.bg,
            color: t.ink,
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 300,
            transition: "background 0.3s, color 0.3s",
            minHeight: "100vh",
            width: "100vw",
            maxWidth: "100vw",
            overflowX: "hidden",
            boxSizing: "border-box",
          }}
        >
          <FontLoader />

          <style>{`
            :root {
              --c-accent: ${t.accent};
              --c-ink: ${t.ink};
              --c-ink2: ${t.ink2};
              --c-ink3: ${t.ink3};
              --c-bg2: ${t.bg2};
              --c-btn: ${t.btn};
              --c-border: ${t.border};
            }
            .card-wrap .view-link {
              position: relative;
              padding-bottom: 4px;
            }
            .card-wrap .view-link::after {
              content: '';
              position: absolute;
              bottom: 0;
              left: 0;
              width: 0;
              height: 1px;
              background: ${t.ink};
              transition: width 0.35s ease;
            }
            .card-wrap:hover .view-link::after {
              width: 100%;
            }
            @keyframes card1-swing {
              0%   { left: 25%; top: 35.2%; opacity: 0; transform: scale(1); }
              8%   { left: 25%; top: 35.2%; opacity: 1; transform: scale(1); }
              50%  { left: 30%; top: 37%;   opacity: 1; transform: scale(1.7); }
              82%  { left: 40%; top: 35%;   opacity: 1; transform: scale(2.3);   }
              90%  { left: 40%; top: 35%;   opacity: 0; transform: scale(2.5);   }
              91%  { left: 25%; top: 35.2%; opacity: 0; transform: scale(2.7); }
              100% { left: 25%; top: 35.2%; opacity: 0; transform: scale(3); }
            }
            .card1-float {
              position: absolute;
              width: 13%;
              height: auto;
              pointer-events: none;
              animation: card1-swing 5s ease-in-out infinite;
            }
            @keyframes brushReveal {
              0%   { clip-path: inset(0% 100% 0% 0%); opacity: 0; }
              8%   { clip-path: inset(0% 100% 0% 0%); opacity: 1; }
              55%  { clip-path: inset(0% 0%   0% 0%); opacity: 1; }
              70%  { clip-path: inset(0% 0%   0% 0%); opacity: 0; }
              100% { clip-path: inset(0% 0%   0% 0%); opacity: 0; }
            }
            .card1-brush {
              position: absolute;
              top: 30%;
              left: 30%;
              width: 40%;
              height: auto;
              pointer-events: none;
              animation: brushReveal 5s ease-in-out infinite;
            }
          `}</style>

          <Cursor dark={dark} />

          <Navbar dark={dark} setDark={setDark} />

          <Hero dark={dark} t={t} />

          {/* WORKS */}
          <section
            id="works"
            style={{ padding: "120px 10vw", position: "relative", zIndex: 2 }}
          >
            <h2
              style={{
                fontFamily: "'Libre Baskerville', serif",
                fontSize: "clamp(28px, 3.5vw, 44px)",
                fontWeight: 400,
                fontStyle: "italic",
                color: t.ink,
                marginBottom: 72,
              }}
            >
              Selected Work
            </h2>

            {/* Project cards */}
            {[
              {
                num: "01",
                tags: "UX DESIGN, AI, PRODUCT DESIGN",
                title: "Workflow Studio",
                desc: "Designing AI experiences that enable anyone to automate workflows.",
                link: "/project-1",
                img: "/src/assets/project1.mp4",
              },
              {
                num: "02",
                tags: "UX DESIGN, AI, PRODUCT DESIGN",
                title: "Maruti –⁠ Service Experience",
                desc: `Reimagining servicing through improving
transparency, cross-selling, and service adoption.`,
                link: "/project-2",
                img: "/src/assets/Frame1-maruti.svg",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="card-wrap"
                onClick={() => navigate(card.link)}
                style={{
                  display: "grid",
                  gridTemplateColumns: i % 2 === 0 ? "1.1fr 0.9fr" : "0.9fr 1.1fr",
                  gap: 100,
                  alignItems: "center",
                  marginBottom: 96,
                  cursor: "pointer",
                }}
              >
                {/* Image */}
                {i % 2 === 0 && (
                  <div
                    style={{
                      borderRadius: 12,
                      overflow: "hidden",
                      background: i === 0 ? "#f5ede4" : t.btn,
                      aspectRatio: "4/3",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                    }}
                  >
                    {i === 0 ? (
                      <video
                        src={card.img}
                        autoPlay
                        loop
                        muted
                        playsInline
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          display: "block",
                        }}
                      />
                    ) : (
                      <Lottie
                        animationData={marutiAnimation}
                        loop
                        autoplay
                        style={{ width: "100%", height: "100%" }}
                      />
                    )}
                  </div>
                )}

                {/* Text */}
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" , ...(i % 2 !== 0 ? { alignItems: "flex-end", textAlign: "right" as const } : {}) }}>
                  <span
                    style={{
                      fontFamily: "'Libre Baskerville', serif",
                      fontStyle: "italic",
                      fontSize: "clamp(42px, 5vw, 64px)",
                      color: t.border,
                      fontWeight: 400,
                      lineHeight: 1,
                      marginBottom: 20,
                    }}
                  >
                    {card.num}
                  </span>
                  <p
                    style={{
                      fontSize: 12,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: t.ink3,
                      marginBottom: 12,
                      fontWeight: 500,
                    }}
                  >
                    {card.tags}
                  </p>
                  <h3
                    style={{
                      fontFamily: "'Libre Baskerville', serif",
                      fontStyle: "italic",
                      fontSize: "clamp(26px, 3vw, 38px)",
                      fontWeight: 400,
                      color: t.ink,
                      marginBottom: 14,
                      lineHeight: 1.3,
                    }}
                  >
                    {card.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 17,
                      color: t.ink2,
                      lineHeight: 1.6,
                      marginBottom: 28,
                      maxWidth: 380,
                      whiteSpace: "pre-line",
                    }}
                  >
                    {card.desc}
                  </p>
                  <Link
                    to={card.link}
                    className="view-link"
                    style={{
                      fontSize: 14,
                      color: t.ink,
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      width: "fit-content",
                    }}
                  >
                    View project <span style={{ fontSize: 16 }}>&rarr;</span>
                  </Link>
                </div>

                {/* Image for odd rows (right side) */}
                {i % 2 !== 0 && (
                  <div
                    style={{
                      borderRadius: 12,
                      overflow: "hidden",
                      background: t.btn,
                      aspectRatio: "4/3",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Lottie
                      animationData={marutiAnimation}
                      loop
                      autoplay
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                )}
              </div>
            ))}
          </section>
        </div>
      }
    />

    <Route path="/project-1" element={<Project1 />} />
    <Route path="/project-2" element={<Project2 />} />
  </Routes>
);
};

export default App;

