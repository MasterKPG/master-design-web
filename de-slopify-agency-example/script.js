// De-slopify landing page. The page works without this file; this adds the passes,
// toggles, sliders, form states and motion.
(() => {
  const root = document.documentElement;
  root.classList.add("js");

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const clamp = (v, min = 0, max = 1) => Math.min(max, Math.max(min, v));

  /* ---------- nav: hide on scroll down, show on scroll up ---------- */
  const nav = document.querySelector("[data-nav]");
  const navToggle = nav.querySelector(".nav-toggle");
  let lastY = window.scrollY;

  const closeMenu = () => {
    nav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  };
  navToggle.addEventListener("click", () => {
    const open = !nav.classList.contains("is-open");
    nav.classList.toggle("is-open", open);
    navToggle.setAttribute("aria-expanded", String(open));
  });
  nav.querySelectorAll(".nav-links a").forEach((a) => a.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nav.classList.contains("is-open")) { closeMenu(); navToggle.focus(); }
  });
  nav.addEventListener("focusin", () => nav.classList.remove("is-hidden"));

  const updateNav = () => {
    const y = window.scrollY;
    nav.classList.toggle("is-scrolled", y > 8);
    if (!nav.classList.contains("is-open")) {
      if (y > lastY + 4 && y > 160) nav.classList.add("is-hidden");
      else if (y < lastY - 4 || y <= 160) nav.classList.remove("is-hidden");
    }
    lastY = y;
  };

  /* ---------- hero: three passes, scrubbed by scroll or picked with buttons ---------- */
  const track = document.querySelector("[data-hero]");
  const stage = document.querySelector("[data-stage]");
  const passButtons = [...stage.querySelectorAll("[data-pass]")];
  const passLive = stage.querySelector("[data-pass-live]");
  const passNames = { flag: "Pass 1: the tells are flagged.", cut: "Pass 2: the slop is cut.", build: "Pass 3: the rebuilt site." };
  const scrubQuery = window.matchMedia("(min-width: 960px) and (min-height: 640px)");
  const PASS_END = { flag: 0.37, cut: 0.58, build: 1 };
  let scrubbing = false;
  let currentPass = "flag";

  const setPressed = (pass) => {
    if (pass === currentPass) return;
    currentPass = pass;
    passButtons.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.pass === pass)));
  };

  const setScrub = () => {
    scrubbing = scrubQuery.matches && !reduceMotion.matches;
    root.classList.toggle("is-scrub", scrubbing);
    if (!scrubbing) {
      stage.removeAttribute("style");
      stage.dataset.state = currentPass;
    }
    updateHero();
  };

  function updateHero() {
    if (!scrubbing) return;
    const rect = track.getBoundingClientRect();
    const total = rect.height - window.innerHeight;
    const p = clamp(-rect.top / total);
    const vars = { "--p": p };
    for (let i = 0; i < 5; i++) vars[`--d${i + 1}`] = clamp((p - (0.04 + i * 0.055)) / 0.1);
    vars["--cut"] = clamp((p - 0.4) / 0.16);
    vars["--build"] = clamp((p - 0.6) / 0.24);
    vars["--stamp"] = clamp((p - 0.88) / 0.07);
    for (const [k, v] of Object.entries(vars)) stage.style.setProperty(k, v.toFixed(4));
    setPressed(p < 0.39 ? "flag" : p < 0.6 ? "cut" : "build");
  }

  passButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const pass = btn.dataset.pass;
      if (scrubbing) {
        const rect = track.getBoundingClientRect();
        const top = window.scrollY + rect.top + PASS_END[pass] * (rect.height - window.innerHeight);
        window.scrollTo({ top, behavior: "smooth" });
      } else {
        stage.dataset.state = pass;
        setPressed(pass);
      }
      passLive.textContent = passNames[pass];
    });
  });
  scrubQuery.addEventListener("change", setScrub);
  reduceMotion.addEventListener("change", setScrub);

  /* ---------- specimens: flip each tell to its fix ---------- */
  const specs = [...document.querySelectorAll("[data-spec]")];
  const fixAll = document.querySelector("[data-fix-all]");

  const setSpec = (spec, fixed) => {
    spec.classList.toggle("is-fixed", fixed);
    spec.querySelector(".spec-toggle").setAttribute("aria-pressed", String(fixed));
    const slop = spec.querySelector(".spec-slop");
    const fix = spec.querySelector(".spec-fix");
    slop.inert = fixed; slop.setAttribute("aria-hidden", String(fixed));
    fix.inert = !fixed; fix.setAttribute("aria-hidden", String(!fixed));
  };
  const syncFixAll = () => {
    const all = specs.every((s) => s.classList.contains("is-fixed"));
    fixAll.setAttribute("aria-pressed", String(all));
    fixAll.textContent = all ? "Bring the slop back" : "Fix all six";
  };
  specs.forEach((spec) => {
    setSpec(spec, false);
    spec.querySelector(".spec-toggle").addEventListener("click", () => {
      setSpec(spec, !spec.classList.contains("is-fixed"));
      syncFixAll();
    });
  });
  fixAll.addEventListener("click", () => {
    const fixing = fixAll.getAttribute("aria-pressed") !== "true";
    specs.forEach((spec, i) => {
      if (reduceMotion.matches) setSpec(spec, fixing);
      else setTimeout(() => setSpec(spec, fixing), i * 90);
    });
    fixAll.setAttribute("aria-pressed", String(fixing));
    fixAll.textContent = fixing ? "Bring the slop back" : "Fix all six";
  });

  /* ---------- before/after sliders ---------- */
  const compares = [...document.querySelectorAll(".compare")];
  compares.forEach((fig) => {
    const range = fig.querySelector(".compare-range");
    const set = (v) => {
      fig.style.setProperty("--pos", `${v}%`);
      range.setAttribute("aria-valuetext", `${Math.round(v)}% new site, ${Math.round(100 - v)}% old site`);
    };
    range.addEventListener("input", () => set(range.value));
    set(range.value);
    fig._set = set;
  });

  // Paper-swap theme: each slider sweeps once from all-before to the middle when it arrives
  const sweep = (fig) => {
    const range = fig.querySelector(".compare-range");
    if (range.dataset.touched) return;
    const from = 4, to = 58, dur = 1300, t0 = performance.now();
    const ease = (t) => 1 - Math.pow(1 - t, 3);
    const step = (now) => {
      if (range.dataset.touched) return;
      const t = clamp((now - t0) / dur);
      const v = from + (to - from) * ease(t);
      range.value = v; fig._set(v);
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  compares.forEach((fig) => {
    const range = fig.querySelector(".compare-range");
    ["pointerdown", "keydown"].forEach((ev) => range.addEventListener(ev, () => { range.dataset.touched = "1"; }));
  });

  /* ---------- reveals ---------- */
  const revealables = document.querySelectorAll(".reveal, .wordmark");
  if ("IntersectionObserver" in window && !reduceMotion.matches) {
    compares.forEach((fig) => { fig.querySelector(".compare-range").value = 4; fig._set(4); });
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-in");
        const fig = entry.target.querySelector(".compare");
        if (fig) setTimeout(() => sweep(fig), 350);
        io.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -12% 0px", threshold: 0.12 });
    revealables.forEach((el) => io.observe(el));
  } else {
    revealables.forEach((el) => el.classList.add("is-in"));
  }

  /* ---------- process line draws with scroll ---------- */
  const steps = document.querySelector("[data-steps]");
  const stepItems = [...steps.querySelectorAll(".step")];
  const updateSteps = () => {
    const rect = steps.getBoundingClientRect();
    const mark = window.innerHeight * 0.62;
    const draw = reduceMotion.matches ? 1 : clamp((mark - rect.top) / rect.height);
    steps.style.setProperty("--draw", draw.toFixed(4));
    stepItems.forEach((li) => li.classList.toggle("is-on", reduceMotion.matches || li.getBoundingClientRect().top + 10 < mark));
  };

  /* ---------- forms ---------- */
  const urlPattern = /^(https?:\/\/)?([\w-]+\.)+[a-z]{2,}(:\d+)?(\/\S*)?$/i;
  const ctaForm = document.querySelector(".cta-form");
  const ctaUrl = document.getElementById("cta-url");
  const ctaEmail = document.getElementById("cta-email");
  const workingDaysFromNow = (n) => {
    const d = new Date();
    while (n > 0) { d.setDate(d.getDate() + 1); if (d.getDay() % 6 !== 0) n--; }
    return d.toLocaleDateString("en-GB", { weekday: "long" });
  };
  const okIcon = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>';

  const showMsg = (form, text, kind) => {
    const msg = form.querySelector(".form-msg");
    msg.classList.toggle("is-error", kind === "error");
    msg.classList.toggle("is-ok", kind === "ok");
    msg.innerHTML = kind === "ok" ? `${okIcon}<span>${text}</span>` : text;
  };
  const markField = (input, bad) => input.setAttribute("aria-invalid", String(bad));

  document.querySelectorAll("[data-form]").forEach((form) => {
    const url = form.querySelector('input[name="url"]');
    const email = form.querySelector('input[name="email"]');
    const btn = form.querySelector('button[type="submit"]');
    const defaultMsg = form.querySelector(".form-msg").textContent;

    [url, email].filter(Boolean).forEach((input) => input.addEventListener("input", () => {
      if (input.getAttribute("aria-invalid") === "true") { markField(input, false); showMsg(form, defaultMsg); }
    }));

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const value = url.value.trim();
      if (!urlPattern.test(value)) {
        markField(url, true);
        showMsg(form, value ? "That doesn't look like a web address. Try something like yourshop.co.uk." : "Add your site's address first.", "error");
        url.focus();
        return;
      }
      markField(url, false);

      // Hero form: carry the URL down to the full form, which asks where to send the video
      if (!email) {
        ctaUrl.value = value;
        document.getElementById("teardown").scrollIntoView({ behavior: reduceMotion.matches ? "auto" : "smooth" });
        showMsg(ctaForm, "Got your address. Last step: where should we send the video?");
        setTimeout(() => ctaEmail.focus({ preventScroll: true }), reduceMotion.matches ? 0 : 700);
        return;
      }

      if (!email.value.trim() || !email.checkValidity()) {
        markField(email, true);
        showMsg(form, "We need an email address to send the video to.", "error");
        email.focus();
        return;
      }
      markField(email, false);

      btn.disabled = true;
      btn.classList.add("is-loading");
      btn.querySelector(".btn-label").textContent = "Sending";
      // Demo only: no backend. Swap this timeout for a real request.
      setTimeout(() => {
        form.classList.add("is-done");
        showMsg(form, `Got it. Expect the video by ${workingDaysFromNow(2)}. It'll come from Ana or Joe, not a robot.`, "ok");
      }, 1100);
    });
  });

  /* ---------- one scroll loop ---------- */
  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      updateNav();
      updateHero();
      updateSteps();
      ticking = false;
    });
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  setScrub();
  updateSteps();
  updateNav();
})();
