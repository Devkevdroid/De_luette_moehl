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
  // Ensure DOM is ready even if script is in <head> without defer
  const run = () => {
    const revealEls = document.querySelectorAll(".reveal");
    if (!revealEls.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    revealEls.forEach((el) => io.observe(el));

    // Stagger (Gallery slower)
    document.querySelectorAll("[data-stagger]").forEach((wrap) => {
      const items = wrap.querySelectorAll(".reveal");
      const isGallery =
        wrap.classList.contains("gallery-grid") || wrap.closest(".gallery") !== null;

      items.forEach((el, i) => {
        const delay = isGallery ? i * 120 : i * 70;
        el.style.transitionDelay = `${delay}ms`;
      });
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run, { once: true });
  } else {
    run();
  }
})();