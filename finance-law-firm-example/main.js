(() => {
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  /* ---------- live dateline: New York date, time and market hours ---------- */
  const NY = 'America/New_York';
  const dateFmt = new Intl.DateTimeFormat('en-US', { timeZone: NY, weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
  const timeFmt = new Intl.DateTimeFormat('en-US', { timeZone: NY, hour: 'numeric', minute: '2-digit' });
  const partsFmt = new Intl.DateTimeFormat('en-US', { timeZone: NY, weekday: 'short', hour: 'numeric', minute: 'numeric', hourCycle: 'h23' });

  function nyParts(d = new Date()) {
    const p = Object.fromEntries(partsFmt.formatToParts(d).map(x => [x.type, x.value]));
    return { weekday: p.weekday, minutes: Number(p.hour) * 60 + Number(p.minute) };
  }

  function tick() {
    const now = new Date();
    $$('[data-ny-date]').forEach(el => { el.textContent = dateFmt.format(now); });
    $$('[data-ny-time]').forEach(el => { el.textContent = timeFmt.format(now); });
    const { weekday, minutes } = nyParts(now);
    const open = !['Sat', 'Sun'].includes(weekday) && minutes >= 570 && minutes < 960; // 9:30 to 16:00
    const mkt = $('.mkt');
    if (mkt) {
      mkt.dataset.open = String(open);
      $('[data-mkt]').textContent = open ? 'Markets open' : 'Markets closed';
    }
  }
  tick();
  setInterval(tick, 30000);
  $$('[data-year]').forEach(el => { el.textContent = new Date().getFullYear(); });

  /* ---------- compact bar: shows on scroll-up once the masthead is gone ---------- */
  const bar = $('[data-bar]');
  const masthead = $('.masthead');
  let lastY = window.scrollY;
  let barShown = false;

  function setBar(show) {
    if (show === barShown) return;
    barShown = show;
    bar.classList.toggle('is-shown', show);
    bar.setAttribute('aria-hidden', String(!show));
    $$('a, button', bar).forEach(el => { el.tabIndex = show ? 0 : -1; });
  }
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    const past = y > masthead.offsetHeight + 40;
    if (!past) setBar(false);
    else if (y < lastY - 4) setBar(true);
    else if (y > lastY + 4) setBar(false);
    lastY = y;
  }, { passive: true });

  /* ---------- phone index menu ---------- */
  const menu = $('#index-menu');
  let menuTrigger = null;

  function openMenu(trigger) {
    menuTrigger = trigger;
    menu.hidden = false;
    document.body.style.overflow = 'hidden';
    $$('[data-menu-open]').forEach(b => b.setAttribute('aria-expanded', 'true'));
    $('[data-menu-close]', menu).focus();
  }
  function closeMenu(returnFocus = true) {
    menu.hidden = true;
    document.body.style.overflow = '';
    $$('[data-menu-open]').forEach(b => b.setAttribute('aria-expanded', 'false'));
    if (returnFocus && menuTrigger) menuTrigger.focus();
  }
  $$('[data-menu-open]').forEach(b => b.addEventListener('click', () => openMenu(b)));
  $('[data-menu-close]', menu).addEventListener('click', () => closeMenu());
  $$('a', menu).forEach(a => a.addEventListener('click', () => closeMenu(false)));
  menu.addEventListener('keydown', e => {
    if (e.key === 'Escape') { closeMenu(); return; }
    if (e.key !== 'Tab') return;
    const items = $$('a, button', menu);
    const first = items[0], last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  });
  window.matchMedia('(min-width: 901px)').addEventListener('change', e => { if (e.matches && !menu.hidden) closeMenu(false); });

  /* ---------- practices: accordion + hover preview ---------- */
  const IMG = id => `https://images.unsplash.com/photo-${id}?w=900&q=80&auto=format&fit=crop`;
  const practices = [
    { img: '1486406146926-c627a92ad1ab', lead: 'Eleanor Hale', count: 62 },
    { img: '1534430480872-3498386e7856', lead: 'Claire Whitlock', count: 71 },
    { img: '1450101499163-c8848c66ca85', lead: 'Arthur Brennan', count: 28 },
    { img: '1485871981521-5b1fd3805eee', lead: 'Samuel Lindqvist', count: 39 },
    { img: '1522083165195-3424ed129620', lead: 'Claire Whitlock', count: 44 },
    { img: '1486406146926-c627a92ad1ab', lead: 'Samuel Lindqvist', count: 33 },
    { img: '1505664194779-8beaceb93744', lead: 'Jonathan Pell', count: 52 },
    { img: '1589829545856-d10d557cf95f', lead: 'Margaret Cole', count: 19 },
  ];
  // warm the cache so the preview swap never shows an empty frame
  window.addEventListener('load', () => practices.forEach(p => { const i = new Image(); i.src = IMG(p.img); }));

  const rows = $$('.prac');
  const prevImg = $('[data-prev-img]');
  const prevN = $('[data-prev-n]');
  const prevName = $('[data-prev-name]');
  const prevFacts = $('[data-prev-facts]');
  let activeIdx = 0;

  function preview(i) {
    if (i === activeIdx) return;
    activeIdx = i;
    rows.forEach((r, j) => r.classList.toggle('is-active', j === i));
    const p = practices[i];
    const row = rows[i];
    prevN.textContent = $('.prac-n', row).textContent;
    prevName.textContent = $('.prac-name', row).textContent;
    prevFacts.textContent = `Lead partner: ${p.lead} · ${p.count} matters in 2025`;
    const src = IMG(p.img);
    if (prevImg.src === src) return;
    if (reduceMotion.matches) { prevImg.src = src; return; }
    prevImg.classList.add('is-swapping');
    setTimeout(() => { prevImg.src = src; prevImg.classList.remove('is-swapping'); }, 180);
  }
  rows[0].classList.add('is-active');

  rows.forEach((row, i) => {
    const btn = $('.prac-btn', row);
    const panel = $('.prac-detail', row);
    row.addEventListener('mouseenter', () => preview(i));
    btn.addEventListener('focus', () => preview(i));
    btn.addEventListener('click', () => {
      const open = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!open));
      panel.hidden = open;
      preview(i);
    });
  });

  /* "Book a consultation on X" preselects the matter type */
  const matterSelect = $('#f-matter');
  $$('[data-matter]').forEach(a => a.addEventListener('click', () => {
    const v = a.dataset.matter.replace('&amp;', '&');
    const opt = [...matterSelect.options].find(o => o.value === v || o.text === v);
    if (opt) matterSelect.value = opt.value;
    clearError(matterSelect);
  }));

  /* ---------- matters: filter the tombstones ---------- */
  const chips = $$('.chip');
  const tombs = $$('.tomb');
  const count = $('[data-filter-count]');
  chips.forEach(chip => chip.addEventListener('click', () => {
    const f = chip.dataset.filter;
    chips.forEach(c => c.setAttribute('aria-pressed', String(c === chip)));
    let n = 0;
    tombs.forEach(t => {
      const show = f === 'all' || t.dataset.tag === f;
      t.hidden = !show;
      t.classList.remove('is-entering');
      if (show) { n++; void t.offsetWidth; t.classList.add('is-entering'); }
    });
    count.textContent = f === 'all' ? `${n} matters` : `Showing ${n} of ${tombs.length} matters`;
  }));

  /* ---------- consultation form ---------- */
  const form = $('[data-form]');
  const success = $('[data-success]');
  const submit = $('[data-submit]');
  const leads = {
    'Leveraged Finance': 'Eleanor Hale', 'Private Credit': 'Claire Whitlock', 'Restructuring': 'Arthur Brennan',
    'Capital Markets': 'Samuel Lindqvist', 'Fund Finance': 'Claire Whitlock', 'Structured Finance & Derivatives': 'Samuel Lindqvist',
    'Financial Regulation': 'Jonathan Pell', 'Finance Litigation': 'Margaret Cole',
  };

  function fieldOf(input) { return input.closest('.field'); }
  function errOf(input) { return document.getElementById('e-' + input.id.replace('f-', '')); }
  function showError(input) {
    const err = errOf(input);
    fieldOf(input).classList.add('has-error');
    input.setAttribute('aria-invalid', 'true');
    if (err) { err.hidden = false; input.setAttribute('aria-describedby', err.id); err.setAttribute('role', 'alert'); }
  }
  function clearError(input) {
    const err = errOf(input);
    fieldOf(input).classList.remove('has-error');
    input.removeAttribute('aria-invalid');
    if (err) { err.hidden = true; err.removeAttribute('role'); if (input.getAttribute('aria-describedby') === err.id) input.removeAttribute('aria-describedby'); }
  }
  function valid(input) {
    const v = input.value.trim();
    if (!v) return false;
    if (input.type === 'email') return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
    return true;
  }
  const required = $$('[required]', form);
  required.forEach(input => {
    input.addEventListener('blur', () => { if (input.value.trim() && !valid(input)) showError(input); });
    input.addEventListener('input', () => { if (valid(input)) clearError(input); });
    input.addEventListener('change', () => { if (valid(input)) clearError(input); });
  });

  function nextBusinessDay() {
    const d = new Date();
    do { d.setTime(d.getTime() + 864e5); } while (['Sat', 'Sun'].includes(nyParts(d).weekday));
    return new Intl.DateTimeFormat('en-US', { timeZone: NY, weekday: 'long', month: 'long', day: 'numeric' }).format(d);
  }

  form.addEventListener('submit', e => {
    e.preventDefault();
    const bad = required.filter(i => !valid(i));
    required.forEach(i => (bad.includes(i) ? showError(i) : clearError(i)));
    if (bad.length) { bad[0].focus(); return; }

    submit.classList.add('is-loading');
    $('.btn-label', submit).textContent = 'Sending';
    submit.setAttribute('aria-busy', 'true');

    setTimeout(() => {
      const matter = matterSelect.value;
      const who = leads[matter];
      $('[data-success-text]').textContent = who
        ? `${who}'s team will call you by ${nextBusinessDay()}.`
        : `A partner will call you by ${nextBusinessDay()}, once we know which practice fits.`;
      $('[data-ref]').textContent = 'VT-' + String(new Date().getFullYear()).slice(2) + '-' + String(Math.floor(1000 + Math.random() * 9000));
      form.hidden = true;
      success.hidden = false;
      success.focus();
      submit.classList.remove('is-loading');
      submit.removeAttribute('aria-busy');
      $('.btn-label', submit).textContent = 'Book a consultation';
    }, 1100);
  });

  $('[data-reset]').addEventListener('click', () => {
    form.reset();
    required.forEach(clearError);
    success.hidden = true;
    form.hidden = false;
    $('#f-name').focus();
  });
})();
