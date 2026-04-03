const body = document.body;
const header = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".primary-nav");
const navLinks = Array.from(document.querySelectorAll(".primary-nav a"));
const revealElements = document.querySelectorAll(".reveal");
const yearNode = document.getElementById("current-year");

if (yearNode) {
  yearNode.textContent = String(new Date().getFullYear());
}

function syncHeaderScrollState() {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 8);
}

syncHeaderScrollState();
window.addEventListener("scroll", syncHeaderScrollState, { passive: true });

function closeNav() {
  body.classList.remove("nav-open");
  if (navToggle) {
    navToggle.setAttribute("aria-expanded", "false");
  }
}

function toggleNav() {
  const isOpen = body.classList.toggle("nav-open");
  if (navToggle) {
    navToggle.setAttribute("aria-expanded", String(isOpen));
  }
}

if (navToggle) {
  navToggle.addEventListener("click", toggleNav);
}

window.addEventListener("resize", () => {
  if (window.innerWidth > 760) {
    closeNav();
  }
});

document.addEventListener("click", (event) => {
  if (!body.classList.contains("nav-open")) return;
  if (!nav || !navToggle) return;
  const target = event.target;
  if (!(target instanceof Element)) return;
  if (target.closest(".primary-nav") || target.closest(".nav-toggle")) return;
  closeNav();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeNav();
  }
});

function smoothScrollTo(sectionId) {
  const section = document.getElementById(sectionId);
  if (!section || !header) return;
  const offset = header.offsetHeight + 6;
  const top = section.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: "smooth" });
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    const href = anchor.getAttribute("href");
    if (!href || href === "#") return;
    const sectionId = href.replace("#", "");
    const section = document.getElementById(sectionId);
    if (!section) return;
    event.preventDefault();
    smoothScrollTo(sectionId);
    closeNav();
    history.replaceState(null, "", `#${sectionId}`);
  });
});

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.16,
      rootMargin: "0px 0px -40px 0px"
    }
  );

  revealElements.forEach((node) => {
    revealObserver.observe(node);
  });
} else {
  revealElements.forEach((node) => node.classList.add("is-visible"));
}

function setActiveNavLink(sectionId) {
  navLinks.forEach((link) => {
    const isCurrent = link.dataset.section === sectionId;
    link.classList.toggle("is-active", isCurrent);
  });
}

const initialHash = window.location.hash ? window.location.hash.replace("#", "") : "home";
setActiveNavLink(initialHash || "home");

if ("IntersectionObserver" in window) {
  const sections = document.querySelectorAll("main section[id]");
  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveNavLink(entry.target.id);
        }
      });
    },
    {
      threshold: 0.35,
      rootMargin: "-25% 0px -55% 0px"
    }
  );

  sections.forEach((section) => navObserver.observe(section));
}

const emunSlider = document.querySelector('[data-slider="emun"]');
if (emunSlider) {
  const viewport = emunSlider.querySelector(".slider-viewport");
  const track = emunSlider.querySelector(".slider-track");
  const slides = Array.from(emunSlider.querySelectorAll(".slide"));
  const prevBtn = emunSlider.querySelector(".slider-btn.prev");
  const nextBtn = emunSlider.querySelector(".slider-btn.next");
  const dots = Array.from(emunSlider.querySelectorAll(".slider-dot"));
  const currentNode = emunSlider.querySelector("[data-slider-current]");
  const totalNode = emunSlider.querySelector("[data-slider-total]");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let activeIndex = 0;
  let autoTimer;
  let touchStartX = 0;
  let touchDeltaX = 0;
  const swipeThreshold = 42;

  if (totalNode) {
    totalNode.textContent = String(slides.length);
  }

  function renderSlide(index) {
    if (!track || slides.length === 0) return;
    const boundedIndex = (index + slides.length) % slides.length;
    activeIndex = boundedIndex;
    track.style.transform = `translateX(-${boundedIndex * 100}%)`;

    slides.forEach((slide, slideIndex) => {
      const isActive = slideIndex === boundedIndex;
      slide.classList.toggle("is-active", isActive);
      slide.setAttribute("aria-hidden", isActive ? "false" : "true");
    });

    dots.forEach((dot, dotIndex) => {
      const isActive = dotIndex === boundedIndex;
      dot.classList.toggle("is-active", isActive);
      dot.setAttribute("aria-current", isActive ? "true" : "false");
    });

    if (currentNode) {
      currentNode.textContent = String(boundedIndex + 1);
    }
  }

  function stopAutoSlide() {
    if (autoTimer) {
      window.clearInterval(autoTimer);
      autoTimer = undefined;
    }
  }

  function startAutoSlide() {
    if (prefersReducedMotion || slides.length < 2) return;
    stopAutoSlide();
    autoTimer = window.setInterval(() => {
      renderSlide(activeIndex + 1);
    }, 3400);
  }

  prevBtn?.addEventListener("click", () => {
    renderSlide(activeIndex - 1);
    startAutoSlide();
  });

  nextBtn?.addEventListener("click", () => {
    renderSlide(activeIndex + 1);
    startAutoSlide();
  });

  dots.forEach((dot, dotIndex) => {
    dot.addEventListener("click", () => {
      renderSlide(dotIndex);
      startAutoSlide();
    });
  });

  viewport?.setAttribute("tabindex", "0");
  viewport?.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      renderSlide(activeIndex - 1);
      startAutoSlide();
      return;
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      renderSlide(activeIndex + 1);
      startAutoSlide();
    }
  });

  viewport?.addEventListener(
    "touchstart",
    (event) => {
      touchStartX = event.touches[0].clientX;
      touchDeltaX = 0;
      stopAutoSlide();
    },
    { passive: true }
  );

  viewport?.addEventListener(
    "touchmove",
    (event) => {
      touchDeltaX = event.touches[0].clientX - touchStartX;
    },
    { passive: true }
  );

  viewport?.addEventListener("touchend", () => {
    if (Math.abs(touchDeltaX) >= swipeThreshold) {
      renderSlide(activeIndex + (touchDeltaX < 0 ? 1 : -1));
    }
    touchStartX = 0;
    touchDeltaX = 0;
    startAutoSlide();
  });

  viewport?.addEventListener("mouseenter", stopAutoSlide);
  viewport?.addEventListener("mouseleave", startAutoSlide);
  viewport?.addEventListener("focusin", stopAutoSlide);
  viewport?.addEventListener("focusout", startAutoSlide);
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      stopAutoSlide();
    } else {
      startAutoSlide();
    }
  });

  renderSlide(0);
  startAutoSlide();
}

const typedRoleNode = document.getElementById("typed-role");
if (typedRoleNode) {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const roles = ["secure, scalable FinTech products", "production Flutter experiences", "reliable backend API systems"];

  if (!prefersReducedMotion) {
    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;

    const tick = () => {
      const role = roles[roleIndex];
      typedRoleNode.textContent = deleting ? role.slice(0, Math.max(0, charIndex - 1)) : role.slice(0, charIndex + 1);
      charIndex += deleting ? -1 : 1;

      if (!deleting && charIndex === role.length) {
        deleting = true;
        window.setTimeout(tick, 1300);
        return;
      }

      if (deleting && charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }

      const delay = deleting ? 40 : 70;
      window.setTimeout(tick, delay);
    };

    window.setTimeout(tick, 600);
  }
}
