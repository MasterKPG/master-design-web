// Sidekick Pictures: hero reel expansion, video control, ink-pop reveals, phone menu, sentence form.
(() => {
  const root = document.documentElement;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)');
  const wide = matchMedia('(min-width: 901px)');
  let paused = reduce.matches; // reduced motion: videos wait for the user

  /* ---------- Lisbon clock ---------- */
  const clock = document.getElementById('clock');
  const tick = () => {
    clock.textContent = new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', timeZone: 'Europe/Lisbon' }).format(new Date());
  };
  tick(); setInterval(tick, 15000);

  /* ---------- Videos: load and play only when visible ---------- */
  const videos = [...document.querySelectorAll('video[data-src]')];
  const visible = new Set();
  const load = v => { if (!v.src) { v.src = v.dataset.src; } };
  const sync = v => {
    if (!paused && visible.has(v)) { load(v); v.play().catch(() => {}); }
    else if (!v.paused) v.pause();
  };
  const vio = new IntersectionObserver(entries => {
    entries.forEach(e => { e.isIntersecting ? visible.add(e.target) : visible.delete(e.target); sync(e.target); });
  }, { rootMargin: '200px 0px' });
  videos.forEach(v => vio.observe(v));

  const pauseBtn = document.getElementById('pauseAll');
  const setPaused = p => {
    paused = p;
    pauseBtn.setAttribute('aria-pressed', String(p));
    pauseBtn.setAttribute('aria-label', p ? 'Play all videos' : 'Pause all videos');
    videos.forEach(sync);
  };
  pauseBtn.addEventListener('click', () => setPaused(!paused));
  setPaused(paused);

  /* ---------- Ink pop reveals (base CSS stays visible without JS) ---------- */
  if (!reduce.matches && 'IntersectionObserver' in window) {
    root.classList.add('motion');
    const groups = new Map();
    document.querySelectorAll('[data-pop]').forEach(el => {
      const parent = el.parentElement;
      const i = groups.get(parent) || 0;
      groups.set(parent, i + 1);
      el.style.setProperty('--d', `${(i % 3) * 0.08}s`);
    });
    const pio = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); pio.unobserve(e.target); } });
    }, { threshold: 0.15 });
    document.querySelectorAll('[data-pop]').forEach(el => pio.observe(el));
  }

  /* ---------- Hero: the reel panel grows to full bleed ---------- */
  const hero = document.getElementById('top');
  const track = document.getElementById('heroTrack');
  const stage = document.getElementById('heroStage');
  const slot = document.getElementById('reelSlot');
  const reel = document.getElementById('reel');
  const page = document.getElementById('heroPage');
  const outs = [...document.querySelectorAll('[data-out]')];
  outs.forEach(el => {
    const [x, y] = el.dataset.out.split(',').map(Number);
    el.style.setProperty('--ox', x); el.style.setProperty('--oy', y);
  });
  let rect = null, pinned = false, raf = 0;
  const clamp01 = n => Math.min(1, Math.max(0, n));
  const easeInOut = t => t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  const measure = () => {
    const s = stage.getBoundingClientRect();
    const r = slot.getBoundingClientRect();
    rect = { t: r.top - s.top, l: r.left - s.left, r: s.right - r.right, b: s.bottom - r.bottom };
  };
  const frame = () => {
    raf = 0;
    if (!pinned) return;
    const total = track.offsetHeight - innerHeight;
    const p = clamp01(-track.getBoundingClientRect().top / total);
    const out = clamp01(p / 0.35);
    const grow = easeInOut(clamp01((p - 0.1) / 0.6));
    const cap = clamp01((p - 0.72) / 0.2);
    const s = hero.style;
    s.setProperty('--out', out.toFixed(3));
    s.setProperty('--p', grow.toFixed(3));
    s.setProperty('--cap', cap.toFixed(3));
    ['t', 'r', 'b', 'l'].forEach(k => s.setProperty(`--${k}`, `${(rect[k] * (1 - grow)).toFixed(1)}px`));
  };
  const request = () => { if (!raf) raf = requestAnimationFrame(frame); };
  const setMode = () => {
    const should = wide.matches && !reduce.matches;
    if (should !== pinned) {
      pinned = should;
      hero.classList.toggle('is-pinned', pinned);
      // pinned: the reel lives in the sticky stage so it can grow to full bleed; otherwise it sits in its panel
      if (pinned) stage.appendChild(reel); else page.insertBefore(reel, slot.nextSibling);
      if (!pinned) ['--out', '--p', '--cap', '--t', '--r', '--b', '--l'].forEach(k => hero.style.removeProperty(k));
    }
    if (pinned) {
      // measure with the reel at rest
      hero.style.setProperty('--out', 0);
      measure(); request();
    }
  };
  setMode();
  addEventListener('scroll', request, { passive: true });
  addEventListener('resize', () => { setMode(); });
  wide.addEventListener('change', setMode);
  reduce.addEventListener('change', setMode);

  // "Watch the reel": scroll to the full-bleed moment (or play it in place)
  document.getElementById('reelLink').addEventListener('click', e => {
    e.preventDefault();
    const v = document.getElementById('reelVideo');
    if (pinned) {
      const y = track.getBoundingClientRect().top + scrollY + (track.offsetHeight - innerHeight) * 0.95;
      scrollTo({ top: y, behavior: 'smooth' });
    } else {
      reel.scrollIntoView({ behavior: reduce.matches ? 'auto' : 'smooth', block: 'center' });
    }
    load(v); v.controls = !pinned; v.play().catch(() => {});
  });

  /* ---------- Phone menu ---------- */
  const menuBtn = document.getElementById('menuBtn');
  const menu = document.getElementById('menu');
  const setMenu = open => {
    menu.hidden = !open;
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.textContent = open ? 'Close' : 'Menu';
    document.body.style.overflow = open ? 'hidden' : '';
    if (open) menu.querySelector('a').focus();
  };
  menuBtn.addEventListener('click', () => setMenu(menu.hidden));
  menu.addEventListener('click', e => { if (e.target === menu || e.target.closest('a')) setMenu(false); });
  addEventListener('keydown', e => { if (e.key === 'Escape' && !menu.hidden) { setMenu(false); menuBtn.focus(); } });

  /* ---------- Sentence form ---------- */
  const form = document.getElementById('sform');
  const btn = document.getElementById('sendBtn');
  const fields = {
    brand: [document.getElementById('f-brand'), document.getElementById('err-brand'), v => v.trim() ? '' : "Tell us your brand's name."],
    email: [document.getElementById('f-email'), document.getElementById('err-email'), v => /^\S+@\S+\.\S+$/.test(v) ? '' : 'We need an email to reply to, like you@brand.com.'],
  };
  const check = key => {
    const [input, err, rule] = fields[key];
    const msg = rule(input.value);
    err.textContent = msg;
    input.setAttribute('aria-invalid', msg ? 'true' : 'false');
    return !msg;
  };
  Object.keys(fields).forEach(k => fields[k][0].addEventListener('blur', () => { if (fields[k][0].value) check(k); }));
  form.addEventListener('submit', e => {
    e.preventDefault();
    const ok = ['brand', 'email'].map(check).every(Boolean);
    if (!ok) { (fields.brand[0].getAttribute('aria-invalid') === 'true' ? fields.brand[0] : fields.email[0]).focus(); return; }
    btn.classList.add('is-loading'); btn.disabled = true;
    setTimeout(() => {
      const brand = fields.brand[0].value.trim();
      const what = document.getElementById('f-what').value;
      document.getElementById('sentText').textContent = `Got it! ${brand}, ${what}. Lina will reply by tomorrow, 18:00 Lisbon time.`;
      form.hidden = true;
      const sent = document.getElementById('sent');
      sent.hidden = false; sent.focus();
    }, 900);
  });
})();
