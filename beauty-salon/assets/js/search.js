(function () {
  "use strict";

  function getQueryParam(name) {
    var params = new URLSearchParams(window.location.search);
    return params.get(name) || "";
  }

  function setQueryParam(name, value) {
    var url = new URL(window.location.href);
    if (value) {
      url.searchParams.set(name, value);
    } else {
      url.searchParams.delete(name);
    }
    window.history.replaceState({}, "", url.toString());
  }

  function normalizeText(s) {
    return (s || "").toLowerCase().replace(/\s+/g, " ").trim();
  }

  function searchIndex(query) {
    if (typeof GENTS_SEARCH_INDEX === "undefined") return [];
    var q = normalizeText(query);
    if (!q) return [];
    var terms = q.split(/\s+/).filter(Boolean);
    var results = [];
    for (var i = 0; i < GENTS_SEARCH_INDEX.length; i++) {
      var entry = GENTS_SEARCH_INDEX[i];
      var titleNorm = normalizeText(entry.title);
      var textNorm = normalizeText(entry.text);
      var allMatch = terms.every(function (term) {
        return titleNorm.indexOf(term) !== -1 || textNorm.indexOf(term) !== -1;
      });
      if (allMatch) {
        var snippet = entry.text.slice(0, 140);
        if (entry.text.length > 140) snippet += "...";
        results.push({ url: entry.url, title: entry.title, snippet: snippet });
      }
    }
    return results;
  }

  function renderResults(results, query) {
    var container = document.getElementById("search-results");
    var emptyEl = document.getElementById("search-results-empty");
    var listEl = document.getElementById("search-results-list");
    if (!container) return;

    if (!listEl) return;

    if (!query.trim()) {
      container.classList.add("d-none");
      if (emptyEl) emptyEl.classList.add("d-none");
      return;
    }

    container.classList.remove("d-none");

    if (results.length === 0) {
      if (emptyEl) {
        emptyEl.classList.remove("d-none");
        emptyEl.textContent = "No results found for \u201C" + query.trim() + "\u201D. Try different keywords.";
      }
      listEl.innerHTML = "";
      return;
    }

    if (emptyEl) emptyEl.classList.add("d-none");
    var html = "";
    for (var i = 0; i < results.length; i++) {
      var r = results[i];
      var title = r.title.replace(/</g, "&lt;").replace(/>/g, "&gt;");
      var snippet = r.snippet.replace(/</g, "&lt;").replace(/>/g, "&gt;");
      html +=
        '<article class="search-result-item mb-4">' +
        '<h5 class="h6 mb-2"><a href="' + r.url + '" class="text-decoration-none">' + title + "</a></h5>" +
        '<p class="small text-body-secondary mb-0">' + snippet + "</p>" +
        "</article>";
    }
    listEl.innerHTML = html;
  }

  function runSearch() {
    var input = document.getElementById("search-query") || document.getElementById("search-keyword-modal");
    var q = (input && input.value) || getQueryParam("q") || "";
    q = q.trim();
    if (input && input.value !== q) input.value = q;
    setQueryParam("q", q);
    var results = searchIndex(q);
    renderResults(results, q);
  }

  function init() {
    var form = document.getElementById("search-form");
    var input = document.getElementById("search-query");

    if (input) {
      input.value = getQueryParam("q") || "";
      input.addEventListener("input", function () {
        runSearch();
      });
    }

    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        var q = (input && input.value) || "";
        if (q.trim()) {
          setQueryParam("q", q.trim());
          runSearch();
        }
      });
    }

    runSearch();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
