// Mobile navigation toggle
document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");

  if (toggle && links) {
    toggle.addEventListener("click", function () {
      links.classList.toggle("open");
    });
  }

  // Set the current year in the footer
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  setUpCounters();
});

// Counter boxes: "200+" counts up from 0 to 200 the first time it scrolls
// into view. The real value is already in the HTML, so without JavaScript
// (or with reduced motion turned on) visitors just see the final number.
function setUpCounters() {
  var counters = document.querySelectorAll("[data-count]");
  var reduceMotion =
    window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!counters.length || reduceMotion || !("IntersectionObserver" in window)) return;

  var DURATION = 1600;

  function animate(el) {
    var match = el.textContent.trim().match(/^(\D*)([\d,]+(?:\.\d+)?)(.*)$/);
    if (!match) return;
    var prefix = match[1];
    var target = parseFloat(match[2].replace(/,/g, ""));
    var suffix = match[3];
    var start = null;

    function frame(now) {
      if (start === null) start = now;
      var t = Math.min((now - start) / DURATION, 1);
      var eased = 1 - Math.pow(1 - t, 3);
      el.textContent = prefix + Math.round(target * eased).toLocaleString() + suffix;
      if (t < 1) requestAnimationFrame(frame);
    }

    el.textContent = prefix + "0" + suffix;
    requestAnimationFrame(frame);

    // Safety net: never leave a counter stuck below its real value
    setTimeout(function () {
      el.textContent = match[0];
    }, DURATION + 500);
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
          animate(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );

  counters.forEach(function (el) {
    observer.observe(el);
  });
}
