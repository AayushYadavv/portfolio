import { useEffect, useRef, useState } from "react";
import { project1Styles as styles } from "./styles";

interface CarouselProps {
  slots: React.ReactNode[];
  cycleDurations?: number[];
}

const DEFAULT_CYCLE_DURATION = 2000;

const Carousel = ({ slots, cycleDurations = [] }: CarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const isPausedRef = useRef(false);
  const cycleTimerRef = useRef<number | null>(null);
  const frameRef = useRef<number | null>(null);
  const [activeDisplayIndex, setActiveDisplayIndex] = useState(0);
  const currentDisplayIndexRef = useRef(0);
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  // Clone the first slide at the end so scrolling past slide 5
  // moves naturally into slide 1 from the right, then we silently
  // teleport back to the real slide 1 while both look identical.
  const displaySlots = slots.length > 0 ? [...slots, slots[0]] : slots;

  const cloneIndex = slots.length;
  const getRealIndex = (displayIndex: number) => (displayIndex >= slots.length ? 0 : displayIndex);
  const getSlotDuration = (displayIndex: number) => {
    const realIndex = getRealIndex(displayIndex);
    return cycleDurations[realIndex] ?? DEFAULT_CYCLE_DURATION;
  };

  const getCenteredScrollLeft = (container: HTMLDivElement, card: HTMLElement) => {
    const centeredOffset = (container.clientWidth - card.clientWidth) / 2;
    const rawLeft = card.offsetLeft - centeredOffset;
    const maxLeft = Math.max(container.scrollWidth - container.clientWidth, 0);
    return Math.min(Math.max(rawLeft, 0), maxLeft);
  };

  const clearScheduledWork = () => {
    if (cycleTimerRef.current !== null) {
      window.clearTimeout(cycleTimerRef.current);
      cycleTimerRef.current = null;
    }

    if (frameRef.current !== null) {
      window.cancelAnimationFrame(frameRef.current);
      frameRef.current = null;
    }
  };

  const scrollToIndex = (
    index: number,
    behavior: ScrollBehavior = "smooth",
    shouldActivate = true,
  ) => {
    const container = carouselRef.current;
    if (!container) return;
    const cards = Array.from(container.children) as HTMLElement[];
    if (cards.length === 0) return;
    const clamped = Math.min(Math.max(index, 0), cards.length - 1);
    container.scrollTo({ left: getCenteredScrollLeft(container, cards[clamped]), behavior });
    currentDisplayIndexRef.current = clamped;

    if (shouldActivate) {
      setActiveDisplayIndex(clamped);
    }
  };

  const goToIndex = (index: number, behavior: ScrollBehavior = "smooth") => {
    scrollToIndex(index, behavior, true);
    scheduleNext(index);
  };

  const scrollCarousel = (direction: "left" | "right") => {
    if (slots.length <= 1) return;

    clearScheduledWork();

    const currentIndex = currentDisplayIndexRef.current;
    const currentRealIndex = getRealIndex(currentIndex);

    if (direction === "right") {
      const nextIndex = currentRealIndex === slots.length - 1 ? cloneIndex : currentRealIndex + 1;
      goToIndex(nextIndex);
    } else {
      if (currentIndex === cloneIndex) {
        scrollToIndex(0, "auto", false);
      }

      const prevIndex = currentRealIndex <= 0 ? slots.length - 1 : currentRealIndex - 1;
      goToIndex(prevIndex);
    }
  };

  const scheduleNext = (displayIndex: number) => {
    clearScheduledWork();

    const advance = () => {
      if (isPausedRef.current) {
        cycleTimerRef.current = window.setTimeout(advance, 120);
        return;
      }

      if (displayIndex === cloneIndex) {
        scrollToIndex(0, "auto", false);
        frameRef.current = window.requestAnimationFrame(() => {
          goToIndex(1 % slots.length);
        });
        return;
      }

      const nextIndex = displayIndex === slots.length - 1 ? cloneIndex : displayIndex + 1;
      goToIndex(nextIndex);
    };

    cycleTimerRef.current = window.setTimeout(advance, getSlotDuration(displayIndex));
  };

  useEffect(() => {
    const container = carouselRef.current;
    if (!container || slots.length <= 1) return;

    scrollToIndex(0, "auto");
    scheduleNext(0);

    return () => {
      clearScheduledWork();
    };
  }, [cycleDurations.join(","), slots.length]);

  return (
    <>
      <div style={styles.carouselWrapper}>
        <div style={styles.carouselFadeLeft} />
        <div style={styles.carouselFadeRight} />
        <div
          ref={carouselRef}
          className="project1-carousel-container"
          style={styles.carouselContainer}
          onMouseEnter={() => { isPausedRef.current = true; }}
          onMouseLeave={() => { isPausedRef.current = false; }}
          onWheel={(e) => {
            if (Math.abs(e.deltaY) < 1) return;
            e.preventDefault();
            scrollCarousel(e.deltaY > 0 ? "right" : "left");
          }}
        >
          {displaySlots.map((slot, i) => {
            const isActive = activeDisplayIndex === i;
            const hasCustomContent =
              slot !== null &&
              slot !== undefined &&
              typeof slot !== "string" &&
              typeof slot !== "number";
            return (
              <div
                key={i === slots.length ? "clone-0" : `slide-${i}`}
                className={isActive ? "carousel-card-active" : ""}
                style={{
                  ...styles.carouselImage(hoveredImage === i + 1),
                  display: hasCustomContent ? "block" : "flex",
                  backgroundColor: hasCustomContent ? "transparent" : "#f5f5f5",
                  overflow: "hidden",
                }}
                onMouseEnter={() => setHoveredImage(i + 1)}
                onMouseLeave={() => setHoveredImage(null)}
              >
                {hasCustomContent ? (
                  <div style={{ width: "100%", height: "100%" }}>
                    {slot}
                  </div>
                ) : (
                  slot ?? `UI Screen ${i + 1}`
                )}
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .project1-carousel-container::-webkit-scrollbar { display: none; }
      `}</style>
    </>
  );
};

export default Carousel;
