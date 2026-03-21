import React from "react";

interface CarouselCard5Props {
  children?: React.ReactNode;
}

const CarouselCard5 = ({ children }: CarouselCard5Props) => {
  return (
    <>
      <div style={{ position: "relative", width: "100%", height: "100%", borderRadius: "0", overflow: "hidden" }}>
        {/* Base image */}
        <img 
          src="/src/assets/Project1/cscreen5.png" 
          alt="UI Screen 5" 
          style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "0" }} 
        />
        
        {/* Drag/wand overlay with paint reveal animation */}
        <img 
          src="/src/assets/Project1/drag5.png" 
          alt="Drag Wand" 
          className="anim-wand-5"
          style={{ 
            position: "absolute", 
            top: "30%", 
            right: "35%",
            width: "30%", 
            pointerEvents: "none",
            transformOrigin: "bottom center"
          }} 
        />
        
        {/* Mouse cursor with movement animation */}
        <img 
          src="/src/assets/Project1/mouse5.png" 
          alt="Mouse Cursor" 
          className="anim-mouse-5"
          style={{ 
            position: "absolute", 
            width: "40px", 
            pointerEvents: "none" 
          }} 
        />
        
        {children}
      </div>

      <style>{`
        @keyframes wandReveal5 {
          0%   { clip-path: inset(100% 0% 0% 0%); opacity: 0; }
          11%  { clip-path: inset(100% 0% 0% 0%); opacity: 0; }
          13%  { clip-path: inset(100% 0% 0% 0%); opacity: 1; }
          54%  { clip-path: inset(0% 0% 0% 0%); opacity: 1; }
          68%  { clip-path: inset(0% 0% 0% 0%); opacity: 0; }
          100% { clip-path: inset(0% 0% 0% 0%); opacity: 0; }
        }

        @keyframes mouseMove5 {
          0%   { opacity: 0; top: 60%; right: 40%; }
          11%  { opacity: 0; top: 60%; right: 40%; }
          13%  { opacity: 1; top: 60%; right: 40%; }
          54%  { opacity: 1; top: 10%; right: 30%; }
          68%  { opacity: 0; top: 10%; right: 30%; }
          100% { opacity: 0; top: 60%; right: 40%; }
        }

        .anim-wand-5 {
          clip-path: inset(100% 0% 0% 0%);
          opacity: 0;
        }

        .anim-mouse-5 {
          opacity: 0;
          top: 60%;
          right: 40%;
        }

        .carousel-card-active .anim-wand-5,
        .carousel-card-active .anim-mouse-5 {
          animation-iteration-count: 1;
          animation-fill-mode: both;
        }

        .carousel-card-active .anim-wand-5 {
          animation: wandReveal5 3.5s ease-in-out 1 both;
        }

        .carousel-card-active .anim-mouse-5 {
          animation: mouseMove5 3.5s ease-in-out 1 both;
        }
      `}</style>
    </>
  );
};

export default CarouselCard5;
