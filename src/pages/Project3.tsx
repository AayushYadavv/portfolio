import { CSSProperties, useEffect } from "react";
import { project1Styles as project1 } from "./project1/styles";
import HeroSection from "./project1/sections/HeroSection";

type IconName =
  | "role"
  | "timeline"
  | "team"
  | "platform"
  | "trophy"
  | "cloud"
  | "event"
  | "spark";

const stats = [
  {
    achievement: "Telangana & AP MSME AI Challenge",
    outcomeTitle: "Reached the final round and qualified among top teams",
    outcome: "Top 20 Finalist",
    accent: "#0ea5e9",
    icon: "trophy" as IconName,
  },
  {
    achievement: "AWS Grants",
    outcomeTitle: "Recognized among top startups for the solution",
    outcome: "$5,000 Credits",
    accent: "#f59e0b",
    icon: "cloud" as IconName,
  },
  {
    achievement: "MSME Event",
    outcomeTitle: "Our solution showcased by Shri Pramod Sawant",
    outcome: "Chief Minister of Goa",
    accent: "#10b981",
    icon: "event" as IconName,
  },
  {
    achievement: "Role",
    outcomeTitle: "Led the project and managed the team",
    outcome: "End-to-end solution development",
    accent: "#ec4899",
    icon: "spark" as IconName,
  },
];

const roleChips = [
  "UX Research",
  "UI Design",
  "Conversation Design",
  "Team Management",
  "Testing",
  "Documentation",
];

const floatingDot = (top: string, left: string, size: string): CSSProperties => ({
  position: "absolute",
  top,
  left,
  width: size,
  height: size,
  borderRadius: "999px",
  background: "rgba(43, 49, 143, 0.12)",
});

const Icon = ({
  name,
  color = "#334155",
  size = 16,
}: {
  name: IconName;
  color?: string;
  size?: number;
}) => {
  const common = {
    fill: "none",
    stroke: color,
    strokeWidth: 1.9,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (name === "role") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24">
        <circle cx="12" cy="8" r="3.2" {...common} />
        <path d="M5 19c1.7-3.1 4-4.6 7-4.6s5.3 1.5 7 4.6" {...common} />
      </svg>
    );
  }

  if (name === "timeline") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24">
        <rect x="4" y="5" width="16" height="15" rx="3" {...common} />
        <path d="M8 3v4M16 3v4M4 10h16" {...common} />
      </svg>
    );
  }

  if (name === "team") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24">
        <circle cx="9" cy="9" r="2.6" {...common} />
        <circle cx="16.5" cy="10.5" r="2.1" {...common} />
        <path d="M4.5 19c1.2-2.6 2.9-3.8 5.1-3.8S13.5 16.4 14.7 19" {...common} />
        <path d="M14 18.7c.8-1.7 2-2.5 3.6-2.5 1.1 0 1.9.4 2.6 1.3" {...common} />
      </svg>
    );
  }

  if (name === "platform") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24">
        <rect x="3.5" y="4.5" width="17" height="11" rx="2.2" {...common} />
        <path d="M9 19.5h6M12 15.7v3.8" {...common} />
      </svg>
    );
  }

  if (name === "trophy") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24">
        <path d="M7 5h10v3.4c0 2.9-2.2 5.2-5 5.2S7 11.3 7 8.4V5Z" {...common} />
        <path d="M7 7H4.8c0 2.5.8 4.1 3.2 4.6M17 7h2.2c0 2.5-.8 4.1-3.2 4.6M12 13.7V18M9 20h6" {...common} />
      </svg>
    );
  }

  if (name === "cloud") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24">
        <path d="M7.2 18h9.6a3.2 3.2 0 0 0 .4-6.3 5.1 5.1 0 0 0-9.8-1.6A3.7 3.7 0 0 0 7.2 18Z" {...common} />
      </svg>
    );
  }

  if (name === "event") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24">
        <rect x="4" y="5" width="16" height="15" rx="3" {...common} />
        <path d="M8 3v4M16 3v4M4 10h16M8 13h3M8 16h6" {...common} />
      </svg>
    );
  }

  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <path d="M12 3 14.6 8.4 20 9.2l-4 3.9 1 5.4-5-2.6-5 2.6 1-5.4-4-3.9 5.4-.8L12 3Z" {...common} />
    </svg>
  );
};

const Project3 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      style={{
        ...project1.page,
        backgroundColor: "#F9F9FB",
        color: "#20233f",
        fontFamily: "'Noto Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      <div style={project1.container}>
        <div style={{ position: "relative", isolation: "isolate" }}>
          <div
            style={{
              position: "absolute",
              width: "540px",
              height: "280px",
              left: "-60px",
              top: "-30px",
              borderRadius: "999px",
              pointerEvents: "none",
              zIndex: -1,
              background:
                "radial-gradient(circle at center, rgba(43, 49, 143, 0.11) 0%, rgba(43, 49, 143, 0.08) 36%, rgba(43, 49, 143, 0) 72%)",
            }}
          />
          <HeroSection
            tags="UX Design · AI · Government"
            title="MARGA - AI Chatbot for MSMEs"
            subtitle={
              "Helping small business owners discover, apply for, and track government schemes through a guided conversational experience."
            }
          />
        </div>

        <section style={{ marginTop: "4px", marginBottom: "42px", color: "#2d3155" }}>
          <div
            style={{
              fontSize: "12px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#888888",
              marginBottom: "14px",
            }}
          >
            Overview
          </div>
          <h2
            style={{
              margin: "0 0 14px",
              fontSize: "clamp(30px, 4vw, 44px)",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              color: "#24284f",
            }}
          >
            More than a chatbot - a guide, a friend, a path forward
          </h2>
          <p
            style={{
              margin: "0 0 22px",
              maxWidth: "70ch",
              color: "#4c5075",
              fontSize: "18px",
              lineHeight: 1.7,
            }}
          >
            Marga was imagined as a calm companion for business owners navigating a
            system that often feels too complex and too distant. Instead of asking
            people to decode policy documents, we designed an experience that listens,
            guides, and translates eligibility into clear next steps they can act on.
          </p>
          <blockquote
            style={{
              margin: 0,
              borderLeft: "2px solid #2B318F",
              paddingLeft: "16px",
              color: "#2d3155",
              fontSize: "17px",
              lineHeight: 1.75,
              maxWidth: "75ch",
              fontStyle: "normal",
            }}
          >
            India has 80+ MSME schemes. Most owners never benefit - not because
            they're ineligible, but because the system wasn't built for them.
          </blockquote>
        </section>

        <section style={{ marginBottom: "44px" }}>
          <h3
            style={{
              margin: "0 0 18px",
              fontSize: "28px",
              lineHeight: 1.25,
              color: "#24284f",
            }}
          >
            My Role
          </h3>

          <div className="overview-role-grid" style={{ display: "grid", gap: "20px" }}>
            <p
              style={{
                margin: 0,
                color: "#4c5075",
                fontSize: "17px",
                lineHeight: 1.75,
              }}
            >
              I led the project end-to-end over a focused two-week sprint, coordinating
              a team of six across AI, frontend, and product workstreams. My role
              centered on shaping the product direction, translating insights into
              UX decisions, and ensuring the final solution felt useful and human.
            </p>

            <div>
              <article
                style={{
                  background: "#ffffff",
                  borderRadius: "16px",
                  border: "1px solid rgba(43, 49, 143, 0.1)",
                  boxShadow: "0 12px 30px -24px rgba(43, 49, 143, 0.35)",
                  padding: "16px",
                  display: "grid",
                  gap: "10px",
                }}
              >
                {[
                  { label: "Role", value: "Project Lead" },
                  { label: "Team", value: "6 members" },
                  { label: "Duration", value: "2 Weeks" },
                  {
                    label: "Challenge",
                    value: "Telangana AI Rising Grand Challenge",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "110px 1fr",
                      columnGap: "10px",
                    }}
                  >
                    <span style={{ color: "#8a8da8", fontSize: "13px" }}>{item.label}</span>
                    <span style={{ color: "#2B318F", fontSize: "14px", fontWeight: 700 }}>
                      {item.value}
                    </span>
                  </div>
                ))}
              </article>

              <div
                style={{
                  marginTop: "12px",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                }}
              >
                {roleChips.map((chip) => (
                  <span
                    key={chip}
                    style={{
                      background: "#EEEFFA",
                      color: "#2B318F",
                      borderRadius: "999px",
                      border: "1px solid rgba(43, 49, 143, 0.12)",
                      padding: "6px 10px",
                      fontSize: "12px",
                      lineHeight: 1.2,
                    }}
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          style={{
            display: "grid",
            gap: "22px",
            marginTop: "0",
          }}
        >
          <div
            style={{
              display: "grid",
              padding: "26px",
              borderRadius: "24px",
              border: "1px solid rgba(43, 49, 143, 0.15)",
              background:
                "radial-gradient(750px 300px at -10% -20%, rgba(43, 49, 143, 0.11) 0%, transparent 60%), radial-gradient(700px 300px at 100% -25%, rgba(43, 49, 143, 0.08) 0%, transparent 56%), rgba(255,255,255,0.5)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
            }}
          >
            <div
              style={{
                borderRadius: "24px",
                border: "1px solid rgba(43, 49, 143, 0.2)",
                background:
                  "linear-gradient(145deg, #f3f5ff 0%, #eceffe 60%, #e7ebff 100%)",
                minHeight: "390px",
                position: "relative",
                overflow: "hidden",
                padding: "18px",
                display: "grid",
                alignContent: "center",
              }}
            >
              <div style={floatingDot("9%", "10%", "12px")} />
              <div style={floatingDot("15%", "80%", "9px")} />
              <div style={floatingDot("74%", "14%", "8px")} />

              <div
                style={{
                  margin: "0 auto",
                  width: "min(320px, 90%)",
                  borderRadius: "24px",
                  background: "rgba(255,255,255,0.68)",
                  padding: "12px",
                  boxShadow: "0 12px 30px rgba(43, 49, 143, 0.14)",
                  border: "1px solid rgba(43, 49, 143, 0.14)",
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                }}
              >
                <div
                  style={{
                    borderRadius: "18px",
                    background: "#f7f8ff",
                    border: "1px solid rgba(43, 49, 143, 0.14)",
                    padding: "12px",
                    display: "grid",
                    gap: "10px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "11px",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "#2B318F",
                      fontWeight: 700,
                    }}
                  >
                    Product Mockup Placeholder
                  </div>
                  <div
                    style={{
                      height: "22px",
                      width: "42%",
                      borderRadius: "999px",
                      background: "#EEEFFA",
                    }}
                  />
                  <div
                    style={{
                      justifySelf: "end",
                      height: "42px",
                      width: "62%",
                      borderRadius: "14px 14px 4px 14px",
                      background: "#e5e8ff",
                    }}
                  />
                  <div
                    style={{
                      height: "52px",
                      width: "76%",
                      borderRadius: "14px 14px 14px 4px",
                      background: "#EEEFFA",
                    }}
                  />
                  <div
                    style={{
                      height: "44px",
                      width: "68%",
                      justifySelf: "end",
                      borderRadius: "14px 14px 4px 14px",
                      background: "#dce2ff",
                    }}
                  />
                  <div
                    style={{
                      marginTop: "8px",
                      borderRadius: "10px",
                      border: "1px solid rgba(43, 49, 143, 0.14)",
                      background: "#fdfdff",
                      height: "40px",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
        style={{
          marginTop: "44px",
        }}
      >
        <h2
          style={{
            ...project1.sectionTitle,
            marginBottom: "18px",
            fontSize: "30px",
          }}
        >
          Achievements
        </h2>

        <div
          className="achievements-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            gap: "12px",
          }}
        >
        {stats.map((item) => (
          <article
            key={item.achievement}
            style={{
              borderRadius: "18px",
              border: "1px solid rgba(43, 49, 143, 0.12)",
              background: "#fcfcff",
              boxShadow: "0 16px 38px -34px rgba(43, 49, 143, 0.3)",
              padding: "14px",
              display: "grid",
              gap: "9px",
            }}
          >
            <div
              style={{
                height: "5px",
                borderRadius: "999px",
                background: item.accent,
                width: "50px",
              }}
            />
            <div
              style={{
                fontSize: "12px",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#64748b",
                fontWeight: 700,
                display: "inline-flex",
                alignItems: "center",
                gap: "7px",
              }}
            >
              <Icon name={item.icon} color="#475569" size={14} />
              {item.achievement}
            </div>
            <div
              style={{
                fontSize: "12px",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#94a3b8",
                fontWeight: 700,
              }}
            >
              {item.outcomeTitle}
            </div>
            <p
              style={{
                margin: 0,
                fontSize: "15px",
                lineHeight: 1.45,
                color: "#334155",
                fontWeight: 600,
              }}
            >
              {item.outcome}
            </p>
          </article>
        ))}
        </div>
        </section>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;700;800&display=swap');

        .overview-role-grid {
          grid-template-columns: 1.1fr 1fr;
          align-items: start;
        }

        @media (max-width: 900px) {
          .overview-role-grid {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 768px) {
          .achievements-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Project3;
