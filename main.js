(function () {
  const data = window.siteData;

  if (!data) {
    return;
  }

  const $ = (selector) => document.querySelector(selector);
  const profile = data.profile;

  const setText = (selector, value) => {
    const node = $(selector);
    if (node) {
      node.textContent = value;
    }
  };

  const setHref = (selector, value) => {
    const node = $(selector);
    if (node) {
      node.href = value;
    }
  };

  const escapeHtml = (value) =>
    value
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");

  const renderTagList = (tags) =>
    tags
      .map((tag) => `<li class="tag">${escapeHtml(tag)}</li>`)
      .join("");

  const statusClass = (status) => `status-${status.toLowerCase().replace(/\s+/g, "-")}`;

  setText("#profile-name", profile.name);
  setText("#profile-cn-name", profile.cnName);
  setText("#profile-role", profile.role);
  setText("#profile-summary", profile.summary);
  setText("#profile-affiliation", profile.affiliation);
  setText("#profile-track", profile.track);
  setText("#profile-focus", profile.focus);
  setText("#profile-claim", profile.claim);
  setText("#about-biography", profile.biography);
  setText("#footer-heading", profile.footerHeading);
  setText("#footer-copy", profile.footerCopy);
  setText("#footer-signoff", profile.footerSignoff);

  setHref("#hero-email", `mailto:${profile.email}`);
  setHref("#topbar-email", `mailto:${profile.email}`);
  setHref("#footer-email", `mailto:${profile.email}`);
  setHref("#hero-github", profile.github);
  setHref("#footer-github", profile.github);

  const heroHighlights = $("#hero-highlights");
  heroHighlights.innerHTML = data.highlights
    .map(
      (item) => `
        <article class="highlight-card">
          <p class="highlight-label">${escapeHtml(item.label)}</p>
          <p class="highlight-value">${escapeHtml(item.value)}</p>
          <p class="highlight-note">${escapeHtml(item.note)}</p>
        </article>
      `
    )
    .join("");

  const researchGrid = $("#research-grid");
  researchGrid.innerHTML = data.researchAreas
    .map(
      (area) => `
        <article class="card">
          <p class="card-kicker">Research pillar</p>
          <h3>${escapeHtml(area.title)}</h3>
          <p>${escapeHtml(area.description)}</p>
          <ul class="tag-list">${renderTagList(area.tags)}</ul>
        </article>
      `
    )
    .join("");

  const impactGrid = $("#impact-grid");
  impactGrid.innerHTML = data.impactPoints
    .map(
      (item) => `
        <article class="impact-card">
          <p class="impact-value">${escapeHtml(item.value)}</p>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.note)}</p>
        </article>
      `
    )
    .join("");

  const experienceTimeline = $("#experience-timeline");
  experienceTimeline.innerHTML = data.experiences
    .map(
      (item) => `
        <li class="timeline-item">
          <div class="timeline-node"></div>
          <article class="card timeline-card">
            <div class="timeline-header">
              <div>
                <p class="timeline-org">${escapeHtml(item.org)}</p>
                <h3>${escapeHtml(item.role)}</h3>
              </div>
              <div class="timeline-meta">
                <p>${escapeHtml(item.period)}</p>
                <p>${escapeHtml(item.location)}</p>
              </div>
            </div>
            <p class="timeline-featured">${escapeHtml(item.featuredOutput)}</p>
            <ul class="bullet-list">
              ${item.bullets.map((bullet) => `<li>${escapeHtml(bullet)}</li>`).join("")}
            </ul>
            <ul class="tag-list">${renderTagList(item.tags)}</ul>
          </article>
        </li>
      `
    )
    .join("");

  const projectGrid = $("#project-grid");
  projectGrid.innerHTML = data.projects
    .map((project) => {
      const linkMarkup = project.link
        ? `<a class="text-link" href="${escapeHtml(project.link)}" target="_blank" rel="noreferrer">Open project</a>`
        : `<span class="text-link text-link-muted">Internal project</span>`;

      return `
        <article class="card project-card">
          <div class="project-card-top">
            <p class="card-kicker">Project</p>
            <ul class="tag-list">${renderTagList(project.tag)}</ul>
          </div>
          <h3>${escapeHtml(project.title)}</h3>
          <p>${escapeHtml(project.description)}</p>
          <p class="project-note">${escapeHtml(project.note)}</p>
          ${linkMarkup}
        </article>
      `;
    })
    .join("");

  const featuredPublications = $("#featured-publications");
  const publicationList = $("#publication-list");
  const featured = data.publications.filter((item) => item.featured);
  const rest = [...data.publications].sort((left, right) => right.year - left.year);

  featuredPublications.innerHTML = featured
    .map(
      (item) => `
        <article class="card publication-card">
          <div class="publication-top">
            <span class="status-badge ${statusClass(item.status)}">${escapeHtml(item.status)}</span>
            <span class="publication-year">${escapeHtml(String(item.year))}</span>
          </div>
          <h3>${escapeHtml(item.title)}</h3>
          <p class="publication-authors">${escapeHtml(item.authors)}</p>
          <p class="publication-venue">${escapeHtml(item.venue)}</p>
          <p>${escapeHtml(item.note)}</p>
          <div class="publication-bottom">
            <ul class="tag-list">${renderTagList(item.tags)}</ul>
            ${
              item.link
                ? `<a class="text-link" href="${escapeHtml(item.link)}" target="_blank" rel="noreferrer">Open paper</a>`
                : ""
            }
          </div>
        </article>
      `
    )
    .join("");

  publicationList.innerHTML = rest
    .map((item) => {
      const linkMarkup = item.link
        ? `<a class="text-link" href="${escapeHtml(item.link)}" target="_blank" rel="noreferrer">Link</a>`
        : `<span class="text-link text-link-muted">No public link</span>`;

      return `
        <article class="publication-list-item">
          <div class="publication-list-main">
            <div class="publication-list-top">
              <span class="status-badge ${statusClass(item.status)}">${escapeHtml(item.status)}</span>
              <p class="publication-list-title">${escapeHtml(item.title)}</p>
            </div>
            <p class="publication-authors">${escapeHtml(item.authors)}</p>
            <p class="publication-venue">${escapeHtml(item.venue)} · ${escapeHtml(String(item.year))}</p>
          </div>
          <div class="publication-list-side">
            <ul class="tag-list">${renderTagList(item.tags)}</ul>
            ${linkMarkup}
          </div>
        </article>
      `;
    })
    .join("");

  const academicGrid = $("#academic-grid");
  academicGrid.innerHTML = data.academicBlocks
    .map(
      (block) => `
        <article class="card academic-card">
          <p class="card-kicker">Academic block</p>
          <h3>${escapeHtml(block.title)}</h3>
          <ul class="academic-list">
            ${block.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
          </ul>
        </article>
      `
    )
    .join("");

  const navLinks = [...document.querySelectorAll(".nav-link")];
  const observedSections = [...document.querySelectorAll("main .section, .footer")];

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    document.querySelectorAll(".reveal").forEach((section) => revealObserver.observe(section));

    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const id = entry.target.id;
          navLinks.forEach((link) => {
            link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`);
          });
        });
      },
      {
        threshold: 0.35,
        rootMargin: "-20% 0px -55% 0px",
      }
    );

    observedSections.forEach((section) => navObserver.observe(section));
  } else {
    document.querySelectorAll(".reveal").forEach((section) => section.classList.add("is-visible"));
  }

  const ldScript = document.createElement("script");
  ldScript.type = "application/ld+json";
  ldScript.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    alternateName: profile.cnName,
    email: `mailto:${profile.email}`,
    jobTitle: profile.role,
    affiliation: {
      "@type": "CollegeOrUniversity",
      name: "Beijing University of Posts and Telecommunications",
    },
    alumniOf: [
      "Beijing University of Posts and Telecommunications",
      "Institute of Automation, Chinese Academy of Sciences",
      "China University of Geosciences (Beijing)",
      "Qufu Normal University",
    ],
    sameAs: [profile.github],
    knowsAbout: ["LLM Agents", "Reinforcement Learning", "Multi-Agent RL", "Multimodal Systems"],
  });
  document.head.appendChild(ldScript);
})();
