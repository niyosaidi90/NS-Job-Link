// NS WorkLink — homepage interactions
// Jobs are loaded from jobs.js (JOBS_DATA), with localStorage overrides from the admin panel.

// ── Persist saved jobs across page loads ────────────────────────────────────
function loadSaved() {
  try { return new Set(JSON.parse(localStorage.getItem("nsworklink_saved") || "[]")); }
  catch { return new Set(); }
}
function persistSaved() {
  localStorage.setItem("nsworklink_saved", JSON.stringify([...savedJobIds]));
}

const jobGrid         = document.querySelector("#jobGrid");
const keywordInput    = document.querySelector("#keywordInput");
const locationInput   = document.querySelector("#locationInput");
const typeFilter      = document.querySelector("#typeFilter");
const workplaceFilter = document.querySelector("#workplaceFilter");
const experienceFilter = document.querySelector("#experienceFilter");
const sortSelect      = document.querySelector("#sortSelect");
const resultsSummary  = document.querySelector("#resultsSummary");
const emptyState      = document.querySelector("#emptyState");
const jobDialog       = document.querySelector("#jobDialog");
const dialogContent   = document.querySelector("#dialogContent");
const savedJobIds     = loadSaved();

// ── Holds all jobs once loaded ──────────────────────────────────────────────
let allJobs = [];

// ── Helpers ─────────────────────────────────────────────────────────────────
function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[char]);
}

// Format structured salary: "$85k – $125k / yr"
function formatSalary(job) {
  const min = Number(job.salaryMin) || 0;
  const max = Number(job.salaryMax) || 0;
  if (!min && !max) return job.salary || null;
  const fmt = n => n >= 1000 ? `${(n / 1000).toFixed(0)}k` : String(n);
  const period = job.salaryPeriod === "yr" ? "yr" : job.salaryPeriod === "mo" ? "mo" : "hr";
  return `${job.currency || "$"}${fmt(min)} – ${job.currency || "$"}${fmt(max)} / ${period}`;
}

// Get the best apply URL for a job
function getApplyUrl(job) {
  if (job.applyUrl && job.applyUrl.trim() && job.applyUrl !== "https://" && job.applyUrl !== "http://") {
    return job.applyUrl.trim();
  }
  if (job.contactEmail && job.contactEmail.trim()) {
    const subject = encodeURIComponent(`Application for ${job.title} at ${job.company}`);
    return `mailto:${job.contactEmail.trim()}?subject=${subject}`;
  }
  return "";
}

// ── Render a single job card ────────────────────────────────────────────────
function jobCard(job) {
  const isSaved        = savedJobIds.has(job.id);
  const workplaceClass = job.workplace === "Remote" ? "remote" : "";
  const typeClass      = job.type === "Internship" ? "internship" : "";
  const salary         = formatSalary(job);
  const applyUrl       = getApplyUrl(job);

  return `
    <article class="job-card${job.featured ? " job-card-featured" : ""}" aria-label="${escapeHTML(job.title)} at ${escapeHTML(job.company)}">
      <div class="job-card-top">
        <div class="company-logo logo-${escapeHTML(job.logo)}" aria-hidden="true">${escapeHTML(job.initials)}</div>
        <button class="job-save ${isSaved ? "saved" : ""}" type="button" data-save="${job.id}"
          aria-label="${isSaved ? "Remove saved job" : "Save job"}" aria-pressed="${isSaved}">
          ${isSaved ? "♥" : "♡"}
        </button>
      </div>
      <h4 class="job-title">${escapeHTML(job.title)}</h4>
      <p class="company-name">${escapeHTML(job.company)}${job.department ? ` <span class="job-dept">· ${escapeHTML(job.department)}</span>` : ""}</p>
      <p class="job-location">📍 ${escapeHTML(job.location)}</p>
      <div class="job-meta">
        <span class="job-pill">${escapeHTML(job.type)}</span>
        <span class="job-pill ${workplaceClass}">${escapeHTML(job.workplace)}</span>
        <span class="job-pill ${typeClass}">${escapeHTML(job.experience)}</span>
        ${job.visaSponsored ? `<span class="job-pill visa-pill">✈ Visa Sponsored</span>` : ""}
        ${salary ? `<span class="job-pill salary-pill">💰 ${escapeHTML(salary)}</span>` : ""}
      </div>
      <p class="job-description">${escapeHTML(job.description)}</p>
      <div class="job-card-footer">
        <span class="job-posted">${escapeHTML(job.posted)}</span>
        <div class="job-card-actions">
          <button class="job-details" type="button" data-details="${job.id}">Details <span>→</span></button>
          ${applyUrl
            ? `<a class="button button-primary job-apply-btn" href="${escapeHTML(applyUrl)}" target="_blank" rel="noopener noreferrer">Apply now <span>↗</span></a>`
            : `<button class="button button-secondary job-apply-btn" type="button" data-details="${job.id}">View role</button>`
          }
        </div>
      </div>
    </article>`;
}

// ── Filter and sort jobs ─────────────────────────────────────────────────────
function getFilteredJobs() {
  const keyword  = keywordInput.value.trim().toLowerCase();
  const location = locationInput.value.trim().toLowerCase();
  const sort     = sortSelect ? sortSelect.value : "newest";

  let jobs = allJobs.filter(job => {
    const searchable  = `${job.title} ${job.company} ${job.description} ${job.type} ${job.workplace} ${job.experience} ${job.location} ${job.department || ""}`.toLowerCase();
    const locationText = job.location.toLowerCase();
    return (!keyword   || searchable.includes(keyword)) &&
           (!location  || locationText.includes(location)) &&
           (!typeFilter.value       || job.type       === typeFilter.value) &&
           (!workplaceFilter.value  || job.workplace  === workplaceFilter.value) &&
           (!experienceFilter.value || job.experience === experienceFilter.value);
  });

  // Sort
  if (sort === "salaryHigh") {
    jobs = jobs.slice().sort((a, b) => (Number(b.salaryMax) || 0) - (Number(a.salaryMax) || 0));
  } else if (sort === "salaryLow") {
    jobs = jobs.slice().sort((a, b) => (Number(a.salaryMin) || 0) - (Number(b.salaryMin) || 0));
  } else {
    // newest — featured first, then by posted date descending
    jobs = jobs.slice().sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return new Date(b.posted || 0) - new Date(a.posted || 0);
    });
  }

  return jobs;
}

// ── Re-render the job grid ───────────────────────────────────────────────────
function renderJobs() {
  const jobs = getFilteredJobs();
  jobGrid.innerHTML  = jobs.map(jobCard).join("");
  emptyState.hidden  = jobs.length !== 0;
  jobGrid.hidden     = jobs.length === 0;
  resultsSummary.textContent = `${jobs.length} ${jobs.length === 1 ? "opportunity" : "opportunities"} shown`;
}

// ── Reset all filters and re-render ─────────────────────────────────────────
function resetFilters() {
  keywordInput.value       = "";
  locationInput.value      = "";
  typeFilter.value         = "";
  workplaceFilter.value    = "";
  experienceFilter.value   = "";
  if (sortSelect) sortSelect.value = "newest";
  renderJobs();
}

// ── Open the job details dialog ──────────────────────────────────────────────
function openJobDetails(id) {
  const job = allJobs.find(item => item.id === Number(id));
  if (!job) return;

  const salary   = formatSalary(job);
  const applyUrl = getApplyUrl(job);

  const benefitsHTML = job.benefits && job.benefits.length
    ? `<h3 class="dialog-section-title">Perks & Benefits</h3>
       <div class="dialog-benefits">
         ${job.benefits.map(b => `<div class="dialog-benefit-item">🎁 ${escapeHTML(b)}</div>`).join("")}
       </div>`
    : "";

  dialogContent.innerHTML = `
    <div class="dialog-company">
      <div class="company-logo logo-${escapeHTML(job.logo)}" aria-hidden="true">${escapeHTML(job.initials)}</div>
      <div>
        <h2 id="dialogTitle">${escapeHTML(job.title)}</h2>
        <p>${escapeHTML(job.company)}${job.department ? ` · ${escapeHTML(job.department)}` : ""} · ${escapeHTML(job.location)}</p>
      </div>
    </div>
    <div class="dialog-pills">
      <span class="job-pill">${escapeHTML(job.type)}</span>
      <span class="job-pill ${job.workplace === "Remote" ? "remote" : ""}">${escapeHTML(job.workplace)}</span>
      <span class="job-pill">${escapeHTML(job.experience)}</span>
      ${job.visaSponsored ? `<span class="job-pill visa-pill">✈ Visa Sponsored</span>` : ""}
      ${salary ? `<span class="job-pill salary-pill">💰 ${escapeHTML(salary)}</span>` : ""}
    </div>
    <p class="dialog-description">${escapeHTML(job.description)}</p>
    <h3 class="dialog-section-title">What you will do</h3>
    <ul class="dialog-list">${(job.responsibilities || []).map(item => `<li>${escapeHTML(item)}</li>`).join("")}</ul>
    <h3 class="dialog-section-title">What you need</h3>
    <ul class="dialog-list">${(job.requirements || []).map(item => `<li>${escapeHTML(item)}</li>`).join("")}</ul>
    ${benefitsHTML}
    <div class="dialog-actions">
      ${applyUrl
        ? `<a class="button button-primary" href="${escapeHTML(applyUrl)}" target="_blank" rel="noopener noreferrer">Apply for this role <span>↗</span></a>`
        : `<span class="dialog-no-link">No direct application link — contact the employer directly.</span>`
      }
      <button class="button button-secondary" type="button" data-save="${job.id}">
        ${savedJobIds.has(job.id) ? "♥ Saved" : "♡ Save"}
      </button>
      <button class="button button-secondary dialog-share-btn" type="button" id="dialogShare" title="Copy link to clipboard">
        🔗 Share
      </button>
      <button class="button button-secondary" type="button" id="dialogDone">Close</button>
    </div>`;

  // Share button
  document.getElementById("dialogShare").addEventListener("click", () => {
    const shareText = `${job.title} at ${job.company} — ${window.location.origin}${window.location.pathname}#jobs`;
    navigator.clipboard.writeText(shareText).then(() => {
      const btn = document.getElementById("dialogShare");
      if (btn) { btn.textContent = "✓ Copied!"; setTimeout(() => { if (btn) btn.textContent = "🔗 Share"; }, 2500); }
    }).catch(() => {});
  });

  if (typeof jobDialog.showModal === "function") jobDialog.showModal();
  else jobDialog.setAttribute("open", "");
}

// ── Job grid click handler ───────────────────────────────────────────────────
jobGrid.addEventListener("click", event => {
  const saveBtn    = event.target.closest("[data-save]");
  const detailsBtn = event.target.closest("[data-details]");
  if (saveBtn && !saveBtn.dataset.details) {
    const id = Number(saveBtn.dataset.save);
    if (savedJobIds.has(id)) savedJobIds.delete(id); else savedJobIds.add(id);
    persistSaved();
    renderJobs();
    if (jobDialog.open && Number(dialogContent.querySelector("[data-save]")?.dataset.save) === id) {
      openJobDetails(id);
    }
  } else if (detailsBtn) {
    openJobDetails(detailsBtn.dataset.details);
  }
});

// ── Dialog click handler ─────────────────────────────────────────────────────
dialogContent.addEventListener("click", event => {
  const saveBtn = event.target.closest("[data-save]");
  if (saveBtn) {
    const id = Number(saveBtn.dataset.save);
    if (savedJobIds.has(id)) savedJobIds.delete(id); else savedJobIds.add(id);
    persistSaved();
    renderJobs();
    openJobDetails(id);
  }
  if (event.target.closest("#dialogDone")) jobDialog.close();
});

// ── Search form ──────────────────────────────────────────────────────────────
document.querySelector("#jobSearchForm").addEventListener("submit", event => {
  event.preventDefault();
  renderJobs();
  document.querySelector("#jobs .jobs-toolbar").scrollIntoView({ behavior: "smooth", block: "start" });
});

// ── Filter & sort controls ───────────────────────────────────────────────────
[typeFilter, workplaceFilter, experienceFilter].forEach(sel => sel.addEventListener("change", renderJobs));
if (sortSelect) sortSelect.addEventListener("change", renderJobs);
document.querySelector("#resetFilters").addEventListener("click", resetFilters);
document.querySelector("#emptyReset").addEventListener("click", resetFilters);
document.querySelector("#browseAll").addEventListener("click", () => {
  resetFilters();
  document.querySelector("#jobs .jobs-toolbar").scrollIntoView({ behavior: "smooth", block: "start" });
});

// ── Hero category filter buttons ──────────────────────────────────────────────
document.querySelectorAll(".hero-cat-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    resetFilters();
    if (btn.dataset.filterWorkplace) workplaceFilter.value = btn.dataset.filterWorkplace;
    if (btn.dataset.filterType)      typeFilter.value      = btn.dataset.filterType;
    renderJobs();
    document.querySelector("#jobs").scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

// ── Mobile nav ───────────────────────────────────────────────────────────────
const menuToggle = document.querySelector("#menuToggle");
const mainNav    = document.querySelector("#mainNav");
menuToggle.addEventListener("click", () => {
  const open = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
});
mainNav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  mainNav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));

// ── Dialog close ─────────────────────────────────────────────────────────────
document.querySelector("#dialogClose").addEventListener("click", () => jobDialog.close());
jobDialog.addEventListener("click", event => { if (event.target === jobDialog) jobDialog.close(); });

// ── Footer year ──────────────────────────────────────────────────────────────
document.querySelector("#currentYear").textContent = new Date().getFullYear();

// ── Boot ─────────────────────────────────────────────────────────────────────
(function () {
  try {
    const stored = localStorage.getItem("nsworklink_jobs");
    allJobs = stored ? JSON.parse(stored) : JOBS_DATA;
  } catch (e) {
    allJobs = JOBS_DATA;
  }
  renderJobs();
})();
