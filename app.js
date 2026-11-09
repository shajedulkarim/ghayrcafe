(function () {
  "use strict";

  var AR = document.documentElement.lang === "ar";

  /* ---- verified café data (Google Business panel, Instagram bio, Linktree; checked 9 Nov 2026) ---- */
  var CAFE = {
    tz: "Asia/Muscat",
    open: 9 * 60,          // 9:00 AM
    close: 24 * 60,        // 12:00 AM (midnight)
    // Same hours listed Mon–Sun on Google. Index 0 = Sunday.
    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    daysAr: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
    whatsapp: "",          // NOT confirmed by the café. Put digits only (e.g. "96898147554") to enable the WhatsApp button.
    branches: [
      ["Saham", "صحم", "https://maps.app.goo.gl/NWynYFatWp2FadGg8"],
      ["Sohar", "صحار", "https://maps.app.goo.gl/CDMHqg4DN1cW2CZX8"],
      ["Shinas", "شناص", "https://maps.app.goo.gl/m6VqTrJWxPM3qLfbA"],
      ["Buraimi", "البريمي", "https://maps.app.goo.gl/yqzXdZikX88idNJA7"],
      ["Mabeela", "المعبيلة", "https://maps.app.goo.gl/dmJDh6G1VjwV32Dq5"],
      ["Bowsher", "بوشر", "https://maps.app.goo.gl/UWjb2GVBW5dYP4Wf9"],
      ["Quram", "القرم", "https://maps.app.goo.gl/1EcZRAR65WJHLYNo8"],
      ["Snaw", "سناو", "https://maps.app.goo.gl/65a87UE7ZbVPJWFP6"]
    ],
    featured: [["hot", "Ghair Latte"], ["cold", "Ghair Frappe"], ["dessert", "Ghair Cookies"], ["dessert", "Tiramisu"]]
  };

  var T = AR ? {
    open: function (t) { return "مفتوح الآن · حتى " + t; },
    soon: function (m) { return "مفتوح · يغلق خلال " + m + " دقيقة"; },
    closed: function (t) { return "مغلق · يفتح " + t; },
    am: "ص", pm: "م", house: "مميز"
  } : {
    open: function (t) { return "Open now · until " + t; },
    soon: function (m) { return "Open · closes in " + m + " min"; },
    closed: function (t) { return "Closed · opens " + t; },
    am: "AM", pm: "PM", house: "House"
  };

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };
  var price = function (p) { return '<span class="price"><span class="cur">OMR</span>' + p.toFixed(3) + "</span>"; };
  var nm = function (i) { return AR && i.ar ? i.ar : i.name; };
  var cl = function (c) { return AR ? c.ar : c.label; };

  /* ---- signature ---- */
  var cats = {};
  MENU.forEach(function (c) { cats[c.id] = c; });
  $("#sig").innerHTML = CAFE.featured.map(function (f) {
    var c = cats[f[0]], it = c.items.filter(function (x) { return x.name === f[1]; })[0];
    if (!it) return "";
    return '<li class="reveal">' + (it.img ? '<img src="' + it.img + '" alt="' + esc(nm(it)) + '" width="198" height="272" loading="lazy">' : "") +
      '<div class="sig__t"><small>' + esc(cl(c)) + "</small><strong>" + esc(nm(it)) + "</strong>" + price(it.price) + "</div></li>";
  }).join("");

  /* ---- menu tabs + panels ---- */
  var tabs = $("#tabs"), panels = $("#panels");
  MENU.forEach(function (c, idx) {
    var b = document.createElement("button");
    b.className = "tab"; b.type = "button"; b.id = "tab-" + c.id;
    b.setAttribute("role", "tab"); b.setAttribute("aria-controls", "panel-" + c.id);
    b.setAttribute("aria-selected", idx === 0 ? "true" : "false");
    b.textContent = cl(c);
    b.addEventListener("click", function () { select(c.id); });
    tabs.appendChild(b);

    var p = document.createElement("div");
    p.className = "panel"; p.id = "panel-" + c.id; p.setAttribute("role", "tabpanel");
    p.setAttribute("aria-labelledby", b.id); p.hidden = idx !== 0;
    var side = AR ? "" : c.ar, sideAttrs = AR ? "" : ' lang="ar" dir="rtl"';
    p.innerHTML = '<div class="panel__head"><h3>' + esc(cl(c)) + '</h3><span class="panel__ar"' + sideAttrs + ">" + esc(side) + "</span></div><ul class=\"items" + (c.items.some(function (i) { return i.img; }) ? " has-thumbs" : "") + "\">" +
      c.items.map(function (i) {
        return "<li>" + (i.img ? '<img class="thumb" src="' + i.img + '" alt="' + esc(nm(i)) + '" width="52" height="72" loading="lazy">' : "") + "<span class=\"n\">" + esc(nm(i)) + (i.house ? " <small>" + T.house + "</small>" : "") + '</span><span class="dots"></span>' + price(i.price) + "</li>";
      }).join("") + "</ul>";
    panels.appendChild(p);
  });

  function centerTab(btn) {
    var box = tabs;
    if (box.scrollWidth <= box.clientWidth) return;
    var r = btn.getBoundingClientRect(), br = box.getBoundingClientRect();
    var left = box.scrollLeft + (r.left - br.left) - (box.clientWidth - btn.offsetWidth) / 2;
    box.scrollTo({ left: left, behavior: matchMedia("(prefers-reduced-motion:reduce)").matches ? "auto" : "smooth" });
  }
  function select(id) {
    $$(".tab").forEach(function (t) { t.setAttribute("aria-selected", t.id === "tab-" + id ? "true" : "false"); });
    $$(".panel").forEach(function (p) { p.hidden = p.id !== "panel-" + id; });
    centerTab($("#tab-" + id));
  }
  tabs.addEventListener("keydown", function (e) {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    var dir = (e.key === "ArrowRight" ? 1 : -1) * (AR ? -1 : 1);
    var list = $$(".tab"), i = list.findIndex(function (t) { return t.getAttribute("aria-selected") === "true"; });
    i = (i + dir + list.length) % list.length;
    list[i].focus(); select(MENU[i].id);
  });

  /* ---- hours + live status (Muscat time) ---- */
  function fmt(mins) {
    var h = Math.floor(mins / 60) % 24, m = mins % 60, ap = h >= 12 ? T.pm : T.am;
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
      txt = left <= 60 ? T.soon(left) : T.open(fmt(CAFE.close));
    } else {
      cls = "is-closed";
      txt = T.closed(fmt(CAFE.open));
    }
    $$("[data-status]").forEach(function (el) {
      el.classList.remove("is-open", "is-closed"); el.classList.add(cls);
      $("[data-status-text]", el).textContent = txt;
    });
    $$("#hours li").forEach(function (li, i) { li.classList.toggle("today", i === n.day); });
  }
  $("#hours").innerHTML = CAFE.days.map(function (d, i) {
    return "<li><span>" + (AR ? CAFE.daysAr[i] : d) + "</span><span><bdi dir=\"" + (AR ? "rtl" : "ltr") + "\">" + fmt(CAFE.open) + "</bdi> – <bdi dir=\"" + (AR ? "rtl" : "ltr") + "\">" + fmt(CAFE.close) + "</bdi></span></li>";
  }).join("");
  renderStatus(); setInterval(renderStatus, 60000);

  /* ---- branches ---- */
  $("#branches").innerHTML = CAFE.branches.map(function (b) {
    return '<li><a href="' + b[2] + '" target="_blank" rel="noopener">' + (AR ? b[1] : b[0]) + "</a></li>";
  }).join("");

  /* ---- WhatsApp (only when a number is confirmed) ---- */
  if (CAFE.whatsapp) {
    var wa = "https://wa.me/" + CAFE.whatsapp;
    var row = $("#wa-row"); row.hidden = false; row.href = wa; row.target = "_blank"; row.rel = "noopener";
    $("b", row).textContent = "+" + CAFE.whatsapp;
    var mid = $("#dock-mid"); mid.href = wa;
    mid.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.2 14.2c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.2-.7-2.7-1.1-4.4-3.8-4.5-4-.1-.2-1.1-1.4-1.1-2.7s.7-1.9.9-2.2c.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.4.6c-.1.1-.3.3-.1.6.7 1.2 1.7 2.1 3 2.7.3.1.4.1.6-.1l.8-1c.2-.2.4-.2.6-.1l1.9.9c.2.1.4.2.4.3.1.2.1.8-.1 1.3z"/></svg><span>' + (AR ? "واتساب" : "WhatsApp") + "</span>";
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
