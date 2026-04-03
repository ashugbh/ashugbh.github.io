const body = document.body;
const header = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".primary-nav");
const navLinks = Array.from(document.querySelectorAll(".primary-nav a"));
const revealElements = document.querySelectorAll(".reveal");
const yearNode = document.getElementById("current-year");
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

if (yearNode) {
  yearNode.textContent = String(new Date().getFullYear());
}

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

if (contactForm && formStatus) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(contactForm);
    const name = String(formData.get("name") || "").trim();
    if (!name) {
      formStatus.textContent = "Please add your name and try again.";
      return;
    }

    formStatus.textContent = `Thanks ${name}, your message is queued in this demo form. Connect this form to Formspree or your backend API to go live.`;
    contactForm.reset();
  });
}
