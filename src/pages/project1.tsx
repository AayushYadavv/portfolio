import { useEffect } from "react";
import { project1Styles as styles } from "./project1/styles";
import Carousel from "./project1/Carousel";
import CarouselCard2 from "./project1/CarouselCard2";
import CarouselCard3 from "./project1/CarouselCard3";
import CarouselCard4 from "./project1/CarouselCard4";
import CarouselCard5 from "./project1/CarouselCard5";
import HeroSection from "./project1/sections/HeroSection";
import ProjectDetails from "./project1/sections/ProjectDetails";
import QuoteSection from "./project1/sections/QuoteSection";
import CaseStudyContent from "./project1/sections/CaseStudyContent";
import ImpactSection from "./project1/sections/ImpactSection";

const Project1 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <HeroSection
          tags="UX Design · AI · Product Design"
          title="Workflow Studio"
          subtitle="Designing AI experiences that enable anyone to automate workflows.\n\nBuilding an intuitive AI-powered platform that allows people - even without coding knowledge - to create powerful workflows and automate repetitive tasks with ease."
        />

        {/* 4. UI Screens Carousel */}
        <Carousel
          cycleDurations={[3500, 4000, 3000, 3500]}
          slots={[
          /* Slot 1 - temporarily commented out
          <img
            src="/src/assets/Project1/cscreen1.png"
            alt="UI Screen 1"
            style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "0" }}
          />,
          */
          /* Slot 2 - animated composition */
          <CarouselCard2>
            <div style={{ position: "relative", width: "100%", height: "100%", borderRadius: "0", overflow: "hidden", backgroundColor: "#ffffff" }}>
              <img src="/src/assets/p1-2.png" alt="UI Screen 2" style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "center", borderRadius: "0" }} />
              <img src="/src/assets/p1-2-2.png" alt="Popup" className="anim-popup" style={{ position: "absolute", bottom: "4%", right: "2%", width: "52%", pointerEvents: "none" }} />
              <img src="/src/assets/drag-shade.png" alt="" className="anim-wand" style={{ position: "absolute", top: "12%", right: "6%", width: "38%", pointerEvents: "none", transformOrigin: "bottom center" }} />
              <img src="/src/assets/arrow.png" alt="" className="anim-mouse" style={{ position: "absolute", top: "8%", right: "4%", width: "40px", pointerEvents: "none" }} />
            </div>
          </CarouselCard2>,
          /* Slot 3 - animated profile popups */
          <CarouselCard3 />,
          /* Slot 4 - animated code fade */
          <CarouselCard4 />,
          /* Slot 5 - animated mouse and wand */
          <CarouselCard5 />,
          ]}
        />

        <ProjectDetails
          company="AgentAnalytics.AI"
          role="Product Designer"
          tenure="2025"
        />

        <QuoteSection quote="Great design removes complexity so users can focus on outcomes rather than tools." />

        <CaseStudyContent />

        <ImpactSection />
      </div>

      {/* CSS for responsive layout */}
      <style>{`
        @media (max-width: 768px) {
          .impact-grid { grid-template-columns: 1fr !important; }
          .details-grid { grid-template-columns: 1fr !important; }
        }

        @keyframes shine-rotate {
          0% { background-position: 0% 0%; }
          50% { background-position: 100% 100%; }
          100% { background-position: 0% 0%; }
        }

        .shine-border {
          position: absolute;
          inset: 0;
          border-radius: inherit;
          pointer-events: none;
          padding: 1.5px;
          background-image: radial-gradient(transparent, transparent, #6366f1, #a855f7, transparent, transparent);
          background-size: 300% 300%;
          animation: shine-rotate 14s linear infinite;
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          will-change: background-position;
        }
      `}</style>
    </div>
  );
};

export default Project1;