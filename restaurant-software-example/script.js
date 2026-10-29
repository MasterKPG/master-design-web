// Mise landing page: nav state, hero pull-away, CTA reverse, reveals,
// feature tabs on a timer, logo ribbon pause.

document.documentElement.classList.add("js");

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const clamp = (v, min = 0, max = 1) => Math.min(max, Math.max(min, v));

// ---------- Nav: solid background once the page moves ----------
const nav = document.querySelector("[data-nav]");

// ---------- Hero pull-away and CTA reverse ----------
const hero = document.querySelector("[data-hero]");
const cta = document.querySelector("[data-cta]");

function onScroll() {
  const y = window.scrollY;
  nav.classList.toggle("is-scrolled", y > 24);

  if (reduceMotion) return;

  // Hero: 0 at the top, 1 once we've scrolled 70% of the viewport
  const p = clamp(y / (window.innerHeight * 0.7));
  hero.style.setProperty("--p", p.toFixed(3));

  // CTA: 0 when its top meets the bottom of the screen, 1 at the middle of the screen
  const top = cta.getBoundingClientRect().top;
  const vh = window.innerHeight;
  const q = clamp((vh - top) / (vh * 0.5));
  cta.style.setProperty("--q", q.toFixed(3));
}

let ticking = false;
window.addEventListener("scroll", () => {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    onScroll();
    ticking = false;
  });
}, { passive: true });
window.addEventListener("resize", onScroll);
onScroll();

// ---------- Reveal on scroll ----------
const revealer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("is-in");
    revealer.unobserve(entry.target);
  });
}, { rootMargin: "0px 0px -12% 0px" });
document.querySelectorAll("[data-reveal]").forEach((el) => revealer.observe(el));

// ---------- Feature tabs ----------
const tabsRoot = document.querySelector("[data-tabs]");
const tabs = [...tabsRoot.querySelectorAll('[role="tab"]')];
const pauseBtn = tabsRoot.querySelector("[data-tabs-pause]");
let userPaused = reduceMotion;

function selectTab(next, { focus = false } = {}) {
  tabs.forEach((tab) => {
    const selected = tab === next;
    const panel = document.getElementById(tab.getAttribute("aria-controls"));
    tab.setAttribute("aria-selected", String(selected));
    tab.tabIndex = selected ? 0 : -1;
    panel.hidden = !selected;
    panel.classList.toggle("is-entering", selected);
  });
  if (focus) next.focus();
}

tabs.forEach((tab, i) => {
  tab.addEventListener("click", () => selectTab(tab));
  tab.addEventListener("keydown", (e) => {
    const step = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[e.key];
    if (step) {
      e.preventDefault();
      selectTab(tabs[(i + step + tabs.length) % tabs.length], { focus: true });
    } else if (e.key === "Home") {
      e.preventDefault();
      selectTab(tabs[0], { focus: true });
    } else if (e.key === "End") {
      e.preventDefault();
      selectTab(tabs[tabs.length - 1], { focus: true });
    }
  });

  // The timer bar finishing is what advances the tabs
  tab.querySelector(".tab-progress").addEventListener("animationend", () => {
    if (userPaused) return;
    selectTab(tabs[(i + 1) % tabs.length]);
  });
});

function setPaused(paused) {
  tabsRoot.classList.toggle("is-paused", paused);
}

function setPauseButton() {
  pauseBtn.setAttribute("aria-pressed", String(userPaused));
  pauseBtn.innerHTML = userPaused
    ? '<i class="ph ph-play"></i><span>Play</span>'
    : '<i class="ph ph-pause"></i><span>Pause</span>';
}

pauseBtn.addEventListener("click", () => {
  userPaused = !userPaused;
  setPaused(userPaused);
  setPauseButton();
});

// Hold the timer while someone is looking at or using the tabs
tabsRoot.addEventListener("pointerenter", () => setPaused(true));
tabsRoot.addEventListener("pointerleave", () => setPaused(userPaused));
tabsRoot.addEventListener("focusin", () => setPaused(true));
tabsRoot.addEventListener("focusout", (e) => {
  if (!tabsRoot.contains(e.relatedTarget)) setPaused(userPaused);
});

// Only start the clock once the section is on screen
const tabsWatcher = new IntersectionObserver(([entry]) => {
  if (!entry.isIntersecting) return;
  selectTab(tabs[0]);
  tabsWatcher.disconnect();
}, { threshold: 0.35 });

setPaused(true);
setPauseButton();
if (reduceMotion) {
  pauseBtn.hidden = true;
} else {
  tabsWatcher.observe(tabsRoot);
  // Unpause once visible (pointer/focus handlers may re-pause)
  new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting && !tabsRoot.matches(":hover")) setPaused(userPaused);
  }, { threshold: 0.35 }).observe(tabsRoot);
}

// ---------- Logo ribbon pause ----------
const marquee = document.querySelector("[data-marquee]");
const marqueeBtn = document.querySelector("[data-marquee-toggle]");

marqueeBtn.addEventListener("click", () => {
  const paused = marquee.classList.toggle("is-paused");
  marqueeBtn.setAttribute("aria-pressed", String(paused));
  marqueeBtn.setAttribute("aria-label", paused ? "Play the logo ribbon" : "Pause the logo ribbon");
  marqueeBtn.innerHTML = paused ? '<i class="ph ph-play"></i>' : '<i class="ph ph-pause"></i>';
});
if (reduceMotion) marqueeBtn.hidden = true;
