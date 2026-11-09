(function () {
  "use strict";

  /* ---- verified café data (Google Business panel, Instagram bio, Linktree; checked 9 Nov 2026) ---- */
  var CAFE = {
    tz: "Asia/Muscat",
    open: 9 * 60,          // 9:00 AM
    close: 24 * 60,        // 12:00 AM (midnight)
    // Same hours listed Mon–Sun on Google. Index 0 = Sunday.
    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    whatsapp: "",          // NOT confirmed by the café. Put digits only (e.g. "96898147554") to enable the WhatsApp button.
    branches: [
      ["Saham", "https://maps.app.goo.gl/NWynYFatWp2FadGg8"],
      ["Sohar", "https://maps.app.goo.gl/CDMHqg4DN1cW2CZX8"],
      ["Shinas", "https://maps.app.goo.gl/m6VqTrJWxPM3qLfbA"],
      ["Buraimi", "https://maps.app.goo.gl/yqzXdZikX88idNJA7"],
      ["Mabeela", "https://maps.app.goo.gl/dmJDh6G1VjwV32Dq5"],
      ["Bowsher", "https://maps.app.goo.gl/UWjb2GVBW5dYP4Wf9"],
      ["Quram", "https://maps.app.goo.gl/1EcZRAR65WJHLYNo8"],
      ["Snaw", "https://maps.app.goo.gl/65a87UE7ZbVPJWFP6"]
    ],
    featured: ["Ghair Latte", "Ghair Frappe", "Ghair Ice Shaken", "Ghair Cookies"]
  };

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };
  var price = function (p) { return '<span class="price"><span class="cur">OMR</span>' + p.toFixed(3) + "</span>"; };

  /* ---- signature ---- */
  var seen = {};
  var all = [];
  MENU.forEach(function (c) { c.items.forEach(function (i) { all.push({ cat: c.label, item: i }); }); });
  $("#sig").innerHTML = CAFE.featured.map(function (n) {
    var f = all.filter(function (x) { return x.item.name === n; })[0];
    if (!f) return "";
    return '<li class="reveal"><small>' + esc(f.cat) + '</small><strong>' + esc(f.item.name) + "</strong>" + price(f.item.price) + "</li>";
  }).join("");

  /* ---- menu tabs + panels ---- */
  var tabs = $("#tabs"), panels = $("#panels");
  MENU.forEach(function (c, idx) {
    var b = document.createElement("button");
    b.className = "tab"; b.type = "button"; b.id = "tab-" + c.id;
    b.setAttribute("role", "tab"); b.setAttribute("aria-controls", "panel-" + c.id);
    b.setAttribute("aria-selected", idx === 0 ? "true" : "false");
    b.textContent = c.label;
    b.addEventListener("click", function () { select(c.id, true); });
    tabs.appendChild(b);

    var p = document.createElement("div");
    p.className = "panel"; p.id = "panel-" + c.id; p.setAttribute("role", "tabpanel");
    p.setAttribute("aria-labelledby", b.id); p.hidden = idx !== 0;
    p.innerHTML = '<div class="panel__head"><h3>' + esc(c.label) + '</h3><span class="panel__ar" lang="ar" dir="rtl">' + esc(c.ar) + "</span></div><ul class=\"items\">" +
      c.items.map(function (i) {
        return "<li><span class=\"n\">" + esc(i.name) + (i.house ? " <small>House</small>" : "") + '</span><span class="dots"></span>' + price(i.price) + "</li>";
      }).join("") + "</ul>";
    panels.appendChild(p);
  });

  function centerTab(btn) {
    var box = tabs;
    if (box.scrollWidth <= box.clientWidth) return;
    var left = btn.offsetLeft - (box.clientWidth - btn.offsetWidth) / 2;
    box.scrollTo({ left: left, behavior: matchMedia("(prefers-reduced-motion:reduce)").matches ? "auto" : "smooth" });
  }
  function select(id, userClick) {
    $$(".tab").forEach(function (t) { t.setAttribute("aria-selected", t.id === "tab-" + id ? "true" : "false"); });
    $$(".panel").forEach(function (p) { p.hidden = p.id !== "panel-" + id; });
    centerTab($("#tab-" + id));
  }
  tabs.addEventListener("keydown", function (e) {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    var list = $$(".tab"), i = list.findIndex(function (t) { return t.getAttribute("aria-selected") === "true"; });
    i = (i + (e.key === "ArrowRight" ? 1 : -1) + list.length) % list.length;
    list[i].focus(); select(MENU[i].id);
  });

  /* ---- hours + live status (Muscat time) ---- */
  function fmt(mins) {
    var h = Math.floor(mins / 60) % 24, m = mins % 60, ap = h >= 12 ? "PM" : "AM";
    return ((h + 11) % 12 + 1) + ":" + String(m).padStart(2, "0") + " " + ap;
  }
  function muscatNow() {
    var parts = new Intl.DateTimeFormat("en-GB", { timeZone: CAFE.tz, weekday: "long", hour: "2-digit", minute: "2-digit", hourCycle: "h23" }).formatToParts(new Date());
    var o = {}; parts.forEach(function (p) { o[p.type] = p.value; });
    return { day: CAFE.days.indexOf(o.weekday), mins: parseInt(o.hour, 10) * 60 + parseInt(o.minute, 10) };
  }
  function renderStatus() {
    var n = muscatNow(), txt, cls;
    if (n.mins >= CAFE.open && n.mins < CAFE.close) {
      var left = CAFE.close - n.mins;
      cls = "is-open";
      txt = left <= 60 ? "Open · closes in " + left + " min" : "Open now · until " + fmt(CAFE.close);
    } else {
      cls = "is-closed";
      txt = "Closed · opens " + fmt(CAFE.open);
    }
    $$("[data-status]").forEach(function (el) {
      el.classList.remove("is-open", "is-closed"); el.classList.add(cls);
      $("[data-status-text]", el).textContent = txt;
    });
    $$("#hours li").forEach(function (li, i) { li.classList.toggle("today", i === n.day); });
  }
  $("#hours").innerHTML = CAFE.days.map(function (d) {
    return "<li><span>" + d + "</span><span>" + fmt(CAFE.open) + " – " + fmt(CAFE.close) + "</span></li>";
  }).join("");
  renderStatus(); setInterval(renderStatus, 60000);

  /* ---- branches ---- */
  $("#branches").innerHTML = CAFE.branches.map(function (b) {
    return '<li><a href="' + b[1] + '" target="_blank" rel="noopener">' + b[0] + "</a></li>";
  }).join("");

  /* ---- WhatsApp (only when a number is confirmed) ---- */
  if (CAFE.whatsapp) {
    var wa = "https://wa.me/" + CAFE.whatsapp;
    var row = $("#wa-row"); row.hidden = false; row.href = wa; row.target = "_blank"; row.rel = "noopener";
    $("b", row).textContent = "+" + CAFE.whatsapp;
    var mid = $("#dock-mid"); mid.href = wa;
    mid.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.600 15.100L2 22l5-1.300A10 10 0 1 0 12 2zm5.200 14.200c-.2.600-1.300 1.200-1.800 1.200-.5.100-1 .2-3.200-.7-2.700-1.100-4.400-3.800-4.500-4-.1-.2-1.100-1.400-1.100-2.700s.7-1.900.9-2.200c.2-.2.500-.3.700-.3h.5c.2 0 .4 0 .6.500l.8 2c.1.200.1.400 0 .5l-.4.600c-.1.100-.3.300-.1.600.7 1.200 1.700 2.100 3 2.700.3.100.4.100.6-.1l.8-1c.2-.2.400-.2.600-.1l1.900.9c.2.100.4.200.4.300.1.200.1.800-.1 1.300z"/></svg><span>WhatsApp</span>';
  }

  /* ---- scroll reveal ---- */
  var rev = $$(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    rev.forEach(function (el, i) { el.style.transitionDelay = (i % 4) * 70 + "ms"; io.observe(el); });
  } else rev.forEach(function (el) { el.classList.add("in"); });
})();
