const MAP_LAT = 54.286288782138506;
const MAP_LNG = 9.225988698779732;
const MAP_ZOOM = 13;

window.initMap = function () {
  const el = document.getElementById("map");
  if (!el) return;

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
      { featureType: "transit", stylers: [{ visibility: "off" }] }
    ]
  });

  new google.maps.Marker({ position: location, map });

  const link = document.getElementById("mapLink");
  if (link) link.href = `https://www.google.com/maps?q=${MAP_LAT},${MAP_LNG}`;
};