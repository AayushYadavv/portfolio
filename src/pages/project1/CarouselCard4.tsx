import React from "react";

interface CarouselCard4Props {
  children?: React.ReactNode;
}

const CarouselCard4 = ({ children }: CarouselCard4Props) => {
  return (
    <>
      <div style={{ position: "relative", width: "100%", height: "100%", borderRadius: "0", overflow: "hidden" }}>
        {/* Base image */}
        <img 
          src="/src/assets/Project1/runchatbot.png" 
          alt="UI Screen 4" 
          style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "0" }} 
        />
        
        {/* Line of code overlay - centered */}
        <img 
          src="/src/assets/Project1/lineofcode.png" 
          alt="Line of Code" 
          className="anim-code-fade"
          style={{ 
            position: "absolute", 
            top: "50%", 
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "33%", 
            pointerEvents: "none" 
          }} 
        />
        
        {children}
      </div>

      <style>{`
        @keyframes codeFadeOut {
          0% {
            opacity: 1;
            clip-path: inset(0% 0% 100% 0%);
          }
          60%, 80% {
            opacity: 1;
            clip-path: inset(0% 0% 0% 0%);
          }
          100% {
            opacity: 0;
            clip-path: inset(0% 0% 0% 0%);
          }
        }

        .anim-code-fade {
          opacity: 1;
          clip-path: inset(0% 0% 100% 0%);
        }

        .carousel-card-active .anim-code-fade {
          animation: codeFadeOut 3s ease-in-out 1 both;
        }
      `}</style>
    </>
  );
};

export default CarouselCard4;
