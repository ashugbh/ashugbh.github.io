import { useEffect, useState } from "react";
import styles from "./ProjectCarousel.module.css";
import { cx } from "../../assets/classNames";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

export default function ProjectCarousel({
  slides,
  title,
  variant = "default",
  showControls = true,
  activeIndex: controlledActiveIndex,
  onActiveIndexChange
}) {
  const [uncontrolledActiveIndex, setUncontrolledActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();
  const isControlled = controlledActiveIndex !== undefined;
  const activeIndex = isControlled ? controlledActiveIndex : uncontrolledActiveIndex;
  const setActiveIndex = onActiveIndexChange ?? setUncontrolledActiveIndex;

  const slideCount = slides.length;

  useEffect(() => {
    const handleVisibilityChange = () => setIsHidden(document.hidden);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    handleVisibilityChange();
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || slideCount < 2 || isPaused || isHidden) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % slideCount);
    }, 3400);

    return () => window.clearInterval(intervalId);
  }, [isHidden, isPaused, prefersReducedMotion, slideCount]);

  const goToSlide = (nextIndex) => {
    setActiveIndex((currentIndex) => (nextIndex + slideCount) % slideCount);
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goToSlide(activeIndex - 1);
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      goToSlide(activeIndex + 1);
    }
  };

  const handleTouchStart = (event) => {
    setIsPaused(true);
    event.currentTarget.dataset.touchStart = String(event.touches[0].clientX);
  };

  const handleTouchEnd = (event) => {
    const touchStartValue = Number(event.currentTarget.dataset.touchStart || 0);
    const touchEndValue = event.changedTouches[0]?.clientX ?? touchStartValue;
    const touchDelta = touchEndValue - touchStartValue;

    if (Math.abs(touchDelta) > 42) {
      goToSlide(activeIndex + (touchDelta < 0 ? 1 : -1));
    }

    event.currentTarget.dataset.touchStart = "";
    setIsPaused(false);
  };

  return (
    <div className={cx(styles.carousel, variant === "modal" && styles.carouselModal)}>
      <div
        className={cx(styles.viewport, variant === "modal" && styles.viewportModal)}
        tabIndex={0}
        role="group"
        aria-roledescription="carousel"
        aria-label={title}
        onKeyDown={handleKeyDown}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocusCapture={() => setIsPaused(true)}
        onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) {
            setIsPaused(false);
          }
        }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className={styles.track}
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {slides.map((slide, index) => {
            const isActive = index === activeIndex;

            return (
              <figure
                key={`${slide.src}-${slide.alt}`}
                className={cx(
                  styles.slide,
                  variant === "modal" && styles.slideModal,
                  isActive && styles.slideActive
                )}
                aria-hidden={!isActive}
              >
                <img
                  className={cx(styles.image, variant === "modal" && styles.imageModal)}
                  src={slide.src}
                  alt={slide.alt}
                  loading="lazy"
                  decoding="async"
                  width={576}
                  height={1280}
                />
              </figure>
            );
          })}
        </div>
      </div>

      {showControls ? (
        <div className={styles.controls} aria-label={`${title} screenshot controls`}>
          <button
            className={styles.button}
            type="button"
            onClick={() => goToSlide(activeIndex - 1)}
            aria-label="Show previous screenshot"
          >
            <span className={styles.buttonIcon} aria-hidden="true">
              &larr;
            </span>
            <span>Prev</span>
          </button>

          <p className={styles.status} aria-live="polite" aria-atomic="true">
            Screen <strong>{activeIndex + 1}</strong> / <strong>{slideCount}</strong>
          </p>

          <div className={styles.dots} aria-label="Screenshot navigation">
            {slides.map((slide, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={`${slide.src}-dot`}
                  className={cx(styles.dot, isActive && styles.dotActive)}
                  type="button"
                  onClick={() => goToSlide(index)}
                  aria-label={`Show screenshot ${index + 1}`}
                  aria-current={isActive ? "true" : "false"}
                />
              );
            })}
          </div>

          <button
            className={styles.button}
            type="button"
            onClick={() => goToSlide(activeIndex + 1)}
            aria-label="Show next screenshot"
          >
            <span>Next</span>
            <span className={styles.buttonIcon} aria-hidden="true">
              &rarr;
            </span>
          </button>
        </div>
      ) : null}
    </div>
  );
}
