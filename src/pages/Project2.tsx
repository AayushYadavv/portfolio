import { useEffect } from "react";
import frame1 from "../assets/Project2/Frame1.svg";
import carImg from "../assets/Project2/image3.png";
import aaaiLogo from "../assets/Project2/image2.png";
import image4 from "../assets/Project2/image4.png";
import image5 from "../assets/Project2/image5.png";
import image8 from "../assets/Project2/image8.png";
import imgConnectorDot from "../assets/Project2/connectordot.svg";
import imgArrow1 from "../assets/Project2/arrows/imgArrow1.png";
import imgArrow2 from "../assets/Project2/arrows/imgArrow2.png";
import imgArrow3 from "../assets/Project2/arrows/imgArrow3.png";
import imgArrow5 from "../assets/Project2/arrows/imgArrow5.png";
import imgArrow6 from "../assets/Project2/arrows/imgArrow6.png";
import imgArrow7 from "../assets/Project2/arrows/imgArrow7.png";
import imgArrow8 from "../assets/Project2/arrows/imgArrow8.png";
import imgArrow9 from "../assets/Project2/arrows/imgArrow9.png";
import imgArrow10 from "../assets/Project2/arrows/imgArrow10.png";
import imgArrow11 from "../assets/Project2/arrows/imgArrow11.png";

// UI Design Section Assetsb";

const imgSeeWhyIcon = "https://www.figma.com/api/mcp/asset/245be301-c9fb-459e-b52f-67f3272c71ab";
const imgCautionIcon = "https://www.figma.com/api/mcp/asset/dac11969-60a0-486b-b48c-a74db50aa326";
const imgTickCircle = "https://www.figma.com/api/mcp/asset/ead3a631-c469-4b08-af0a-17b0b3e790b1";
const aboutEllipse1 = "https://www.figma.com/api/mcp/asset/73c3973a-030a-4280-9b2f-a42cd05a6425";
const aboutEllipse2 = "https://www.figma.com/api/mcp/asset/4da45021-52db-4ab6-94f9-4945b624c25e";
const aboutEllipse9 = "https://www.figma.com/api/mcp/asset/47d73b95-d155-4041-a819-1e62cb50f96c";
const aboutEllipse5 = "https://www.figma.com/api/mcp/asset/05c85b87-e641-4494-8387-917ea67d5ce1";
import aboutIconTimeSaving from "../assets/Project2/icons/time.svg";
import aboutIconScalable from "../assets/Project2/icons/scalable.svg";
import aboutIconSelfGuided from "../assets/Project2/icons/guide.svg";
import aboutIconHumanCentered from "../assets/Project2/icons/human.svg";
import gauge1 from "../assets/Project2/gauge/image1.png";
import gauge2 from "../assets/Project2/gauge/image2.png";
import gauge3 from "../assets/Project2/gauge/image3.png";
import designProcess from "../assets/Project2/Part4-Design-Process.png";
import uxGoalsImg from "../assets/Project2/goals.png";
import uxFindingsImg from "../assets/Project2/findings.png";
import uxPainPointsImg from "../assets/Project2/pain-points.png";
import scanMockup from "../assets/Project2/scan-mockup.png";
import uiPage1 from "../assets/Project2/page1.png";
import uiPage2 from "../assets/Project2/page2.png";
import uiPage3 from "../assets/Project2/page3.png";
import uiPage4 from "../assets/Project2/page4.png";
import uiPage5 from "../assets/Project2/page5.png";
import uiPage6 from "../assets/Project2/page6.png";
import uiPage7 from "../assets/Project2/page7.png";
import chart3 from "../assets/Project2/chart3.svg";
import chart4 from "../assets/Project2/chart4.svg";

const Project2 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    const prev = document.body.style.cssText;
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.backgroundColor = "#0E0E0E";
    return () => {
      document.body.style.cssText = prev;
    };
  }, []);

  useEffect(() => {
    const images = Array.from(
      document.querySelectorAll<HTMLElement>(".ui-blue-card-image")
    );

    if (!images.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("ui-blue-card-image-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 }
    );

    images.forEach((image) => observer.observe(image));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const cards = Array.from(
      document.querySelectorAll<HTMLElement>(
        ".user-survey-parallax-card, .design-process-parallax-card, .ui-design-parallax-card"
      )
    );

    if (!cards.length) return;

    let frame = 0;

    const updateParallax = () => {
      const viewportCenter = window.innerHeight / 2;

      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const distanceFromCenter = cardCenter - viewportCenter;
        const speed = Number(card.dataset.parallaxSpeed ?? "0.38");
        const maxShift = Number(card.dataset.parallaxMax ?? "280");
        const shiftYRaw = -distanceFromCenter * speed;
        const shiftY = Math.max(-maxShift, Math.min(maxShift, shiftYRaw));

        card.style.transform = `translateY(${shiftY.toFixed(2)}px)`;
      });
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        updateParallax();
        frame = 0;
      });
    };

    updateParallax();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const glassCardStyle: React.CSSProperties = {
    background:
      "linear-gradient(180deg, rgba(18, 18, 18, 0.66) 0%, rgba(35, 35, 35, 0.66) 100%)",
    backdropFilter: "blur(2px)",
    WebkitBackdropFilter: "blur(2px)",
    border: "1px solid rgba(255,255,255,0.13)",
    boxShadow: "0 8px 32px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.08)",
    borderRadius: 15.254,
    overflow: "hidden",
  };

  const typography = {
    heading: {
      fontFamily: "'Montserrat','Inter',sans-serif",
    },
    body: {
      fontFamily: "'Inter',sans-serif",
    },
    accent: {
      fontFamily: "'Inter',sans-serif",
    },
  } as const;

  const layout = {
    // Match Project1 full-bleed content width: 900 + 24 + 24 = 948px
    targetContentWidth: 948,
    sectionScale1200: 948 / 1200,
    sectionScale1172: 948 / 1172,
    challengesHeight: Math.round((948 / 1200) * 900),
    uxResearchHeight: Math.round((948 / 1200) * 1431),
    userJourneyHeight: Math.round((948 / 1172) * 1000),
    uiDesignHeight: Math.round((948 / 1200) * 4922),
    userSurveyMinHeight: Math.round((948 / 1200) * 1220),
  } as const;

  const sectionHeadingTextStyle: React.CSSProperties = {
    fontSize: "24px",
    fontWeight: 600,
    fontFamily: typography.heading.fontFamily,
    background: "linear-gradient(to right, #ffffff, #7b95ff)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    display: "inline-block",
    whiteSpace: "nowrap",
  };

  const getScaledSectionHeadingStyle = (canvasScale: number): React.CSSProperties => ({
    ...sectionHeadingTextStyle,
    fontSize: `${24 / canvasScale}px`,
    lineHeight: `${28.141 / canvasScale}px`,
  });

  const styles = {
    page: {
      backgroundColor: "#0E0E0E",
      minHeight: "100vh",
      margin: 0,
      padding: 0,
      fontFamily: typography.body.fontFamily,
      color: "#ffffff",
      lineHeight: 1.7,
    } as React.CSSProperties,
    container: {
      maxWidth: "900px",
      margin: "0 auto",
      padding: "80px 24px",
    } as React.CSSProperties,
    tags: {
      fontSize: "13px",
      color: "#888888",
      letterSpacing: "0.5px",
      marginBottom: "24px",
      fontWeight: 400,
    } as React.CSSProperties,
    title: {
      fontSize: "clamp(42px, 6vw, 64px)",
      fontWeight: 700,
      marginBottom: "24px",
      letterSpacing: "-1.5px",
      lineHeight: 1.1,
      color: "#ffffff",
    } as React.CSSProperties,
    subtitle: {
      fontSize: "20px",
      color: "#a0a0a0",
      fontWeight: 400,
      lineHeight: 1.6,
      marginBottom: "80px",
      whiteSpace: "pre-line" as const,
    } as React.CSSProperties,
    imageContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "40px",
    } as React.CSSProperties,
  };

  return (
      <div style={styles.page}>
      <style>{`
        .ui-blue-card-image {
          opacity: 0;
          transform: translateY(120px);
          transition: transform 800ms cubic-bezier(0.22, 1, 0.36, 1), opacity 650ms ease-out;
          will-change: transform, opacity;
        }

        .ui-blue-card-image.ui-blue-card-image--from-top {
          transform: translateY(-120px);
        }

        .ui-blue-card-image.ui-blue-card-image-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
      <div style={styles.container}>
        <div style={styles.tags}>UX Design · AI · Product Design</div>
        <h1 style={styles.title}>Crafting Smart Servicing Experience for Maruti</h1>
        <p style={styles.subtitle}>
          {`Reimagining vehicle servicing through giving health insights, enabling cross-selling, and increasing in-app adoption for Maruti Suzuki's mobile app.`}
        </p>

        <div style={styles.imageContainer}>
          <img
            src={frame1}
            alt="Vehicle Health Report mockup"
            style={{
              maxWidth: "320px",
              width: "100%",
              filter: "drop-shadow(0 32px 80px rgba(0,0,0,0.7))",
            }}
          />
        </div>
      </div>

      {/* Overview Section */}
      <div style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#0E0E0E",
        padding: "80px 0 100px",
      }}>
        {/* Car background image */}
        <img
          src={carImg}
          alt=""
          style={{
            position: "absolute",
            right: "10%",
            top: "110px",
            width: "32%",
            height: "auto",
            opacity: 0.72,
            pointerEvents: "none",
          }}
        />
        {/* AgentAnalytics logo */}
        <img
          src={aaaiLogo}
          alt=""
          style={{
            position: "absolute",
            left: "0px",
            top: "150px",
            width: "240px",
            pointerEvents: "none",
          }}
        />
        {/* Content */}
        <div style={{ position: "relative", zIndex: 1, maxWidth: "900px", margin: "0 auto", padding: "0 24px" }}>
          {/* Overview heading with gradient */}
          <h2 style={{
            ...sectionHeadingTextStyle,
            marginBottom: "48px",
          }}>
            Overview
          </h2>
          {/* Paragraph 1 */}
          <p style={{
            fontSize: "clamp(15px, 1.5vw, 21px)",
            fontWeight: 300,
            color: "#898989",
            textAlign: "center",
            lineHeight: 1.65,
            letterSpacing: "-0.02em",
            maxWidth: "711px",
            margin: "0 auto 48px",
          }}>
            This project was executed at{" "}
            <span style={{ color: "#ffffff" }}>AgentAnalytics.AI</span>
            {" "}as a strategic{" "}
            <span style={{ color: "#ffffff" }}>Proof of Concept (POC) for Maruti.</span>
            {" "}The core objective of this POC was to explore how AI-powered recommendations,{" "}
            <span style={{ color: "#ffffff" }}>driven by WaveflowDB (AgentAnalytics' Vector Database), combined with an intuitive UI layer</span>
            , could enable structured cross-selling within Maruti Suzuki's vehicle servicing journey to increase service acceptance, encourage{" "}
            <span style={{ color: "#ffffff" }}>bundled maintenance, and optimize in-app revenue realization.</span>
          </p>
          {/* Paragraph 2 */}
          <p style={{
            fontSize: "clamp(15px, 1.5vw, 21px)",
            fontWeight: 300,
            color: "#898989",
            textAlign: "center",
            lineHeight: 1.65,
            letterSpacing: "-0.02em",
            maxWidth: "711px",
            margin: "0 auto",
          }}>
            Following successful design and technical validation,{" "}
            <span style={{ color: "#ffffff" }}>the POC received approval,</span>
            {" "}establishing Maruti as an enterprise client and opening the pathway for extended collaboration.
          </p>
        </div>
      </div>

      {/* About Project Section */}
      <div style={{
        backgroundColor: "#0E0E0E",
        padding: "80px 0 0px",
        fontFamily: typography.body.fontFamily,
      }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 24px" }}>
        {/* About Project heading */}
        <h2 style={{
          ...sectionHeadingTextStyle,
          marginBottom: "40px",
        }}>
          About Project
        </h2>

        {/* Two-column: headline left, description right */}
        <div style={{ display: "flex", flexDirection: "column", gap: "32px", marginBottom: "80px" }}>
          <div>
            <p style={{
              fontSize: "clamp(24px, 2.8vw, 36px)",
              fontWeight: 600,
              fontFamily: typography.heading.fontFamily,
              color: "#ffffff",
              lineHeight: 1.28,
              letterSpacing: "-0.72px",
              margin: 0,
            }}>
              AI-driven{" "}
              <span style={{ color: "#787878" }}>car</span>
              {" "}health insights{" "}
              <span style={{ color: "#787878" }}>enabling</span>
              {" "}transparent, confident, and seamless car service bookings
            </p>
          </div>
          <div>
            <p style={{
              fontSize: "clamp(14px, 1.4vw, 21px)",
              fontWeight: 300,
              color: "#787878",
              lineHeight: 1.65,
              letterSpacing: "-0.02em",
              margin: 0,
            }}>
              This project focuses on improving the car servicing experience within the{" "}
              <span style={{ color: "#ffffff" }}>Maruti Suzuki</span>
              {" "}mobile app by introducing an intelligent vehicle health report and a guided service booking flow. The solution helps users understand their car's condition, identify critical and preventive services, and make confident booking decisions through{" "}
              <span style={{ color: "#ffffff" }}>personalized recommendations, transparent pricing, and a seamless in-app experience.</span>
            </p>
          </div>
        </div>

        </div>{/* end text container */}

        {/* Feature icons with glow arc â€” full width, no grid constraint */}
        <div style={{
          position: "relative",
          height: "420px",
          overflow: "hidden",
        }}>
          {/* Ellipse glow 1 */}
          <img src={aboutEllipse1} alt="" style={{
            position: "absolute",
            left: "50%",
            top: "-10%",
            transform: "translateX(-50%)",
            width: "100%",
            pointerEvents: "none",
          }} />
          {/* Ellipse glow 2 */}
          <img src={aboutEllipse2} alt="" style={{
            position: "absolute",
            left: "50%",
            bottom: "-30%",
            transform: "translateX(-50%)",
            width: "100%",
            pointerEvents: "none",
          }} />

          {/* Scalable â€” top center-left */}
          <div style={{ position: "absolute", left: "30%", top: "80px", display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
            <img src={aboutEllipse9} alt="" style={{ width: "72px", height: "72px" }} />
            <img src={aboutIconScalable} alt="scalable" style={{ position: "absolute", top: "8px", width: "56px", height: "56px", objectFit: "contain" }} />
            <span style={{ color: "#ffffff", fontSize: "21px", fontWeight: 300, fontFamily: typography.body.fontFamily, letterSpacing: "-0.02em", marginTop: "8px" }}>Scalable</span>
          </div>

          {/* Self-guided â€” top center-right */}
          <div style={{ position: "absolute", left: "56%", top: "80px", display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
            <img src={aboutEllipse9} alt="" style={{ width: "72px", height: "72px" }} />
            <img src={aboutIconSelfGuided} alt="self-guided" style={{ position: "absolute", top: "8px", width: "56px", height: "56px", objectFit: "contain" }} />
            <span style={{ color: "#ffffff", fontSize: "21px", fontWeight: 300, fontFamily: typography.body.fontFamily, letterSpacing: "-0.02em", marginTop: "8px" }}>Self-guided</span>
          </div>

          {/* Time Saving â€” bottom left */}
          <div style={{ position: "absolute", left: "8%", top: "220px", display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
            <img src={aboutEllipse5} alt="" style={{ width: "72px", height: "72px" }} />
            <img src={aboutIconTimeSaving} alt="time saving" style={{ position: "absolute", top: "8px", width: "56px", height: "56px", objectFit: "contain" }} />
            <span style={{ color: "#ffffff", fontSize: "21px", fontWeight: 300, fontFamily: typography.body.fontFamily, letterSpacing: "-0.02em", marginTop: "8px" }}>Time Saving</span>
          </div>

          {/* Human Centered â€” bottom right */}
          <div style={{ position: "absolute", right: "8%", top: "220px", display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
            <img src={aboutEllipse5} alt="" style={{ width: "72px", height: "72px" }} />
            <img src={aboutIconHumanCentered} alt="human centered" style={{ position: "absolute", top: "8px", width: "56px", height: "56px", objectFit: "contain" }} />
            <span style={{ color: "#ffffff", fontSize: "21px", fontWeight: 300, fontFamily: typography.body.fontFamily, letterSpacing: "-0.02em", marginTop: "8px" }}>Human Centered</span>
          </div>
        </div>

        {/* Bottom quote */}
        <div style={{ position: "relative" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{
          backgroundColor: "#0E0E0E",
          padding: "60px 0 80px",
        }}>
          <p style={{
            fontSize: "clamp(22px, 2.8vw, 36px)",
            fontWeight: 600,
            fontFamily: typography.heading.fontFamily,
            lineHeight: 1.28,
            letterSpacing: "-0.72px",
            margin: 0,
            maxWidth: "788px",
          }}>
            <span style={{ color: "#787878" }}>Create a sleek user interface that embodies </span>
            <span style={{ color: "#ffffff" }}>simplicity, reliability </span>
            <span style={{ color: "#787878" }}>and effortless </span>
            <span style={{ color: "#ffffff" }}>car servicing.</span>
          </p>
        </div>
        </div>{/* end bottom quote text container */}
        <img
          src={image4}
          alt=""
          style={{
            position: "absolute",
            top: 5,
            right: 0,
            maxWidth: "30%",
            height: "auto",
            pointerEvents: "none",
          }}
        />
        </div>{/* end relative wrapper */}
      </div>

      {/* Design Process Section */}
      <div style={{ backgroundColor: "#0E0E0E", padding: "80px 0 60px" }}>
        {/* Section heading */}
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 24px", marginBottom: "40px" }}>
          <h2 style={{
            ...sectionHeadingTextStyle,
            margin: 0,
          }}>Design Process</h2>
        </div>

        {/* 1200Ã—1200 canvas scaled to 0.9, bg = Part4-Design-Process.png, cards on top */}
        <div style={{ position: "relative", height: "1100px", overflow: "hidden" }}>
          <div style={{
            position: "absolute",
            left: "50%",
            marginLeft: "-600px",
            top: 0,
            width: "1200px",
            height: "1200px",
            transform: "scale(0.9)",
            transformOrigin: "top center",
          }}>

            {/* Background image */}
            <img src={designProcess} alt="Design Process" style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: "1200px",
              height: "1200px",
              objectFit: "cover",
              pointerEvents: "none",
            }} />

            {/* Cards overlaid on top */}
            {([
              { label: "Define",      duration: "3d", left: 443,   top: 96,  tags: ["Business Goals","Problem Framing","Scope Definition","Success Criteria"] },
              { label: "Research",    duration: "4d", left: 834.5, top: 500,  tags: ["Current Flow Audit","Persona","Friction Point Identification"] },
              { label: "Design",      duration: "6d", left: 779,   top: 908,  tags: ["User Flow","Feature Prioritization","UX Strategy","Interaction Design"] },
              { label: "Prototyping", duration: "9d", left: 116,   top: 908,  tags: ["UI Stags","High-Fidelity Mockups","Design Language","Interaction Design"] },
              { label: "Deliver",     duration: "4d", left: 40,    top: 500,  tags: ["UI Stags","High-Fidelity Mockups","Design Language","Interaction Design"] },
            ] as const).map((card, index) => (
              <div
                key={card.label}
                className="design-process-parallax-card"
                data-parallax-speed={[0.22, 0.3, 0.26, 0.24, 0.2][index]}
                style={{
                position: "absolute",
                left: card.left,
                top: card.top,
                width: "314px",
                background: "linear-gradient(135deg, rgba(48,49,111,0.50) 0%, rgba(22,22,40,0.50) 100%)",
                backdropFilter: "blur(2px)",
                WebkitBackdropFilter: "blur(2px)",
                border: "1px solid rgba(255,255,255,0.13)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.08)",
                borderRadius: 21,
                padding: "21px 18px 24px",
                willChange: "transform",
              }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 48 }}>
                  <span style={{ fontSize: 21, fontWeight: 500, color: "#fff", fontFamily: typography.heading.fontFamily }}>{card.label}</span>
                  <span style={{ fontSize: 21, fontWeight: 300, color: "#fff", fontFamily: typography.heading.fontFamily }}>{card.duration}</span>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 6 }}>
                  {card.tags.map(t => (
                    <span key={t} style={{ border: "0.2px solid rgba(229,231,235,0.7)", borderRadius: 18, padding: "2px 12px", fontSize: 13, color: "#fff", fontFamily: typography.heading.fontFamily, fontWeight: 300, letterSpacing: "-0.26px", whiteSpace: "nowrap" as const }}>{t}</span>
                  ))}
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>

      {/* image5 â€” full-bleed, Project1 carousel layout */}
      <div style={{ backgroundColor: "#0E0E0E", padding: "0 0 80px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 24px" }}>
          <div style={{
            marginLeft: "-24px",
            marginRight: "-24px",
            width: "calc(100% + 48px)",
          }}>
            <img
              src={image5}
              alt=""
              style={{
                width: "100%",
                display: "block",
                borderRadius: "4px",
                boxShadow: "0 4px 40px rgba(0,0,0,0.5)",
              }}
            />
          </div>
        </div>
      </div>

      {/* Challenges / Problem / Solutions Section */}
      <div style={{ backgroundColor: "#0E0E0E", padding: "80px 0 60px" }}>
        {/* Fixed 1200Ã—900px Figma canvas */}
        <div style={{ position: "relative", height: `${layout.challengesHeight}px`, overflow: "hidden" }}>
          <div style={{
            position: "absolute",
            left: "50%",
            marginLeft: "-600px",
            top: 0,
            width: "1200px",
            height: "900px",
            transform: `scale(${layout.sectionScale1200})`,
            transformOrigin: "top center",
          }}>

            {/* Challenges heading */}
            <div style={{ position: "absolute", left: "30px", top: "68px" }}>
              <span style={getScaledSectionHeadingStyle(layout.sectionScale1200)}>Challenges</span>
            </div>

            {/* Challenges description */}
            <p style={{
              position: "absolute", left: "73px", top: "127px", width: "711px",
              fontSize: "21px", fontWeight: 300,
              fontFamily: typography.body.fontFamily,
              color: "#787878", lineHeight: "24.52px",
              letterSpacing: "-0.42px", margin: 0,
            }}>
              The current service booking flow is transactional and lacks transparency.<br />
              Users can schedule an appointment, but they cannot view vehicle health insights, understand service urgency, see pricing breakdowns, or receive recommendations based on their reported issues.
            </p>

            {/* Problem heading */}
            <div style={{ position: "absolute", left: "30px", top: "304px" }}>
              <span style={getScaledSectionHeadingStyle(layout.sectionScale1200)}>Problems</span>
            </div>

            {/* Problem cards â€” render highlighted first (lower z) then regular cards on top... */}
            {/* Actually highlighted card is taller/different, render in DOM order left to right */}

            {/* Problem card 1 â€” No visibility */}
            <div style={{
              position: "absolute", left: "72px", top: "367px",
              width: "194.312px", height: "142px",
              ...glassCardStyle,
            }}>
              <p style={{ position: "absolute", left: "19px", top: "33px", width: "142px", fontSize: "16px", fontFamily: typography.heading.fontFamily, fontWeight: 400, color: "#fff", lineHeight: "28.14px", margin: 0 }}>No visibility into vehicle health status</p>
            </div>

            {/* Problem card 2 â€” No service recommendations */}
            <div style={{
              position: "absolute", left: "282.59px", top: "367px",
              width: "194.312px", height: "142px",
              ...glassCardStyle,
            }}>
              <p style={{ position: "absolute", left: "19px", top: "33px", width: "157px", fontSize: "16px", fontFamily: typography.heading.fontFamily, fontWeight: 400, color: "#fff", lineHeight: "28.14px", margin: 0 }}>No service recommendations based on issues</p>
            </div>

            {/* Problem card 3 â€” Low user retention */}
            <div style={{
              position: "absolute", left: "493.18px", top: "367px",
              width: "194.312px", height: "142px",
              ...glassCardStyle,
            }}>
              <p style={{ position: "absolute", left: "19px", top: "33px", width: "168px", fontSize: "16px", fontFamily: typography.heading.fontFamily, fontWeight: 400, color: "#fff", lineHeight: "28.14px", margin: 0 }}>Low user retention within app</p>
            </div>

            {/* Problem card 4 â€” Limited cross-selling (highlighted, taller) */}
            <div style={{
              position: "absolute", left: "703.77px", top: "324px",
              width: "206.52px", height: "227px",
              ...glassCardStyle,
            }}>
              <div style={{ position: "absolute", left: "18px", top: "23px", width: "40px", height: "40px", borderRadius: "320px", overflow: "hidden" }}>
                <img src={imgCautionIcon} alt="" style={{ width: "100%", height: "100%", display: "block" }} />
              </div>
              <p style={{ position: "absolute", left: "19px", top: "94px", width: "168px", fontSize: "16px", fontFamily: typography.heading.fontFamily, fontWeight: 400, color: "#ef4444", lineHeight: "28.14px", margin: 0 }}>Limited cross-selling opportunities within app</p>
            </div>

            {/* Problem card 5 â€” Lack of transparent pricing */}
            <div style={{
              position: "absolute", left: "926.57px", top: "367px",
              width: "201.434px", height: "142px",
              ...glassCardStyle,
            }}>
              <p style={{ position: "absolute", left: "19px", top: "33px", width: "157px", fontSize: "16px", fontFamily: typography.heading.fontFamily, fontWeight: 400, color: "#fff", lineHeight: "28.14px", margin: 0 }}>Lack of transparent pricing breakdown</p>
            </div>

            {/* Solutions heading */}
            <div style={{ position: "absolute", left: "30px", top: "598px" }}>
              <span style={getScaledSectionHeadingStyle(layout.sectionScale1200)}>Solutions</span>
            </div>

            {/* Solution card 1 â€” AI-driven vehicle health insights (highlighted, taller) */}
            <div style={{
              position: "absolute", left: "72px", top: "658px",
              width: "206.52px", height: "227px",
              ...glassCardStyle,
            }}>
              <div style={{ position: "absolute", left: "18px", top: "34px", width: "30px", height: "30px" }}>
                <img src={imgTickCircle} alt="" style={{ width: "100%", height: "100%", display: "block" }} />
              </div>
              <p style={{ position: "absolute", left: "21px", top: "94px", width: "168px", fontSize: "16px", fontFamily: typography.heading.fontFamily, fontWeight: 400, color: "#10b981", lineHeight: "28.14px", margin: 0 }}>AI-driven vehicle health insights</p>
            </div>

            {/* Solution card 2 â€” Categorized services */}
            <div style={{
              position: "absolute", left: "294.8px", top: "701px",
              width: "194.312px", height: "142px",
              ...glassCardStyle,
            }}>
              <p style={{ position: "absolute", left: "19px", top: "33px", width: "157px", fontSize: "16px", fontFamily: typography.heading.fontFamily, fontWeight: 400, color: "#fff", lineHeight: "28.14px", margin: 0 }}>Categorized services by urgency</p>
            </div>

            {/* Solution card 3 â€” Loyalty points */}
            <div style={{
              position: "absolute", left: "505.39px", top: "691px",
              width: "194.312px", height: "142px",
              ...glassCardStyle,
            }}>
              <p style={{ position: "absolute", left: "19px", top: "33px", width: "168px", fontSize: "16px", fontFamily: typography.heading.fontFamily, fontWeight: 400, color: "#fff", lineHeight: "28.14px", margin: 0 }}>Loyalty points and Free ancillary services</p>
            </div>

            {/* Solution card 4 â€” AI-powered cart add-ons */}
            <div style={{
              position: "absolute", left: "715.98px", top: "691px",
              width: "201.434px", height: "142px",
              ...glassCardStyle,
            }}>
              <p style={{ position: "absolute", left: "19px", top: "33px", width: "157px", fontSize: "16px", fontFamily: typography.heading.fontFamily, fontWeight: 400, color: "#fff", lineHeight: "28.14px", margin: 0 }}>AI-powered cart-based service add-ons</p>
            </div>

            {/* Solution card 5 â€” Transparent pricing */}
            <div style={{
              position: "absolute", left: "933.69px", top: "691px",
              width: "194.312px", height: "142px",
              ...glassCardStyle,
            }}>
              <p style={{ position: "absolute", left: "19px", top: "33px", width: "142px", fontSize: "16px", fontFamily: typography.heading.fontFamily, fontWeight: 400, color: "#fff", lineHeight: "28.14px", margin: 0 }}>Offer transparent pricing with clear cost breakdowns</p>
            </div>

          </div>
        </div>
      </div>
      {/* User Research Section */}
      <div style={{ backgroundColor: "#0E0E0E", padding: "60px 0 80px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 24px" }}>
          {/* Section title */}
          <h2 style={{
            ...sectionHeadingTextStyle,
            marginBottom: "48px",
          }}>
            User Research
          </h2>

          {/* Gauges row */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "24px" }}>
            {([
              { src: gauge1, alt: "Score 72", label: "Preferred calling service center instead of using the app." },
              { src: gauge2, alt: "Score 63", label: "Found booking flow lacked guidance and transparency." },
              { src: gauge3, alt: "Score 51", label: "Visited non-Maruti service centers for repairs." },
            ] as const).map((item) => (
              <div key={item.alt} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
                <img src={item.src} alt={item.alt} style={{ width: "100%", maxWidth: "260px", height: "auto", display: "block" }} />
                <p style={{
                  fontSize: "clamp(14px, 1.4vw, 18px)", fontWeight: 400,
                  fontFamily: typography.body.fontFamily,
                  color: "#ffffff", lineHeight: 1.5,
                  textAlign: "center", margin: 0,
                }}>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* UX Research â€” Figma frame 363-2249, 1200Ã—1431px canvas */}
      <div style={{ backgroundColor: "#0E0E0E", padding: "80px 0 60px" }}>
        <div style={{ position: "relative", height: `${layout.uxResearchHeight}px`, overflow: "hidden" }}>
          <div style={{
            position: "absolute",
            left: "50%",
            marginLeft: "-600px",
            top: 0,
            width: "1200px",
            height: "1431px",
            transform: `scale(${layout.sectionScale1200})`,
            transformOrigin: "top center",
          }}>

            {/* â”€â”€ Images â”€â”€ */}
            {/* Goals image â€” top right */}
            <div style={{ position: "absolute", left: "644px", top: "79px", width: "484px", height: "418px", borderRadius: "22.73px", overflow: "hidden" }}>
              <img src={uxGoalsImg} alt="Research Goals" style={{ width: "484px", height: "418px", objectFit: "cover", display: "block" }} />
            </div>

            {/* Findings image â€” middle left */}
            <div style={{ position: "absolute", left: "72px", top: "468px", width: "539px", height: "431px", borderRadius: "22.73px", overflow: "hidden" }}>
              <img src={uxFindingsImg} alt="Key Findings" style={{ width: "539px", height: "431px", objectFit: "cover", display: "block" }} />
            </div>

            {/* Pain-points image â€” bottom right */}
            <div style={{ position: "absolute", left: "644px", top: "1086px", width: "484px", height: "345px", borderRadius: "22.73px", overflow: "hidden" }}>
              <img src={uxPainPointsImg} alt="Pain Points" style={{ width: "484px", height: "345px", objectFit: "cover", display: "block" }} />
            </div>

            {/* â”€â”€ Glass cards â”€â”€ */}
            {/* Research Goals card â€” top left */}
            <div style={{
              position: "absolute", left: "72px", top: "79px", width: "539px", height: "357px",
              ...glassCardStyle, color: "#ffffff",
            }}>
              <p style={{ position: "absolute", left: "39.95px", top: "39.95px", margin: 0, fontSize: "30.345px", fontWeight: 600, fontFamily: typography.heading.fontFamily, lineHeight: "42.697px", whiteSpace: "nowrap" }}>Research Goals</p>
              <p style={{ position: "absolute", left: "39.95px", top: "104.95px", width: "406px", margin: 0, fontSize: "20px", fontWeight: 400, fontFamily: typography.heading.fontFamily, lineHeight: "36px", color: "#ffffff" }}>
                Aimed to design a transparent, self-guided, and AI-assisted vehicle service experience that reduces advisor dependency and increases in-app engagement.
              </p>
            </div>

            {/* Key Findings card â€” middle right */}
            <div style={{
              position: "absolute", left: "644px", top: "529px", width: "484px", height: "525px",
              ...glassCardStyle, color: "#ffffff",
            }}>
              <p style={{ position: "absolute", left: "39.95px", top: "39.95px", margin: 0, fontSize: "30.345px", fontWeight: 600, fontFamily: typography.heading.fontFamily, lineHeight: "42.697px", whiteSpace: "nowrap" }}>Key Findings</p>
              <ul style={{ position: "absolute", left: "39.95px", top: "106.95px", width: "443px", margin: 0, padding: 0, paddingLeft: "24px", fontSize: "20px", fontWeight: 400, fontFamily: typography.heading.fontFamily, color: "#ffffff", listStyleType: "disc" }}>
                {["Users lacked vehicle health visibility","No clarity on service urgency","Absence of pricing transparency","No personalized service recommendations","No reward system to encourage rebooking"].map(item => (
                  <li key={item} style={{ lineHeight: "48px" }}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Pain Points card â€” bottom left */}
            <div style={{
              position: "absolute", left: "72px", top: "933px", width: "539px", height: "498px",
              ...glassCardStyle, color: "#ffffff",
            }}>
              <p style={{ position: "absolute", left: "39.95px", top: "39.95px", margin: 0, fontSize: "30.345px", fontWeight: 600, fontFamily: typography.heading.fontFamily, lineHeight: "42.697px", whiteSpace: "nowrap" }}>Pain Points Identification</p>
              <ul style={{ position: "absolute", left: "39.95px", top: "106.95px", width: "443px", margin: 0, padding: 0, paddingLeft: "24px", fontSize: "20px", fontWeight: 400, fontFamily: typography.heading.fontFamily, color: "#ffffff", listStyleType: "disc" }}>
                {["Empty and transactional booking flow","No health-based service guidance","High dependency on service advisors","Low incentive to return to the app","Limited cross-sell integration","Time-consuming and unclear process"].map(item => (
                  <li key={item} style={{ lineHeight: "48px" }}>{item}</li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
      {/* Scan Mockup Section */}
      <div style={{ backgroundColor: "#0E0E0E", padding: "80px 0" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 24px" }}>
          <div style={{ marginLeft: "-24px", marginRight: "-24px", width: "calc(100% + 48px)" }}>
            <img
              src={scanMockup}
              alt="Scan Mockup"
              style={{
                width: "100%",
                display: "block",
                borderRadius: "4px",
              }}
            />
          </div>
        </div>
      </div>
      {/* User Journey Section â€” 1172Ã—1000px canvas */}
      <div style={{ backgroundColor: "#0E0E0E", padding: "80px 0 60px" }}>
        <div style={{ position: "relative", height: `${layout.userJourneyHeight}px`, overflow: "hidden" }}>
          <div style={{
            position: "absolute",
            left: "50%",
            marginLeft: "-586px",
            top: 0,
            width: "1172px",
            height: "1000px",
            transform: `scale(${layout.sectionScale1172})`,
            transformOrigin: "top center",
          }}>

            {/* Title */}
            <div style={{ position: "absolute", left: "72px", top: "63px", whiteSpace: "nowrap" }}>
              <span style={getScaledSectionHeadingStyle(layout.sectionScale1172)}>User Journey</span>
            </div>

            {/* Description */}
            <p style={{
              position: "absolute", left: "72px", top: "135px", width: "624px", margin: 0,
              fontSize: "21.017px", fontWeight: 300, fontFamily: typography.body.fontFamily,
              color: "#787878", lineHeight: "24.52px", letterSpacing: "-0.42px",
            }}>
              Mapping each interaction to create a seamless, guided service experience that increases clarity, confidence, and in-app engagement.
            </p>

            {/* Header row â€” purple */}
            {([
              { label: "Stage",         left: 72  },
              { label: "User Actions",  left: 246 },
              { label: "User Thoughts", left: 420 },
              { label: "User Feelings", left: 594 },
              { label: "Touchpoints",   left: 768 },
              { label: "Oppotunities",  left: 942 },
            ] as const).map(col => (
              <div key={col.label} style={{
                position: "absolute", left: col.left, top: 290,
                width: 158, height: 102,
                backgroundColor: "#2f00bb",
                borderRadius: "8px", overflow: "hidden",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <span style={{ fontSize: "20px", fontWeight: 400, fontFamily: typography.body.fontFamily, color: "#ffffff", textAlign: "center" }}>{col.label}</span>
              </div>
            ))}

            {/* Data rows */}
            {([
              {
                top: 409, height: 92,
                gradient: "linear-gradient(70.11deg, rgba(129,154,255,0.19) 0%, rgba(153,153,153,0.19) 100%)",
                cells: ["Awareness", "Realizes car needs servicing or sees health notification in app", '"I should get this checked before it gets worse."', "Slight concern / Uncertainty", "Push notification, Home screen, Health Insights", "Highlight urgency level and show health score clearly."],
              },
              {
                top: 521, height: 90,
                gradient: "linear-gradient(69.71deg, rgba(129,154,255,0.19) 0%, rgba(153,153,153,0.19) 100%)",
                cells: ["Exploration", "Opens Health Insights â†’ Reviews vehicle health score â†’ Views system status", '"Is this serious? What exactly needs fixing?"', "Curious but cautious", "Health report screen, system diagnostics, previous service history", "Use clear categorization (Must-Fix / PMS / Recommended)"],
              },
              {
                top: 631, height: 92,
                gradient: "linear-gradient(70.11deg, rgba(129,154,255,0.19) 0%, rgba(153,153,153,0.19) 100%)",
                cells: ["Decision Making", "Clicks Book Service â†’ Fills AI form â†’ Reviews recommended services", '"This makes sense. I like seeing the breakdown."', "Growing confidence", "AI input form, Service cart, Pricing breakdown", "AI input form, Service cart, Pricing breakdown"],
              },
              {
                top: 743, height: 90,
                gradient: "linear-gradient(69.71deg, rgba(129,154,255,0.19) 0%, rgba(153,153,153,0.19) 100%)",
                cells: ["Booking", "Selects pickup option â†’ Chooses date & time â†’ Confirms booking", '"That was easier than calling."', "Relieved / In control", "Pickup selection, Calendar selector, Booking summary", "Keep steps minimal and show reward unlock."],
              },
              {
                top: 853, height: 92,
                gradient: "linear-gradient(70.11deg, rgba(129,154,255,0.19) 0%, rgba(153,153,153,0.19) 100%)",
                cells: ["Loyalty &\nRetention", "Receives confirmation â†’ Earns loyalty points â†’ Unlocks ancillary services", '"I\'ll use the app next time too."', "Satisfied / Rewarded", "Confirmation screen, Loyalty dashboard, Push notification", "Gamify service milestones to increase retention."],
              },
            ]).flatMap((row, ri) =>
              [72, 246, 420, 594, 768, 942].map((left, ci) => (
                <div key={`${ri}-${ci}`} style={{
                  position: "absolute", left, top: row.top,
                  width: 158, height: row.height,
                  backgroundImage: row.gradient,
                  borderRadius: "8px", overflow: "hidden",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <p style={{
                    margin: 0,
                    width: ci === 0 ? "158px" : "138px",
                    fontSize: ci === 0 ? "18px" : "12px",
                    fontWeight: 400, fontFamily: typography.body.fontFamily,
                    color: "#ffffff", textAlign: "center",
                    lineHeight: ci === 0 ? "1.3" : "15px",
                    whiteSpace: ci === 0 ? "pre-line" as const : "normal" as const,
                  }}>{row.cells[ci]}</p>
                </div>
              ))
            )}

          </div>
        </div>
      </div>

      {/* UI Design Section â€” 1200Ã—4922px canvas */}
      <div style={{ backgroundColor: "#0E0E0E", padding: "80px 0 60px" }}>
        <div style={{ position: "relative", height: layout.uiDesignHeight, overflow: "hidden" }}>
          <div style={{
            position: "absolute",
            left: "50%",
            marginLeft: -600,
            top: 0,
            width: 1200,
            height: 4922,
            transform: `scale(${layout.sectionScale1200})`,
            transformOrigin: "top center",
            backgroundColor: "#0e0e0e",
          }}>

            {/* Section Title */}
            <p style={{
              position: "absolute", left: 72, top: 58, margin: 0,
              ...getScaledSectionHeadingStyle(layout.sectionScale1200),
              whiteSpace: "nowrap",
            }}>UI Design</p>

            {/* Description */}
            <p style={{
              position: "absolute", left: 72, top: 130, width: 624, margin: 0,
              fontSize: 21.017, fontWeight: 300, fontFamily: typography.body.fontFamily,
              color: "#787878", lineHeight: "24.52px", letterSpacing: "-0.42px",
            }}>
              Designed to create a seamless and engaging experience, the interface simplifies complex vehicle information while improving user satisfaction and ease of interaction.
            </p>

            {/* Car Health Overview Title */}
            <p style={{
              position: "absolute", left: 72, top: 294, width: 554, height: 57, margin: 0,
              fontSize: 48, fontWeight: 400, fontFamily: typography.body.fontFamily,
              color: "#ffffff", lineHeight: "37px",
            }}>Car Health Overview</p>

            {/* Blue Gradient Card 1 */}
            <div className="ui-design-parallax-card" data-parallax-speed="0.085" data-parallax-max="70" style={{
              position: "absolute", left: 72, top: 429, width: 510, height: 573,
              background: "linear-gradient(to bottom, #171c8f, #6368da)",
              borderRadius: 40, overflow: "hidden",
            }}>
              <img className="ui-blue-card-image" src={uiPage1} alt="Car Health Overview" style={{ position: "absolute", left: 80, top: 52, width: 346, height: 522, objectFit: "cover", display: "block" }} />
              <div style={{ position: "absolute", left: 380, top: 159, width: 22, height: 22 }}>
                <img src={imgConnectorDot} alt="" style={{ width: 22, height: 22, marginLeft: -6, marginTop: -6 }} />
              </div>
              <div style={{ position: "absolute", left: 377, top: 487, width: 22, height: 22 }}>
                <img src={imgConnectorDot} alt="" style={{ width: 22, height: 22, marginLeft: -6, marginTop: -6 }} />
              </div>
            </div>

            {/* Arrow 1 */}
            <div style={{ position: "absolute", left: 468, top: 542, width: 175, height: 56 }}>
              <img src={imgArrow1} alt="" style={{ width: 175, height: 57, display: "block" }} />
            </div>

            {/* Arrow 2 */}
            <div style={{ position: "absolute", left: 465, top: 803, width: 175, height: 121 }}>
              <img src={imgArrow2} alt="" style={{ width: 175, height: 122, display: "block" }} />
            </div>

            {/* Glass Card - Overall Health Score */}
            <div className="ui-design-parallax-card" data-parallax-speed="0.075" data-parallax-max="70" style={{
              position: "absolute", left: 643, top: 503, width: 485, height: 248,
              ...glassCardStyle,
            }}>
              <p style={{
                position: "absolute", left: 17.95, top: 21.95, margin: 0,
                fontSize: 16, fontWeight: 400, fontFamily: typography.body.fontFamily,
                color: "#ffffff", lineHeight: "26.361px", whiteSpace: "nowrap",
              }}>Overall Health Score</p>
              <ul style={{
                position: "absolute", left: 17.95, top: 64.95, width: 433, margin: 0, padding: 0, paddingLeft: 24,
                fontSize: 16, fontWeight: 400, fontFamily: typography.body.fontFamily,
                color: "#cccccc", listStyleType: "disc",
              }}>
                <li style={{ lineHeight: "26.361px", marginBottom: 0 }}>Instant visibility into vehicle condition, helping users assess urgency at a glance.</li>
                <li style={{ lineHeight: "26.361px", marginBottom: 0 }}>Clear Good / Attention / Critical signals simplify complex technical information.</li>
                <li style={{ lineHeight: "26.361px" }}>Reduces advisor dependency and increases confidence in booking decisions.</li>
              </ul>
            </div>

            {/* Glass Card - Context-Aware Maintenance */}
            <div className="ui-design-parallax-card" data-parallax-speed="0.07" data-parallax-max="70" style={{
              position: "absolute", left: 643, top: 784, width: 485, height: 196,
              ...glassCardStyle,
            }}>
              <p style={{
                position: "absolute", left: 17.95, top: 23.95, margin: 0,
                fontSize: 16, fontWeight: 400, fontFamily: typography.body.fontFamily,
                color: "#ffffff", lineHeight: "26.361px", whiteSpace: "nowrap",
              }}>Context-Aware Maintenance Guidance</p>
              <ul style={{
                position: "absolute", left: 17.95, top: 66.95, width: 434, margin: 0, padding: 0, paddingLeft: 24,
                fontSize: 16, fontWeight: 400, fontFamily: typography.body.fontFamily,
                color: "#cccccc", listStyleType: "disc",
              }}>
                <li style={{ lineHeight: "26.361px", marginBottom: 0 }}>Highlights what should be checked and why, making preventive care easier to understand.</li>
                <li style={{ lineHeight: "26.361px" }}>Promotes timely servicing and increases opportunity for structured cross-sell.</li>
              </ul>
            </div>

            {/* Second Row - Right Blue Card */}
            <div className="ui-design-parallax-card" data-parallax-speed="0.085" data-parallax-max="70" style={{
              position: "absolute", left: 618, top: 1125, width: 510, height: 544,
              background: "linear-gradient(to bottom, #171c8f, #6368da)",
              borderRadius: 40, overflow: "hidden",
            }}>
              <img className="ui-blue-card-image" src={uiPage2} alt="Service Intelligence" style={{ position: "absolute", left: 80, top: 80, width: 346, height: 464, objectFit: "cover", display: "block" }} />
            </div>

            {/* Glass Card - Declined Service Intelligence */}
            <div className="ui-design-parallax-card" data-parallax-speed="0.07" data-parallax-max="70" style={{
              position: "absolute", left: 72, top: 1207, width: 485, height: 192,
              ...glassCardStyle,
            }}>
              <p style={{
                position: "absolute", left: 17.95, top: 18.95, margin: 0,
                fontSize: 16, fontWeight: 400, fontFamily: typography.body.fontFamily,
                color: "#ffffff", lineHeight: "26.361px", whiteSpace: "nowrap",
              }}>Declined Service Intelligence</p>
              <ul style={{
                position: "absolute", left: 17.95, right: 17.95, top: 61.95, margin: 0, padding: 0, paddingLeft: 24,
                fontSize: 16, fontWeight: 400, fontFamily: typography.body.fontFamily,
                color: "#cccccc", listStyleType: "disc", boxSizing: "border-box",
              }}>
                <li style={{ lineHeight: "26.361px", marginBottom: 0 }}>Connects past refusals to current vehicle health to create accountability and awareness.</li>
                <li style={{ lineHeight: "26.361px" }}>Reinforces service continuity and encourages completion of pending maintenance.</li>
              </ul>
            </div>

            {/* Glass Card - Service History Transparency */}
            <div className="ui-design-parallax-card" data-parallax-speed="0.07" data-parallax-max="70" style={{
              position: "absolute", left: 72, top: 1445, width: 485, height: 168,
              ...glassCardStyle,
            }}>
              <p style={{
                position: "absolute", left: 17.95, top: 18.95, margin: 0,
                fontSize: 16, fontWeight: 400, fontFamily: typography.body.fontFamily,
                color: "#ffffff", lineHeight: "26.361px", whiteSpace: "nowrap",
              }}>Service History Transparency</p>
              <ul style={{
                position: "absolute", left: 17.95, right: 17.95, top: 61.95, margin: 0, padding: 0, paddingLeft: 24,
                fontSize: 16, fontWeight: 400, fontFamily: typography.body.fontFamily,
                color: "#cccccc", listStyleType: "disc", boxSizing: "border-box",
              }}>
                <li style={{ lineHeight: "26.361px", marginBottom: 0 }}>Provides clear visibility into past servicing activity.</li>
                <li style={{ lineHeight: "26.361px" }}>Builds trust while supporting informed, higher-value service decisions.</li>
              </ul>
            </div>

            {/* Connector dots and arrows for second row */}
            <div style={{ position: "absolute", left: 720, top: 1338, width: 22, height: 22 }}>
              <img src={imgConnectorDot} alt="" style={{ width: 22, height: 22, marginLeft: -6, marginTop: -6 }} />
            </div>
            <div style={{ position: "absolute", left: 720, top: 1580, width: 22, height: 22 }}>
              <img src={imgConnectorDot} alt="" style={{ width: 22, height: 22, marginLeft: -6, marginTop: -6 }} />
            </div>
            <div style={{ position: "absolute", left: 557, top: 1241, width: 163, height: 106 }}>
              <img src={imgArrow3} alt="" style={{ width: 163, height: 107, display: "block" }} />
            </div>
            <div style={{ position: "absolute", left: 557, top: 1481, width: 163, height: 106 }}>
              <img src={imgArrow3} alt="" style={{ width: 163, height: 107, display: "block" }} />
            </div>

            {/* Car Service Input Title */}
            <p style={{
              position: "absolute", left: 72, top: 1759, width: 554, height: 57, margin: 0,
              fontSize: 48, fontWeight: 400, fontFamily: typography.body.fontFamily,
              color: "#ffffff", lineHeight: "37px",
            }}>Car Service Input</p>

            {/* Blue Gradient Card - Service Input */}
            <div className="ui-design-parallax-card" data-parallax-speed="0.085" data-parallax-max="70" style={{
              position: "absolute", left: 72, top: 1895, width: 510, height: 544,
              background: "linear-gradient(to bottom, #171c8f, #6368da)",
              borderRadius: 40, overflow: "hidden",
            }}>
              <img className="ui-blue-card-image ui-blue-card-image--from-top" src={uiPage3} alt="Car Service Input" style={{ position: "absolute", left: 80, top: 0, width: 348, height: 440, objectFit: "cover", display: "block"  }} />
            </div>

            {/* Connector dot */}
            <div style={{ position: "absolute", left: 457, top: 2149, width: 22, height: 22 }}>
              <img src={imgConnectorDot} alt="" style={{ width: 22, height: 22, marginLeft: -6, marginTop: -6 }} />
            </div>

            {/* Arrow */}
            <div style={{ position: "absolute", left: 473, top: 2059, width: 170, height: 98 }}>
              <img src={imgArrow5} alt="" style={{ width: 170, height: 99, display: "block" }} />
            </div>

            {/* Glass Card - Voice-to-Text Assistant */}
              <div className="ui-design-parallax-card" data-parallax-speed="0.07" data-parallax-max="70" style={{
                position: "absolute", left: 643, top: 2027, width: 485, height: 195,
                ...glassCardStyle,
              }}>
                  <p style={{
                    position: "absolute", left: 17.95, top: 18.95, margin: 0,
                    fontSize: 16, fontWeight: 400, fontFamily: typography.body.fontFamily,
                    color: "#ffffff", lineHeight: "26.361px", whiteSpace: "normal",
                  }}>Voice-to-Text Assistant</p>
                <ul style={{
                  position: "absolute", left: 17.95, top: 61.95, width: 457, margin: 0, padding: 0, paddingLeft: 24,
                  fontSize: 16, fontWeight: 400, fontFamily: typography.body.fontFamily,
                  color: "#cccccc", listStyleType: "disc", boxSizing: "border-box",
                }}>
                  <li style={{ lineHeight: "26.361px", marginBottom: 0 }}>Hands-free issue reporting, lets users describe their problems in their own words through voice input.</li>
                  <li style={{ lineHeight: "26.361px" }}>Eliminates technical confusion, eliminates technical confusion</li>
                </ul>
              </div>

            {/* Connector dot at center bottom of overview section
            <div style={{ position: "absolute", left: 411, top: 2368, width: 22, height: 22 }}>
              <img src={imgConnectorDot} alt="" style={{ width: 22, height: 22, marginLeft: -6, marginTop: -6 }} />
            </div> */}

            {/* Service Selection Title */}
            <p style={{
              position: "absolute", left: 72, top: 2546, width: 554, height: 57, margin: 0,
              fontSize: 48, fontWeight: 400, fontFamily: typography.body.fontFamily,
              color: "#ffffff", lineHeight: "37px",
            }}>Service Selection</p>

            {/* Blue Gradient Card - Service Selection Right */}
            <div className="ui-design-parallax-card" data-parallax-speed="0.085" data-parallax-max="70" style={{
              position: "absolute", left: 618, top: 2652, width: 510, height: 400,
              background: "linear-gradient(to bottom, #171c8f, #6368da)",
              borderRadius: 40, overflow: "hidden",
            }}>
              <img className="ui-blue-card-image" src={uiPage4} alt="Service Selection" style={{ position: "absolute", left: 80, top: 80, width: 346, height: 320, objectFit: "cover", display: "block"  }} />
            </div>

            {/* Glass Card - Milestone-Based Free Ancillary Unlocks */}
            <div className="ui-design-parallax-card" data-parallax-speed="0.07" data-parallax-max="70" style={{
              position: "absolute", left: 72, top: 2737, width: 485, height: 195,
              ...glassCardStyle,
            }}>
              <p style={{
                position: "absolute", left: 17.95, top: 18.95, margin: 0,
                fontSize: 16, fontWeight: 400, fontFamily: typography.body.fontFamily,
                color: "#ffffff", lineHeight: "26.361px", whiteSpace: "nowrap",
              }}>Milestone-Based Free Ancillary Unlocks</p>
              <ul style={{
                position: "absolute", left: 17.95, top: 61.95, width: 455, margin: 0, padding: 0, paddingLeft: 24,
                fontSize: 16, fontWeight: 400, fontFamily: typography.body.fontFamily,
                color: "#cccccc", listStyleType: "disc",
              }}>
                <li style={{ lineHeight: "26.361px", marginBottom: 0 }}>Unlock complimentary services as cart value increases.</li>
                <li style={{ lineHeight: "26.361px" }}>Encourages bundled servicing while rewarding proactive maintenance.</li>
              </ul>
            </div>

            {/* Connector and arrows for milestone section */}
            <div style={{ position: "absolute", left: 725, top: 2878, width: 22.576, height: 26.4, transform: "rotate(180deg) scaleY(-1)" }}>
              <img src={imgConnectorDot} alt="" style={{ width: 22, height: 22, marginLeft: -6, marginTop: -7 }} />
            </div>
            <div style={{ position: "absolute", left: 557, top: 2766, width: 174, height: 118 }}>
              <img src={imgArrow6} alt="" style={{ width: 174, height: 119, display: "block" }} />
            </div>

            {/* Blue Gradient Card - Service Selection Left */}
            <div className="ui-design-parallax-card" data-parallax-speed="0.085" data-parallax-max="70" style={{
              position: "absolute", left: 72, top: 3176, width: 510, height: 545,
              background: "linear-gradient(to bottom, #171c8f, #6368da)",
              borderRadius: 40, overflow: "hidden",
            }}>
              <img className="ui-blue-card-image" src={uiPage5} alt="Service Selection" style={{ position: "absolute", left: 80, top: -200, width: 352, height: 896, objectFit: "cover", display: "block" }} />
              {/* See why button */}
              <div style={{
                position: "absolute", left: 349, top: 159, width: 43.654, height: 10.679,
              }}>
                
                <div style={{ position: "absolute", left: 35.64, top: 1.33, width: 8.013, height: 8.013 }}>
                  <img src={imgSeeWhyIcon} alt="" style={{ width: 8, height: 8, display: "block" }} />
                </div>
              </div>
            </div>

            {/* Connector dots */}
            <div style={{ position: "absolute", left: 456, top: 3277, width: 22, height: 22 }}>
              <img src={imgConnectorDot} alt="" style={{ width: 22, height: 22, marginLeft: -6, marginTop: -6 }} />
            </div>
            <div style={{ position: "absolute", left: 275, top: 3387, width: 22, height: 22 }}>
              <img src={imgConnectorDot} alt="" style={{ width: 22, height: 22, marginLeft: -6, marginTop: -6 }} />
            </div>

            {/* Arrows */}
            <div style={{ position: "absolute", left: 471, top: 3239, width: 172, height: 47 }}>
              <img src={imgArrow7} alt="" style={{ width: 172, height: 48, display: "block" }} />
            </div>
            <div style={{ position: "absolute", left: 291, top: 3396, width: 352, height: 90 }}>
              <img src={imgArrow8} alt="" style={{ width: 352, height: 91, display: "block" }} />
            </div>

            {/* Glass Card - Value-First Pricing Hierarchy */}
            <div className="ui-design-parallax-card" data-parallax-speed="0.07" data-parallax-max="70" style={{
              position: "absolute", left: 643, top: 3210, width: 485, height: 195,
              ...glassCardStyle,
            }}>
              <p style={{
                position: "absolute", left: 17.95, top: 18.95, margin: 0,
                fontSize: 16, fontWeight: 400, fontFamily: typography.body.fontFamily,
                color: "#ffffff", lineHeight: "26.361px", whiteSpace: "nowrap",
              }}>Value-First Pricing Hierarchy</p>
              <ul style={{
                position: "absolute", left: 17.95, top: 61.95, width: 455, margin: 0, padding: 0, paddingLeft: 24,
                fontSize: 16, fontWeight: 400, fontFamily: typography.body.fontFamily,
                color: "#cccccc", listStyleType: "disc",
              }}>
                <li style={{ lineHeight: "26.361px", marginBottom: 0 }}>Subtle currency treatment shifts focus from cost to service benefit.</li>
                <li style={{ lineHeight: "26.361px" }}>Reduces immediate price resistance and supports higher service acceptance.</li>
              </ul>
            </div>

            {/* Glass Card - Categorized Service Architecture */}
            <div className="ui-design-parallax-card" data-parallax-speed="0.07" data-parallax-max="70" style={{
              position: "absolute", left: 643, top: 3458, width: 485, height: 195,
              ...glassCardStyle,
            }}>
              <p style={{
                position: "absolute", left: 17.95, top: 18.95, margin: 0,
                fontSize: 16, fontWeight: 400, fontFamily: typography.body.fontFamily,
                color: "#ffffff", lineHeight: "26.361px", whiteSpace: "nowrap",
              }}>Categorized Service Architecture</p>
              <ul style={{
                position: "absolute", left: 17.95, right: 17.95, top: 61.95, margin: 0, padding: 0, paddingLeft: 24,
                fontSize: 16, fontWeight: 400, fontFamily: typography.body.fontFamily,
                color: "#cccccc", listStyleType: "disc", boxSizing: "border-box",
              }}>
                <li style={{ lineHeight: "26.361px", marginBottom: 0 }}>Services structured into Must-Fix, PMS, and Recommended.</li>
                <li style={{ lineHeight: "26.361px" }}>Simplifies decision-making and reduces technical overwhelm.</li>
              </ul>
            </div>

            {/* Blue Gradient Card - See Why */}
            <div className="ui-design-parallax-card" data-parallax-speed="0.085" data-parallax-max="70" style={{
              position: "absolute", left: 618, top: 3857, width: 510, height: 444,
              background: "linear-gradient(to bottom, #171c8f, #6368da)",
              borderRadius: 40, overflow: "hidden",
            }}>
              <img className="ui-blue-card-image" src={uiPage6} alt="See Why" style={{ position: "absolute", left: 80, top: 82, width: 346, height: 362, objectFit: "cover", display: "block" }} />
              <div style={{ position: "absolute", left: 336, top: 286, width: 22, height: 22, transform: "rotate(180deg) scaleY(-1)" }}>
                <img src={imgConnectorDot} alt="" style={{ width: 22, height: 22, marginLeft: -6, marginTop: -6 }} />
              </div>
            </div>

            {/* Glass Card - Context-Aware See Why */}
            <div className="ui-design-parallax-card" data-parallax-speed="0.07" data-parallax-max="70" style={{
              position: "absolute", left: 72, top: 3975, width: 485, height: 195,
              ...glassCardStyle,
            }}>
              <p style={{
                position: "absolute", left: 17.95, top: 18.95, margin: 0,
                fontSize: 16, fontWeight: 400, fontFamily: typography.body.fontFamily,
                color: "#ffffff", lineHeight: "26.361px", whiteSpace: "nowrap",
              }}>Context-Aware "See Why" Transparency</p>
              <ul style={{
                position: "absolute", left: 17.95, right: 17.95, top: 61.95, margin: 0, padding: 0, paddingLeft: 24,
                fontSize: 16, fontWeight: 400, fontFamily: typography.body.fontFamily,
                color: "#cccccc", listStyleType: "disc", boxSizing: "border-box",
              }}>
                <li style={{ lineHeight: "26.361px", marginBottom: 0 }}>Clear explanation for every recommendation within the flow.</li>
                <li style={{ lineHeight: "26.361px" }}>Builds trust and increases acceptance of suggested services.</li>
              </ul>
            </div>

            {/* Arrow for See Why section */}
            <div style={{ position: "absolute", left: 558, top: 4005, width: 402, height: 147}}>
              <img src={imgArrow9} alt="" style={{ width: 402, height: 148, display: "block" }} />
            </div>

            {/* Blue Gradient Card - Coupons */}
            <div className="ui-design-parallax-card" data-parallax-speed="0.085" data-parallax-max="70" style={{
              position: "absolute", left: 72, top: 4425, width: 510, height: 497,
              background: "linear-gradient(to bottom, #171c8f, #6368da)",
              borderRadius: 40, overflow: "hidden",
            }}>
              <img className="ui-blue-card-image" src={uiPage7} alt="Coupons" style={{ position: "absolute", left: 80, top: 89, width: 348, height: 408, objectFit: "cover", display: "block" }} />
            </div>

            {/* Connector dots */}
            <div style={{ position: "absolute", left: 399, top: 4858.5, width: 22, height: 22 }}>
              <img src={imgConnectorDot} alt="" style={{ width: 22, height: 22, marginLeft: -6, marginTop: -6 }} />
            </div>
            <div style={{ position: "absolute", left: 374, top: 4803, width: 22, height: 22 }}>
              <img src={imgConnectorDot} alt="" style={{ width: 22, height: 22, marginLeft: -6, marginTop: -6 }} />
            </div>

            {/* Arrows */}
            <div style={{ position: "absolute", left: 415, top: 4749, width: 228, height: 117 }}>
              <img src={imgArrow11} alt="" style={{ width: 228, height: 118, display: "block" }} />
            </div>
            <div style={{ position: "absolute", left: 390, top: 4534, width: 253, height: 278 }}>
              <img src={imgArrow10} alt="" style={{ width: 253, height: 279, display: "block" }} />
            </div>

            {/* Glass Card - Integrated Coupons & Offers */}
            <div className="ui-design-parallax-card" data-parallax-speed="0.07" data-parallax-max="70" style={{
              position: "absolute", left: 643, top: 4503, width: 485, height: 168,
              ...glassCardStyle,
            }}>
              <p style={{
                position: "absolute", left: 17.95, top: 18.95, margin: 0,
                fontSize: 16, fontWeight: 400, fontFamily: typography.body.fontFamily,
                color: "#ffffff", lineHeight: "26.361px", whiteSpace: "nowrap",
              }}>Integrated Coupons & Offers</p>
              <ul style={{
                position: "absolute", left: 17.95, right: 17.95, top: 61.95, margin: 0, padding: 0, paddingLeft: 24,
                fontSize: 16, fontWeight: 400, fontFamily: typography.body.fontFamily,
                color: "#cccccc", listStyleType: "disc", boxSizing: "border-box",
              }}>
                <li style={{ lineHeight: "26.361px", marginBottom: 0 }}>In-context savings applied during service selection.</li>
                <li style={{ lineHeight: "26.361px" }}>Strengthens in-app retention and reduces drop-off to external centers.</li>
              </ul>
            </div>

            {/* Glass Card - Health Progress Indicator */}
            <div className="ui-design-parallax-card" data-parallax-speed="0.07" data-parallax-max="70" style={{
              position: "absolute", left: 643, top: 4717, width: 485, height: 195,
              ...glassCardStyle,
            }}>
              <p style={{
                position: "absolute", left: 17.95, top: 18.95, margin: 0,
                fontSize: 16, fontWeight: 400, fontFamily: typography.body.fontFamily,
                color: "#ffffff", lineHeight: "26.361px", whiteSpace: "nowrap",
              }}>Health Progress Indicator</p>
              <ul style={{
                position: "absolute", left: 17.95, right: 17.95, top: 61.95, margin: 0, padding: 0, paddingLeft: 24,
                fontSize: 16, fontWeight: 400, fontFamily: typography.body.fontFamily,
                color: "#cccccc", listStyleType: "disc", boxSizing: "border-box",
              }}>
                <li style={{ lineHeight: "26.361px", marginBottom: 0 }}>Real-time car health percentage updates as services are added.</li>
                <li style={{ lineHeight: "26.361px" }}>Visually reinforces value and motivates completion of pending fixes.</li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* User Survey Section â€” 1200Ã—1220px canvas */}
      <div style={{ backgroundColor: "#0E0E0E", padding: "80px 0 60px" }}>
        <div style={{ position: "relative", height: `max(${layout.userSurveyMinHeight}px, calc(68.1vw + 132px))`, overflow: "hidden" }}>
          <img
            src={image8}
            alt=""
            style={{
              position: "absolute",
              left: "50%",
              top: 132,
              transform: "translateX(-50%)",
              width: "100vw",
              height: "auto",
              display: "block",
              opacity: 0.72,
              pointerEvents: "none",
            }}
          />
          <div style={{
            position: "absolute",
            left: "50%",
            marginLeft: -600,
            top: 0,
            width: 1200,
            height: 1220,
            transform: `scale(${layout.sectionScale1200})`,
            transformOrigin: "top center",
            backgroundColor: "transparent",
          }}>
            {/* Section Title */}
            <p style={{
              position: "absolute", left: 72, top: 85, margin: 0,
              ...getScaledSectionHeadingStyle(layout.sectionScale1200),
              whiteSpace: "nowrap",
            }}>User Survey</p>

            {/* Main Headline */}
            <p style={{
              position: "absolute", left: 73, top: 184, width: 834.571, margin: 0,
              fontSize: 36.09, fontWeight: 600, fontFamily: typography.heading.fontFamily,
              color: "#ffffff", lineHeight: "42.105px", whiteSpace: "nowrap",
            }}>
              <span style={{ color: "#787878" }}>Insights from survey played a </span>
              <span style={{ color: "#ffffff" }}>critical role in shaping Maruti Suzuki </span>
              <span style={{ color: "#787878" }}>Service Experience</span>
            </p>

            {/* Description */}
            <p style={{
              position: "absolute", left: 503, top: 341, width: 624, margin: 0,
              fontSize: 21.017, fontWeight: 300, fontFamily: typography.body.fontFamily,
              color: "#787878", lineHeight: "24.52px", letterSpacing: "-0.42px",
            }}>
              A modern engaging survey designed to gather use feedback and evaluate the effectiveness of the newly introduced Maruti Suzuki Vehicle Health & Service Booking flow.
            </p>

            {/* Card 1: Higher Add-to-Cart Behavior (top left) */}
            <div className="user-survey-parallax-card" data-parallax-speed="0.38" style={{
              position: "absolute", left: 164, top: 605, width: 421, height: 244,
              willChange: "transform",
              ...glassCardStyle,
            }}>
              <p style={{
                position: "absolute", left: 33.96, top: 22.96, width: 159, margin: 0,
                fontSize: 16, fontWeight: 400, fontFamily: typography.body.fontFamily,
                color: "#ffffff", lineHeight: "19.148px",
              }}>Higher Add-to-Cart Behavior</p>
              <p style={{
                position: "absolute", left: 29.96, top: 97.96, margin: 0,
                fontSize: 56, fontWeight: 400, fontFamily: typography.body.fontFamily,
                color: "#ffffff", lineHeight: "19.148px", whiteSpace: "nowrap",
              }}>83%</p>
              <p style={{
                position: "absolute", left: 29.96, top: 140.96, width: 234, margin: 0,
                fontSize: 14, fontWeight: 400, fontFamily: typography.body.fontFamily,
                color: "#cccccc", lineHeight: "19.148px",
              }}>
                Gamified progress tracking with coupon unlocks encouraged 81% of users to expand their service cart.
              </p>
              {/* CSS Pie chart - 83% */}
              <div style={{
                position: "absolute", left: 246.96, top: 22.96, width: 146, height: 146,
                borderRadius: "50%",
                background: `conic-gradient(#3a42ff 0deg, #3a42ff 298.8deg, #c9c9c9 298.8deg, #c9c9c9 360deg)`,
                transform: "rotate(-45deg)",
              }} />
            </div>

            {/* Card 2: Reduced Dependence on Service Calls (top right) */}
            <div className="user-survey-parallax-card" data-parallax-speed="0.46" style={{
              position: "absolute", left: 757, top: 677, width: 352, height: 244,
              willChange: "transform",
              ...glassCardStyle,
            }}>
              <p style={{
                position: "absolute", left: 33.96, top: 22.96, width: 234, margin: 0,
                fontSize: 16, fontWeight: 400, fontFamily: typography.body.fontFamily,
                color: "#ffffff", lineHeight: "19.148px",
              }}>Reduced Dependence on Service Calls</p>
              <p style={{
                position: "absolute", left: 29.96, top: 97.96, margin: 0,
                fontSize: 56, fontWeight: 400, fontFamily: typography.body.fontFamily,
                color: "#ffffff", lineHeight: "19.148px", whiteSpace: "nowrap",
              }}>74%</p>
              <p style={{
                position: "absolute", left: 29.96, top: 140.96, width: 234, margin: 0,
                fontSize: 14, fontWeight: 400, fontFamily: typography.body.fontFamily,
                color: "#cccccc", lineHeight: "19.148px",
              }}>
                With voice-to-text issue logging, 88% preferred describing vehicle concerns directly in the app rather than calling a Service Advisor.
              </p>
              {/* Bar chart */}
              <div style={{ position: "absolute", left: 275.96, top: 22.96, width: 50, height: 190, backgroundColor: "#c9c9c9", borderRadius: 4 }} />
              <div style={{ position: "absolute", left: 275.96, top: 57.96, width: 50, height: 155, backgroundColor: "#3a42ff", borderRadius: "0 0 4px 4px" }} />
            </div>

            {/* Card 3: Higher Booking Confidence (bottom left) */}
            <div className="user-survey-parallax-card" data-parallax-speed="0.34" style={{
              position: "absolute", left: 43, top: 975, width: 407, height: 244,
              willChange: "transform",
              ...glassCardStyle,
            }}>
              <p style={{
                position: "absolute", left: 33.96, top: 22.96, width: 159, margin: 0,
                fontSize: 16, fontWeight: 400, fontFamily: typography.body.fontFamily,
                color: "#ffffff", lineHeight: "19.148px",
              }}>Higher Booking Confidence</p>
              <p style={{
                position: "absolute", left: 29.96, top: 97.96, margin: 0,
                fontSize: 56, fontWeight: 400, fontFamily: typography.body.fontFamily,
                color: "#ffffff", lineHeight: "19.148px", whiteSpace: "nowrap",
              }}>71%</p>
              <p style={{
                position: "absolute", left: 29.96, top: 140.96, width: 234, margin: 0,
                fontSize: 14, fontWeight: 400, fontFamily: typography.body.fontFamily,
                color: "#cccccc", lineHeight: "19.148px",
              }}>
                The introduction of a pre-booking Car Health Snapshot significantly increased user confidence before confirming service.
              </p>
              {/* Half-donut chart - 71% */}
              <div style={{ position: "absolute", left: 206.96, top: 38.96, width: 162, height: 81 }}>
                <img
                  src={chart3}
                  alt="71 percent half donut chart"
                  style={{ width: 162, height: 81, objectFit: "contain", display: "block", transform: "translateY(36px) scale(2)", transformOrigin: "center" }}
                />
              </div>
            </div>

            {/* Card 4: Higher Interaction with "See Why" (bottom right) */}
            <div className="user-survey-parallax-card" data-parallax-speed="0.42" style={{
              position: "absolute", left: 634, top: 1073, width: 421, height: 244,
              willChange: "transform",
              ...glassCardStyle,
            }}>
              <p style={{
                position: "absolute", left: 33.96, top: 22.96, width: 159, margin: 0,
                fontSize: 16, fontWeight: 400, fontFamily: typography.body.fontFamily,
                color: "#ffffff", lineHeight: "19.148px",
              }}>Higher Interaction with "See Why"</p>
              <p style={{
                position: "absolute", left: 29.96, top: 97.96, margin: 0,
                fontSize: 56, fontWeight: 400, fontFamily: typography.body.fontFamily,
                color: "#ffffff", lineHeight: "19.148px", whiteSpace: "nowrap",
              }}>78%</p>
              <p style={{
                position: "absolute", left: 29.96, top: 140.96, width: 234, margin: 0,
                fontSize: 14, fontWeight: 400, fontFamily: typography.body.fontFamily,
                color: "#cccccc", lineHeight: "19.148px",
              }}>
                Click analytics revealed that 84% of users expanded the "Why am I seeing this?" section before approving a recommended service.
              </p>
              {/* Donut ring chart - 78% */}
              <div style={{ position: "absolute", left: 249.96, top: 31.96, width: 136, height: 136 }}>
                <img
                  src={chart4}
                  alt="78 percent donut ring chart"
                  style={{ width: 136, height: 136, objectFit: "contain", display: "block" }}
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Project2;



