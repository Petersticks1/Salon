/**
 * Beauty Salon – client-side search.
 * Index of main pages and keywords; runs on search.html to show results.
 */
(function () {
  "use strict";

  var SEARCH_INDEX = [
    {
      title: "Home",
      url: "index.html",
      description:
        "Beauty Salon – natural hair, braids, twists, color, styling. Book your appointment.",
      keywords:
        "home braids twists color natural hair styling services stylists book appointment about testimonials our works",
    },
    {
      title: "Services",
      url: "services.html",
      description:
        "Braiding & Twists, Color & Highlights, Natural Hair Care, Cuts & Trims, Blowouts & Styling, Treatments.",
      keywords:
        "services braiding twists box braids cornrows knotless color highlights balayage natural hair wash blowout trim treatments deep conditioning",
    },
    {
      title: "Book Appointment",
      url: "booking.html",
      description:
        "Book your appointment online. Choose service, date and time.",
      keywords: "book appointment booking schedule date time service",
    },
    {
      title: "Portfolio",
      url: "portfolio.html",
      description:
        "Our work – braids, color, natural hair, twists, blowout, cornrows, updo, balayage, treatments.",
      keywords:
        "portfolio gallery braids color natural hair twists blowout cornrows updo balayage treatments our work",
    },
    {
      title: "Contact",
      url: "contact.html",
      description:
        "Get in touch – phone, email, address. Abeokuta, Ogun State.",
      keywords:
        "contact phone email address Abeokuta Ogun Ake street hello@beautysalon",
    },
  ];

  function getQueryParam(name) {
    var params = new URLSearchParams(window.location.search);
    return (params.get(name) || "").trim();
  }

  function escapeHtml(text) {
    var div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }

  function runSearch() {
    var container = document.getElementById("search-results");
    var queryEl = document.getElementById("search-query-display");
    var query = getQueryParam("q");
    var queryDecoded = decodeURIComponent(query);

    if (!container) return;

    if (queryEl) queryEl.textContent = queryDecoded || "(no search term)";

    if (!query) {
      container.innerHTML =
        '<p class="text-muted">Enter a keyword above and search to see results.</p>';
      return;
    }

    var terms = queryDecoded.toLowerCase().split(/\s+/).filter(Boolean);
    var results = [];

    SEARCH_INDEX.forEach(function (page) {
      var searchText = (
        page.title +
        " " +
        page.description +
        " " +
        page.keywords
      ).toLowerCase();
      var matchCount = 0;
      terms.forEach(function (term) {
        if (searchText.indexOf(term) !== -1) matchCount++;
      });
      if (matchCount > 0) {
        results.push({ page: page, score: matchCount });
      }
    });

    results.sort(function (a, b) {
      return b.score - a.score;
    });

    if (results.length === 0) {
      container.innerHTML =
        '<p class="text-muted">No results found for "' +
        escapeHtml(queryDecoded) +
        '". Try different keywords (e.g. braids, booking, contact).</p>';
      return;
    }

    var html = '<ul class="list-unstyled mb-0">';
    results.forEach(function (r) {
      var p = r.page;
      html +=
        '<li class="mb-4"><a href="' +
        escapeHtml(p.url) +
        '" class="text-primary fw-bold">' +
        escapeHtml(p.title) +
        "</a>";
      html +=
        '<p class="small text-muted mb-0 mt-1">' +
        escapeHtml(p.description) +
        "</p></li>";
    });
    html += "</ul>";
    container.innerHTML = html;
  }

  function fillSearchInputs() {
    var query = getQueryParam("q");
    var decoded = query ? decodeURIComponent(query) : "";
    document
      .querySelectorAll(
        "input[name=q], input#search-main, input#search-keyword",
      )
      .forEach(function (el) {
        if (el && decoded) el.value = decoded;
      });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      runSearch();
      fillSearchInputs();
    });
  } else {
    runSearch();
    fillSearchInputs();
  }
})();
