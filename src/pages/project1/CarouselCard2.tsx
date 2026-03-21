import React from "react";

interface CarouselCard2Props {
  children?: React.ReactNode;
}

const CarouselCard2: React.FC<CarouselCard2Props> = ({ children }) => {
  return (
    <>
      <div className="carousel-card-2-wrapper">
        {children}
      </div>

      <style>{`
        /* Carousel Card 2 Animation Styles - 3.5s loop */
        
        @keyframes popupSlideIn {
          0%   { opacity: 0; transform: translateX(28px) scale(0.96); }
          14%  { opacity: 1; transform: translateX(0px) scale(1); }
          54%  { opacity: 1; transform: translateX(0px) scale(1); }
          68%  { opacity: 0; transform: translateX(0px) scale(1); }
          100% { opacity: 0; transform: translateX(28px) scale(0.96); }
        }
        
        @keyframes wandReveal {
          0%   { clip-path: inset(100% 0% 0% 0%); opacity: 0; }
          11%  { clip-path: inset(100% 0% 0% 0%); opacity: 0; }
          13%  { clip-path: inset(100% 0% 0% 0%); opacity: 1; }
          54%  { clip-path: inset(0% 0% 0% 0%); opacity: 1; }
          68%  { clip-path: inset(0% 0% 0% 0%); opacity: 0; }
          100% { clip-path: inset(0% 0% 0% 0%); opacity: 0; }
        }
        
        @keyframes mouseMove {
          0%   { opacity: 0; transform: translate(-130px, 90px); }
          11%  { opacity: 0; transform: translate(-130px, 90px); }
          13%  { opacity: 1; transform: translate(-130px, 90px); }
          54%  { opacity: 1; transform: translate(0px, 0px); }
          68%  { opacity: 0; transform: translate(0px, 0px); }
          100% { opacity: 0; transform: translate(-130px, 90px); }
        }
        
        .anim-popup { 
          opacity: 0;
          transform: translateX(28px) scale(0.96);
        }
        
        .anim-wand { 
          clip-path: inset(100% 0% 0% 0%);
          opacity: 0;
        }
        
        .anim-mouse { 
          opacity: 0;
          transform: translate(-130px, 90px);
        }

        .carousel-card-active .anim-popup,
        .carousel-card-active .anim-wand,
        .carousel-card-active .anim-mouse {
          animation-iteration-count: 1;
          animation-fill-mode: both;
        }

        .carousel-card-active .anim-popup {
          animation: popupSlideIn 3.5s cubic-bezier(0.22, 1, 0.36, 1) 1 both;
        }

        .carousel-card-active .anim-wand {
          animation: wandReveal 3.5s ease-in-out 1 both;
        }

        .carousel-card-active .anim-mouse {
          animation: mouseMove 3.5s ease-in-out 1 both;
        }
      `}</style>
    </>
  );
};

export default CarouselCard2;
