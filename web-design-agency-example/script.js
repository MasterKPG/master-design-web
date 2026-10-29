document.documentElement.classList.add('js');
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

/* reveal on scroll */
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('[data-reveal]').forEach(el => io.observe(el));

/* nav border + hero bookend: hero copy blurs back as the stage scrolls over it */
const nav = document.getElementById('nav');
const heroCopy = document.getElementById('heroCopy');
let ticking = false;
function onScroll() {
  const y = scrollY;
  nav.classList.toggle('scrolled', y > 8);
  if (!reduce) {
    const p = Math.min(y / 520, 1);
    heroCopy.style.transform = `translateY(${p * 40}px)`;
    heroCopy.style.filter = p > 0.02 ? `blur(${p * 5}px)` : '';
    heroCopy.style.opacity = 1 - p * 0.6;
  }
  ticking = false;
}
addEventListener('scroll', () => { if (!ticking) { requestAnimationFrame(onScroll); ticking = true; } }, { passive: true });

/* mobile menu */
const menuBtn = document.querySelector('.menu-btn');
const mmenu = document.getElementById('mmenu');
menuBtn.addEventListener('click', () => {
  const open = menuBtn.getAttribute('aria-expanded') === 'true';
  menuBtn.setAttribute('aria-expanded', String(!open));
  mmenu.hidden = open;
});
mmenu.addEventListener('click', e => { if (e.target.tagName === 'A') { mmenu.hidden = true; menuBtn.setAttribute('aria-expanded', 'false'); } });

/* design notes switch */
const sw = document.getElementById('notesSwitch');
const stage = document.getElementById('stage');
sw.addEventListener('click', () => {
  const on = sw.getAttribute('aria-checked') !== 'true';
  sw.setAttribute('aria-checked', String(on));
  stage.classList.toggle('notes-off', !on);
});

/* logo marquee pause */
const mq = document.getElementById('marquee');
const mqBtn = document.getElementById('marqueeToggle');
mqBtn.addEventListener('click', () => {
  const paused = mq.classList.toggle('paused');
  mqBtn.setAttribute('aria-label', paused ? 'Play logo animation' : 'Pause logo animation');
  mqBtn.querySelector('use').setAttribute('href', paused ? '#i-play' : '#i-pause');
});

/* process tabs: keyboard, auto-advance with a visible timer and a pause */
const tabs = [...document.querySelectorAll('[role="tab"]')];
const panels = tabs.map(t => document.getElementById(t.getAttribute('aria-controls')));
const stepLabel = document.getElementById('stepLabel');
const autoBtn = document.getElementById('autoToggle');
const DURATION = 7000;
let current = 0, elapsed = 0, last = 0, userPaused = reduce, hoverPaused = false, inView = false;

function select(i, focus) {
  current = (i + tabs.length) % tabs.length;
  tabs.forEach((t, n) => {
    const on = n === current;
    t.setAttribute('aria-selected', String(on));
    t.tabIndex = on ? 0 : -1;
    t.style.setProperty('--p', on ? 0 : 1);
    panels[n].classList.toggle('active', on);
  });
  stepLabel.textContent = `Step ${current + 1} of ${tabs.length}`;
  elapsed = 0;
  if (focus) tabs[current].focus();
  paintBar();
}
function paintBar() {
  const p = userPaused ? 1 : elapsed / DURATION;
  tabs[current].style.setProperty('--p', p);
}
tabs.forEach((t, i) => {
  t.addEventListener('click', () => select(i));
  t.addEventListener('keydown', e => {
    const k = e.key;
    if (k === 'ArrowDown' || k === 'ArrowRight') { e.preventDefault(); select(current + 1, true); }
    if (k === 'ArrowUp' || k === 'ArrowLeft') { e.preventDefault(); select(current - 1, true); }
    if (k === 'Home') { e.preventDefault(); select(0, true); }
    if (k === 'End') { e.preventDefault(); select(tabs.length - 1, true); }
  });
});
const procEl = document.querySelector('.proc');
procEl.addEventListener('mouseenter', () => hoverPaused = true);
procEl.addEventListener('mouseleave', () => hoverPaused = false);
procEl.addEventListener('focusin', () => hoverPaused = true);
procEl.addEventListener('focusout', () => hoverPaused = false);
new IntersectionObserver(([e]) => inView = e.isIntersecting, { threshold: 0.3 }).observe(procEl);

function setAuto(paused) {
  userPaused = paused;
  autoBtn.setAttribute('aria-label', paused ? 'Resume auto-advance' : 'Pause auto-advance');
  autoBtn.querySelector('use').setAttribute('href', paused ? '#i-play' : '#i-pause');
  paintBar();
}
autoBtn.addEventListener('click', () => setAuto(!userPaused));
if (reduce) setAuto(true);

function loop(ts) {
  const dt = last ? ts - last : 0; last = ts;
  if (!userPaused && !hoverPaused && inView && !document.hidden) {
    elapsed += dt;
    if (elapsed >= DURATION) select(current + 1);
    paintBar();
  }
  requestAnimationFrame(loop);
}
select(0);
requestAnimationFrame(loop);
