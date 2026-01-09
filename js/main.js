/* =========================
   Config
   ========================= */
const MAP_LAT = 54.286288782138506;
const MAP_LNG = 9.225988698779732;
const MAP_ZOOM = 13;

/* =========================
   Google Maps (Callback)
   ========================= */
window.initMap = function () {
  const el = document.getElementById("map");
  if (!el || !window.google?.maps) return;

  const location = { lat: MAP_LAT, lng: MAP_LNG };

  const map = new google.maps.Map(el, {
    center: location,
    zoom: MAP_ZOOM,
    disableDefaultUI: true,
    zoomControl: true,
    fullscreenControl: true,
    streetViewControl: false,
    mapTypeControl: false,
    gestureHandling: "cooperative",
    clickableIcons: false,
    styles: [
      { featureType: "poi", stylers: [{ visibility: "off" }] },
      { featureType: "transit", stylers: [{ visibility: "off" }] },
    ],
  });

  new google.maps.Marker({ position: location, map });

  const link = document.getElementById("mapLink");
  if (link) link.href = `https://www.google.com/maps?q=${MAP_LAT},${MAP_LNG}`;
};

/* =========================
   Scroll Reveals + Stagger
   ========================= */
(() => {
  const run = () => {
    const revealEls = Array.from(document.querySelectorAll(".reveal"));
    if (!revealEls.length) return;

    // Optional: Transition-Delays via data-stagger wrappers
    document.querySelectorAll("[data-stagger]").forEach((wrap) => {
      const items = wrap.querySelectorAll(".reveal");
      const isGallery =
        wrap.classList.contains("gallery-grid") || wrap.closest(".gallery") !== null;

      items.forEach((el, i) => {
        const delay = isGallery ? i * 120 : i * 70;
        el.style.transitionDelay = `${delay}ms`;
      });
    });

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    revealEls.forEach((el) => io.observe(el));
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run, { once: true });
  } else {
    run();
  }
})();

/* =========================
   Lightbox (no zoom-from-thumb)
   ========================= */
(() => {
  const GALLERY_SELECTOR = ".gallery"; // falls nötig anpassen
  const IMG_SELECTOR = `${GALLERY_SELECTOR} img`;

  const imgs = Array.from(document.querySelectorAll(IMG_SELECTOR));
  if (!imgs.length) return;

  // Build lightbox once
  const lb = document.createElement("div");
  lb.className = "lightbox";
  lb.setAttribute("role", "dialog");
  lb.setAttribute("aria-modal", "true");
  lb.setAttribute("aria-label", "Bildansicht");

  lb.innerHTML = `
    <div class="lightbox__backdrop" data-lb-close></div>
    <div class="lightbox__panel" role="document">
      <img class="lightbox__img" alt="">
      <div class="lightbox__meta">
        <div class="lightbox__caption"></div>
        <div class="lightbox__controls">
          <button class="lightbox__btn" type="button" data-lb-prev aria-label="Vorheriges Bild">←</button>
          <button class="lightbox__btn" type="button" data-lb-next aria-label="Nächstes Bild">→</button>
          <button class="lightbox__btn" type="button" data-lb-close aria-label="Schließen">ESC</button>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(lb);

  const imgEl = lb.querySelector(".lightbox__img");
  const captionEl = lb.querySelector(".lightbox__caption");
  const btnPrev = lb.querySelector("[data-lb-prev]");
  const btnNext = lb.querySelector("[data-lb-next]");

  let index = 0;
  let lastFocus = null;

  const lockScroll = () => {
    document.documentElement.classList.add("lb-lock");
    document.body.classList.add("lb-lock");
  };

  const unlockScroll = () => {
    document.documentElement.classList.remove("lb-lock");
    document.body.classList.remove("lb-lock");
  };

  const setBtnState = () => {
    btnPrev.disabled = index <= 0;
    btnNext.disabled = index >= imgs.length - 1;
    btnPrev.style.opacity = btnPrev.disabled ? "0.4" : "1";
    btnNext.style.opacity = btnNext.disabled ? "0.4" : "1";
  };

  const show = (i) => {
    index = Math.max(0, Math.min(imgs.length - 1, i));
    const target = imgs[index];

    const src = target.currentSrc || target.src;
    imgEl.src = src;
    imgEl.alt = target.alt || "Bild";
    captionEl.textContent = target.alt || "";

    setBtnState();
  };

  const open = (i, focusEl) => {
    lastFocus = focusEl || document.activeElement;

    lb.classList.add("is-open");
    lockScroll();

    show(i);

    const closeBtn = lb.querySelector("[data-lb-close]");
    closeBtn.focus({ preventScroll: true });
  };

  const close = () => {
    if (!lb.classList.contains("is-open")) return;

    lb.classList.remove("is-open");
    unlockScroll();

    if (lastFocus && typeof lastFocus.focus === "function") {
      lastFocus.focus({ preventScroll: true });
    }
    lastFocus = null;
  };

  const next = () => {
    if (index >= imgs.length - 1) return;
    show(index + 1);
  };

  const prev = () => {
    if (index <= 0) return;
    show(index - 1);
  };

  // Click handling (delegation)
  document.addEventListener("click", (e) => {
    const t = e.target;

    // Open on image click
    const clickedImg = t.closest ? t.closest(IMG_SELECTOR) : null;
    if (clickedImg) {
      e.preventDefault();
      open(imgs.indexOf(clickedImg), clickedImg);
      return;
    }

    if (!lb.classList.contains("is-open")) return;

    // Close
    if (t.closest && t.closest("[data-lb-close]")) {
      e.preventDefault();
      close();
      return;
    }

    // Next/Prev
    if (t.closest && t.closest("[data-lb-next]")) {
      e.preventDefault();
      next();
      return;
    }
    if (t.closest && t.closest("[data-lb-prev]")) {
      e.preventDefault();
      prev();
      return;
    }
  });

  // Keyboard
  document.addEventListener("keydown", (e) => {
    if (!lb.classList.contains("is-open")) return;

    if (e.key === "Escape") {
      e.preventDefault();
      close();
    }
    if (e.key === "ArrowRight") {
      e.preventDefault();
      next();
    }
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      prev();
    }
  });

  // Swipe (basic)
  let sx = 0,
    sy = 0,
    isDown = false;

  lb.addEventListener("pointerdown", (e) => {
    if (!lb.classList.contains("is-open")) return;
    isDown = true;
    sx = e.clientX;
    sy = e.clientY;
  });

  lb.addEventListener("pointerup", (e) => {
    if (!lb.classList.contains("is-open") || !isDown) return;
    isDown = false;

    const dx = e.clientX - sx;
    const dy = e.clientY - sy;

    if (Math.abs(dy) > 90) return;
    if (dx > 70) prev();
    if (dx < -70) next();
  });
})();