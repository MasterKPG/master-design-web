/* Calder · page behaviour. Plain JS, no dependencies. */
(() => {
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const motionOK = !matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (motionOK) document.documentElement.classList.add('motion');

  /* ---------- Data ----------
     Prices, specs and availability are placeholders for the client to replace. */
  const TODAY = new Date(); TODAY.setHours(0, 0, 0, 0);
  const CATS = { super: 'Supercar', hyper: 'Hypercar', gt: 'Grand tourer', chauffeur: 'Chauffeur & SUV', atelier: 'Atelier' };

  const FLEET = [
    { id: 'f12',   marque: 'Ferrari',          model: '12Cilindri Spider', cat: 'gt',        img: 'hero-12cilindri', hp: 830,  acc: 2.9, price: 3400, units: 2, city: 'Monaco', back: null },
    { id: 'sf90',  marque: 'Ferrari',          model: 'SF90 Spider',       cat: 'super',     img: 'ferrari-sf90',      hp: 1000, acc: 2.5, price: 2900, units: 3, city: 'Monaco', back: null },
    { id: 'rr-sp', marque: 'Rolls-Royce',      model: 'Spectre',           cat: 'gt',        img: 'rr-spectre',        hp: 585,  acc: 4.5, price: 2400, units: 2, city: 'London', back: null },
    { id: 'rev',   marque: 'Lamborghini',      model: 'Revuelto',          cat: 'super',     img: 'lambo-revuelto',    hp: 1015, acc: 2.5, price: 3900, units: 2, city: 'Monaco', back: '2026-11-12' },
    { id: 'chi',   marque: 'Bugatti',          model: 'Chiron',            cat: 'hyper',     img: 'bugatti-chiron',    hp: 1500, acc: 2.4, price: null, units: 1, city: 'Monaco', back: '2026-11-20' },
    { id: 's680',  marque: 'Mercedes-Maybach', model: 'S 680',             cat: 'chauffeur', img: 'maybach-s680',      hp: 612,  acc: 4.5, price: 1900, units: 4, city: 'Geneva', back: null, note: 'With or without chauffeur' },
    { id: '750s',  marque: 'McLaren',          model: '750S',              cat: 'super',     img: 'mclaren-750s',      hp: 750,  acc: 2.8, price: 1800, units: 3, city: 'London', back: null },
    { id: 'reg',   marque: 'Koenigsegg',       model: 'Regera',            cat: 'hyper',     img: 'koenigsegg-regera', hp: 1500, acc: 2.8, price: null, units: 1, city: 'Geneva', back: null },
    { id: 'db12',  marque: 'Aston Martin',     model: 'DB12',              cat: 'gt',        img: 'aston-db12',        hp: 680,  acc: 3.6, price: 1500, units: 4, city: 'London', back: null },
    { id: '296',   marque: 'Ferrari',          model: '296 GTB',           cat: 'super',     img: 'ferrari-296',       hp: 830,  acc: 2.9, price: 1900, units: 4, city: 'Geneva', back: null },
    { id: 'mc20',  marque: 'Maserati',         model: 'MC20',              cat: 'super',     img: 'maserati-mc20',     hp: 630,  acc: 2.9, price: 1400, units: 3, city: 'Monaco', back: null },
    { id: 'cul',   marque: 'Rolls-Royce',      model: 'Cullinan',          cat: 'chauffeur', img: 'rr-cullinan',       hp: 571,  acc: 5.2, price: 2200, units: 3, city: 'Monaco', back: null, note: 'With or without chauffeur' },
    { id: 'jes',   marque: 'Koenigsegg',       model: 'Jesko',             cat: 'hyper',     img: 'koenigsegg-jesko',  hp: 1600, acc: 2.5, price: null, units: 1, city: 'Geneva', back: '2026-12-01' },
    { id: 'g63',   marque: 'Mercedes-AMG',     model: 'G 63',              cat: 'chauffeur', img: 'g63',               hp: 585,  acc: 4.5, price: 1200, units: 6, city: 'London', back: null },
    { id: 'p720',  marque: 'Mansory',          model: 'P720 G-Class',      cat: 'atelier',   img: 'mansory-g',         hp: 720,  acc: null, price: 2600, units: 1, city: 'Monaco', back: null, note: 'Carbon wide body' },
    { id: 'b800',  marque: 'Brabus',           model: '800 G-Class',       cat: 'atelier',   img: 'brabus-g',          hp: 800,  acc: 4.1, price: 1800, units: 2, city: 'London', back: '2026-11-08' },
  ];
  const MARQUES = [
    ['Ferrari', 'ferrari-sf90'], ['Lamborghini', 'lambo-revuelto-stage'], ['McLaren', 'mclaren-750s'],
    ['Aston Martin', 'aston-db12'], ['Bugatti', 'bugatti-chiron'], ['Koenigsegg', 'koenigsegg-regera'],
    ['Rolls-Royce', 'rr-spectre'], ['Maserati', 'maserati-mc20'], ['Mercedes-Maybach', 'maybach-s680'],
    ['Mercedes-AMG', 'g63'], ['Mansory', 'mansory-g'], ['Brabus', 'brabus-g'],
  ];

  const src = (name) => `img/${name}.webp`;
  const eur = new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 });
  const num = new Intl.NumberFormat('en-GB');
  const shortDate = new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'short' });
  const isAvailable = (c) => !c.back || new Date(c.back + 'T00:00') <= TODAY;
  const availLabel = (c) => isAvailable(c) ? `Available today in ${c.city}` : `Back ${shortDate.format(new Date(c.back + 'T00:00'))}`;
  const arrow = '<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
  const esc = (s) => String(s).replace(/[&<>"]/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[ch]));

  /* ---------- Nav ---------- */
  const nav = $('#nav');
  const hero = $('.hero');
  const setNav = () => {
    const end = scrub ? hero.offsetTop + hero.offsetHeight - nav.offsetHeight - 1 : 24;
    nav.classList.toggle('is-solid', scrollY > end || $('#menu').hidden === false);
  };

  const menuBtn = $('.nav__menu');
  const menu = $('#menu');
  const setMenu = (open) => {
    menuBtn.setAttribute('aria-expanded', String(open));
    $('.sr-only', menuBtn).textContent = open ? 'Close menu' : 'Open menu';
    menu.hidden = !open;
    document.body.style.overflow = open ? 'hidden' : '';
    setNav();
    if (open) $('a', menu).focus();
  };
  menuBtn.addEventListener('click', () => setMenu(menu.hidden));
  menu.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
  addEventListener('keydown', (e) => { if (e.key === 'Escape' && !menu.hidden) { setMenu(false); menuBtn.focus(); } });

  /* ---------- Hero: frame opens to full bleed ---------- */
  const copy = $('.hero__copy');
  const media = $('.hero__media');
  let scrub = false;
  const layoutHero = () => {
    hero.classList.remove('is-scrub');
    if (!motionOK) { scrub = false; return; }
    hero.classList.add('is-scrub');
    const vh = innerHeight;
    const copyBottom = copy.offsetTop + copy.offsetHeight;
    const top = copyBottom + Math.max(32, vh * 0.05);
    // too little room for a frame (short or narrow screens): keep the static layout
    if (vh - top < vh * 0.3) { hero.classList.remove('is-scrub'); scrub = false; return; }
    const bottom = Math.max(24, vh * 0.04);
    hero.style.setProperty('--top', `${top}px`);
    hero.style.setProperty('--bottom', `${bottom}px`);
    // centre the car inside the opening frame
    hero.style.setProperty('--shift', `${(top - bottom) / 2}px`);
    scrub = true;
  };
  const updateHero = () => {
    if (!scrub) return;
    const total = hero.offsetHeight - innerHeight;
    const y = Math.min(Math.max(-hero.getBoundingClientRect().top, 0), total);
    const p = Math.min(1, y / (total * 0.72));
    hero.style.setProperty('--p', p.toFixed(4));
    media.classList.toggle('is-open', p > 0.98);
  };

  /* ---------- Marque index ---------- */
  const index = $('#marque-index');
  index.innerHTML = MARQUES.map(([name, img], i) => {
    const cars = FLEET.filter((c) => c.marque === name);
    const units = cars.reduce((s, c) => s + c.units, 0);
    return `<li><button type="button" data-marque="${esc(name)}" data-img="${img}">
      <span class="index__n">${String(i + 1).padStart(2, '0')}</span>
      <span class="index__name">${esc(name)}</span>
      <span class="index__models">${cars.map((c) => esc(c.model)).join(' · ')}</span>
      <span class="index__count">${units} ${units === 1 ? 'car' : 'cars'}</span>
      <img class="index__thumb" src="${src(img)}" alt="" loading="lazy">
    </button></li>`;
  }).join('');

  // cursor preview (pointer devices only; keyboard and touch see the list and thumbnails)
  const peek = $('#peek');
  const peekImg = $('img', peek);
  if (finePointer) {
    let tx = 0, ty = 0, x = 0, y = 0, raf = 0, on = false;
    const loop = () => {
      x += (tx - x) * 0.16; y += (ty - y) * 0.16;
      peek.style.transform = `translate3d(${x + 28}px, ${y - 100}px, 0) rotate(${Math.max(-4, Math.min(4, (tx - x) * 0.04))}deg)`;
      raf = on || Math.abs(tx - x) > 0.5 ? requestAnimationFrame(loop) : 0;
    };
    index.addEventListener('pointermove', (e) => {
      tx = e.clientX; ty = e.clientY;
      if (!on) { x = tx; y = ty; }
      if (!raf) raf = requestAnimationFrame(loop);
    });
    index.addEventListener('pointerover', (e) => {
      const b = e.target.closest('button');
      if (!b) return;
      const next = src(b.dataset.img);
      if (!peekImg.src.endsWith(next)) peekImg.src = next;
      on = true; peek.classList.add('is-on');
    });
    index.addEventListener('pointerleave', () => { on = false; peek.classList.remove('is-on'); });
  }
  index.addEventListener('click', (e) => {
    const b = e.target.closest('button');
    if (!b) return;
    setFilter({ marque: b.dataset.marque });
    $('#collection').scrollIntoView({ behavior: motionOK ? 'smooth' : 'auto' });
  });

  /* ---------- Collection ---------- */
  const grid = $('#grid');
  const count = $('#count');
  const more = $('#more');
  const chip = $('#marque-chip');
  const PAGE = 9;
  let state = { cat: 'all', marque: null, expanded: false };

  const card = (c) => {
    const spec = [`${num.format(c.hp)} hp`, c.acc ? `0–100 ${c.acc.toFixed(1)} s` : c.note].filter(Boolean).join(' · ');
    const price = c.price
      ? `<strong>${eur.format(c.price)}</strong><span>per day</span>`
      : `<strong>On request</strong><span>2 day minimum</span>`;
    return `<li><a class="car" href="#reserve" data-reserve="${c.id}" aria-label="${esc(c.marque)} ${esc(c.model)}, ${c.price ? eur.format(c.price) + ' per day' : 'price on request'}, ${availLabel(c)}. Reserve">
      <div class="car__media">
        <span class="avail ${isAvailable(c) ? '' : 'avail--later'}"><span class="dot" aria-hidden="true"></span>${esc(availLabel(c))}</span>
        <img src="${src(c.img)}" alt="" loading="lazy" width="1600" height="1067">
      </div>
      <div class="car__body">
        <span class="label car__marque">${esc(c.marque)}</span>
        <span class="car__model">${esc(c.model)}</span>
        <span class="car__price">${price}</span>
        <span class="car__spec spec"><span>${esc(spec)}</span><span class="car__cta">Reserve ${arrow}</span></span>
      </div>
    </a></li>`;
  };

  const render = (animate) => {
    const list = FLEET.filter((c) => (state.cat === 'all' || c.cat === state.cat) && (!state.marque || c.marque === state.marque));
    const shown = state.expanded || list.length <= PAGE + 2 ? list : list.slice(0, PAGE);
    grid.innerHTML = shown.map(card).join('');
    if (animate && motionOK) $$('li', grid).forEach((li, i) => { li.classList.add('is-entering'); li.style.animationDelay = `${Math.min(i, 8) * 50}ms`; });
    const units = list.reduce((s, c) => s + c.units, 0);
    count.textContent = `${list.length} ${list.length === 1 ? 'model' : 'models'} · ${units} ${units === 1 ? 'car' : 'cars'}`;
    const hidden = list.length - shown.length;
    more.hidden = list.length <= PAGE + 2;
    const text = state.expanded ? 'Show fewer cars' : `Show ${hidden} more ${hidden === 1 ? 'car' : 'cars'}`;
    const lab = $('.btn__label', more);
    lab.dataset.label = text; $('span', lab).textContent = text;
    more.setAttribute('aria-expanded', String(state.expanded));
  };

  const setFilter = (next) => {
    state = { ...state, ...next, expanded: false };
    if ('marque' in next && next.marque) state.cat = 'all';
    if ('cat' in next) state.marque = null;
    $$('#filters [data-filter]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.filter === state.cat && !state.marque)));
    chip.hidden = !state.marque;
    if (state.marque) {
      $('span', chip).textContent = state.marque;
      chip.setAttribute('aria-label', `Showing ${state.marque} only. Clear`);
    }
    render(true);
  };

  $('#filters').addEventListener('click', (e) => {
    const b = e.target.closest('button');
    if (!b) return;
    if (b === chip) { setFilter({ cat: 'all' }); $('[data-filter="all"]').focus(); return; }
    setFilter({ cat: b.dataset.filter });
  });
  more.addEventListener('click', () => {
    state.expanded = !state.expanded;
    render(false);
    if (!state.expanded) $('#collection').scrollIntoView({ behavior: motionOK ? 'smooth' : 'auto' });
  });
  $$('[data-filter-link]').forEach((a) => a.addEventListener('click', () => setFilter({ cat: a.dataset.filterLink })));
  render(false);

  /* ---------- Reserve form ---------- */
  const form = $('#form');
  const carSel = $('#f-car');
  const byMarque = MARQUES.map(([m]) => [m, FLEET.filter((c) => c.marque === m)]).filter(([, cars]) => cars.length);
  carSel.innerHTML = '<option value="">Choose a car</option>' + byMarque.map(([m, cars]) =>
    `<optgroup label="${esc(m)}">${cars.map((c) => `<option value="${c.id}">${esc(c.marque)} ${esc(c.model)}</option>`).join('')}</optgroup>`).join('');

  const iso = (d) => new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
  $('#f-from').min = iso(TODAY);
  $('#f-to').min = iso(TODAY);
  $('#f-from').addEventListener('change', (e) => { $('#f-to').min = e.target.value || iso(TODAY); });

  // any "reserve" link preselects the car and its city
  document.addEventListener('click', (e) => {
    const a = e.target.closest('[data-reserve]');
    if (!a) return;
    const car = FLEET.find((c) => c.id === a.dataset.reserve);
    if (!car) return;
    if (!form.hidden) {
      carSel.value = car.id;
      const radio = $(`input[name="city"][value="${car.city}"]`);
      if (radio) radio.checked = true;
      clearError('car');
      const wrap = carSel.parentElement;
      wrap.classList.remove('is-pulse'); void wrap.offsetWidth; wrap.classList.add('is-pulse');
    }
  });

  const showError = (name, msg) => {
    const el = $(`#e-${name}`);
    const field = el.closest('.field');
    el.textContent = msg; el.hidden = false;
    field.classList.add('is-invalid');
    $('input, select', field).setAttribute('aria-invalid', 'true');
  };
  const clearError = (name) => {
    const el = $(`#e-${name}`);
    if (!el) return;
    const field = el.closest('.field');
    el.hidden = true; field.classList.remove('is-invalid');
    $('input, select', field).removeAttribute('aria-invalid');
  };
  form.addEventListener('input', (e) => clearError(e.target.name));

  const validate = () => {
    const d = Object.fromEntries(new FormData(form));
    const errs = [];
    if (!d.car) errs.push(['car', 'Choose the car you would like.']);
    if (!d.from) errs.push(['from', 'Add the first day.']);
    if (!d.to) errs.push(['to', 'Add the last day.']);
    if (d.from && d.to && d.to < d.from) errs.push(['to', 'The last day comes before the first.']);
    if (!d.name || d.name.trim().length < 2) errs.push(['name', 'Add your name so the concierge knows who to ask for.']);
    const contact = (d.contact || '').trim();
    const okEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact);
    const okPhone = /^\+?[\d\s().-]{7,}$/.test(contact);
    if (!contact) errs.push(['contact', 'Add a phone number or an email.']);
    else if (!okEmail && !okPhone) errs.push(['contact', 'This doesn\'t look like a phone number or an email.']);
    return { d, errs };
  };

  const submit = $('#submit');
  const done = $('#done');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    ['car', 'from', 'to', 'name', 'contact'].forEach(clearError);
    const { d, errs } = validate();
    if (errs.length) {
      errs.forEach(([n, m]) => showError(n, m));
      $(`[name="${errs[0][0]}"]`, form).focus();
      return;
    }
    submit.classList.add('is-loading');
    submit.setAttribute('aria-busy', 'true');
    // demo only: no backend, simulate the request
    setTimeout(() => {
      submit.classList.remove('is-loading');
      submit.removeAttribute('aria-busy');
      const car = FLEET.find((c) => c.id === d.car);
      const f = shortDate.format(new Date(d.from + 'T00:00'));
      const t = shortDate.format(new Date(d.to + 'T00:00'));
      $('#done-summary').textContent = `${car.marque} ${car.model} · ${d.city} · ${f === t ? f : `${f} to ${t}`}`;
      $('#done-next').textContent = `A concierge will contact you at ${d.contact.trim()} within 20 minutes to confirm.`;
      form.hidden = true; done.hidden = false; done.focus();
    }, 1100);
  });
  $('#edit').addEventListener('click', () => { done.hidden = true; form.hidden = false; carSel.focus(); });

  /* ---------- City clocks ---------- */
  const clocks = $$('time[data-tz]').map((el) => [el, new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', timeZone: el.dataset.tz })]);
  const tick = () => clocks.forEach(([el, fmt]) => { const now = new Date(); el.textContent = fmt.format(now); el.dateTime = now.toISOString(); });
  tick(); setInterval(tick, 30000);

  /* ---------- Reveals: the frame opens ---------- */
  if (motionOK && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
    }), { rootMargin: '0px 0px -12% 0px', threshold: 0.05 });
    $$('.reveal').forEach((el) => io.observe(el));
  } else {
    $$('.reveal').forEach((el) => el.classList.add('in'));
  }

  /* ---------- Credits (CC licences require attribution) ---------- */
  $('#credits').innerHTML = (window.CREDITS || []).map((c) =>
    `<li><a href="${esc(c.page)}" rel="noopener">${esc(c.title.replace(/^File:/, '').replace(/\.(jpe?g|png)$/i, ''))}</a>, ${esc(c.artist || 'unknown')}, ${esc(c.license)}</li>`).join('');

  /* ---------- Scroll loop ---------- */
  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => { updateHero(); setNav(); ticking = false; });
  };
  const onResize = () => { layoutHero(); updateHero(); setNav(); };
  addEventListener('scroll', onScroll, { passive: true });
  addEventListener('resize', onResize);
  document.fonts?.ready.then(onResize);
  onResize();
})();
