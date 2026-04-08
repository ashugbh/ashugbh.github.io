import { createPortal } from "react-dom";
import { useEffect, useRef, useState } from "react";
import styles from "./ProjectDemoModal.module.css";
import ProjectCarousel from "./ProjectCarousel";

const focusableSelector =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

export default function ProjectDemoModal({ project, onClose }) {
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);
  const previousActiveElementRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (project?.demo?.slides?.length) {
      setActiveIndex(0);
    }
  }, [project]);

  useEffect(() => {
    if (!project?.demo?.slides?.length) {
      return undefined;
    }

    previousActiveElementRef.current =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const animationFrameId = window.requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const dialog = dialogRef.current;
      if (!dialog) {
        return;
      }

      const focusableElements = Array.from(dialog.querySelectorAll(focusableSelector)).filter(
        (element) => !element.hasAttribute("aria-disabled")
      );

      if (!focusableElements.length) {
        event.preventDefault();
        return;
      }

      const firstFocusable = focusableElements[0];
      const lastFocusable = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstFocusable) {
        event.preventDefault();
        lastFocusable.focus();
      } else if (!event.shiftKey && document.activeElement === lastFocusable) {
        event.preventDefault();
        firstFocusable.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      window.cancelAnimationFrame(animationFrameId);
      document.body.style.overflow = previousOverflow;
      previousActiveElementRef.current?.focus?.();
    };
  }, [onClose, project]);

  if (!project?.demo?.slides?.length || typeof document === "undefined") {
    return null;
  }

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div className={styles.overlay} onClick={handleBackdropClick}>
      <div
        ref={dialogRef}
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-label={`${project.title} screenshot demo`}
        tabIndex={-1}
      >
        <button
          ref={closeButtonRef}
          className={styles.closeButton}
          type="button"
          onClick={onClose}
          aria-label={`Close ${project.title} demo`}
        >
          <span aria-hidden="true">X</span>
        </button>

        <div className={styles.carouselRow}>
          <button
            className={styles.navButton}
            type="button"
            onClick={() =>
              setActiveIndex((currentIndex) => (currentIndex - 1 + project.demo.slides.length) % project.demo.slides.length)
            }
            aria-label="Previous screenshot"
          >
            <span aria-hidden="true">‹</span>
          </button>

          <div className={styles.carouselShell}>
          <ProjectCarousel
            slides={project.demo.slides}
            title={project.title}
            variant="modal"
            showControls={false}
            activeIndex={activeIndex}
            onActiveIndexChange={setActiveIndex}
          />
          </div>

          <button
            className={styles.navButton}
            type="button"
            onClick={() =>
              setActiveIndex((currentIndex) => (currentIndex + 1) % project.demo.slides.length)
            }
            aria-label="Next screenshot"
          >
            <span aria-hidden="true">›</span>
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
