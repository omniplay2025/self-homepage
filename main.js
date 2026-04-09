(function () {
  const data = window.siteData;

  if (!data) {
    return;
  }

  const $ = (selector) => document.querySelector(selector);

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
    String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");

  const renderExternalLink = (url, label, className = "text-link") => {
    if (!url) {
      return "";
    }

    return `<a class="${className}" href="${escapeHtml(url)}" target="_blank" rel="noreferrer">${escapeHtml(label)}</a>`;
  };

  const renderSimpleList = (items) =>
    items.map((item) => `<li>${escapeHtml(item)}</li>`).join("");

  const profile = data.profile;

  setText("#profile-name", profile.name);
  setText("#profile-cn-name", profile.cnName);
  setText("#profile-role", profile.role);
  setText("#profile-claim", profile.claim);
  setText("#biography-text", data.biography);

  setHref("#topbar-email", `mailto:${profile.email}`);
  setHref("#hero-email", `mailto:${profile.email}`);
  setHref("#footer-email", `mailto:${profile.email}`);
  setHref("#hero-github", profile.github);
  setHref("#footer-github", profile.github);

  const profileContactList = $("#profile-contact-list");
  profileContactList.innerHTML = `
    <span class="hero-inline-item">${escapeHtml(profile.phone)}</span>
    <a class="hero-inline-item hero-inline-link" href="mailto:${escapeHtml(profile.email)}">${escapeHtml(profile.email)}</a>
    <a class="hero-inline-item hero-inline-link" href="${escapeHtml(profile.github)}" target="_blank" rel="noreferrer">${escapeHtml(profile.githubLabel)}</a>
  `;

  const academicList = $("#profile-academic-list");
  academicList.innerHTML = profile.academicItems
    .map((item) => `<span class="hero-inline-item">${escapeHtml(item)}</span>`)
    .join("");

  const experienceTimeline = $("#experience-timeline");
  experienceTimeline.innerHTML = data.experience
    .map(
      (item) => `
        <li class="timeline-item">
          <div class="timeline-node"></div>
          <article class="card timeline-card cv-entry">
            <div class="cv-entry-header">
              <div class="cv-entry-main">
                <h3>${renderExternalLink(item.organizationUrl, item.organization, "entry-link") || escapeHtml(item.organization)}</h3>
                <p class="cv-entry-subtitle">${escapeHtml(item.role)}</p>
              </div>
              <div class="entry-side">
                <p>${escapeHtml(item.location)}</p>
                <p>${escapeHtml(item.period)}</p>
              </div>
            </div>
            <ul class="bullet-list">
              ${item.bullets.map((bullet) => `<li>${escapeHtml(bullet)}</li>`).join("")}
            </ul>
          </article>
        </li>
      `
    )
    .join("");

  const educationList = $("#education-list");
  educationList.innerHTML = data.education
    .map(
      (item) => `
        <article class="card cv-entry">
          <div class="cv-entry-header">
            <div class="cv-entry-main">
              <h3>${escapeHtml(item.institution)}</h3>
              <p class="cv-entry-subtitle">${escapeHtml(item.degree)}</p>
            </div>
            <div class="entry-side">
              <p>${escapeHtml(item.period)}</p>
            </div>
          </div>
          ${
            item.details.length
              ? `<ul class="bullet-list">${item.details
                  .map((detail) => `<li>${escapeHtml(detail)}</li>`)
                  .join("")}</ul>`
              : ""
          }
        </article>
      `
    )
    .join("");

  const projectList = $("#project-list");
  projectList.innerHTML = data.projects
    .map(
      (item) => `
        <article class="card cv-entry">
          <div class="cv-entry-header">
            <div class="cv-entry-main">
              <h3>${escapeHtml(item.title)}</h3>
              <p class="cv-entry-subtitle">${escapeHtml(item.description)}</p>
            </div>
            <div class="entry-side">
              ${item.link ? renderExternalLink(item.link, item.linkLabel || "Link", "entry-link") : ""}
            </div>
          </div>
        </article>
      `
    )
    .join("");

  const renderPublicationList = (items) => `
    <ol class="pub-list">
      ${items
        .map(
          (item) => `
            <li class="card pub-item">
              <p class="pub-title">${escapeHtml(item.title)}</p>
              <p class="pub-authors">${item.authorsHtml}</p>
              <div class="pub-meta-row">
                <p class="pub-meta">
                  <span class="pub-venue">${escapeHtml(item.venue)}</span>
                  ${
                    item.link
                      ? ` · <a class="pub-link" href="${escapeHtml(item.link)}" target="_blank" rel="noreferrer">${escapeHtml(item.link)}</a>`
                      : ""
                  }
                  ${item.extra ? ` <span class="pub-extra">${escapeHtml(item.extra)}</span>` : ""}
                </p>
                <span class="publication-year">${escapeHtml(item.year)}</span>
              </div>
            </li>
          `
        )
        .join("")}
    </ol>
  `;

  $("#representative-publications-list").innerHTML = renderPublicationList(data.representativePublications);
  $("#full-publications-list").innerHTML = renderPublicationList(data.fullPublications);

  $("#services-list").innerHTML = renderSimpleList(data.services);
  $("#teaching-list").innerHTML = renderSimpleList(data.teaching);
  $("#book-list").innerHTML = renderSimpleList(data.bookPublication);
  $("#patents-list").innerHTML = renderSimpleList(data.patents);
  $("#copyrights-list").innerHTML = renderSimpleList(data.softwareCopyrights);

  $("#footer-contact-list").innerHTML = `
    <li>${escapeHtml(profile.phone)}</li>
    <li><a class="hero-inline-link" href="mailto:${escapeHtml(profile.email)}">${escapeHtml(profile.email)}</a></li>
    <li><a class="hero-inline-link" href="${escapeHtml(profile.github)}" target="_blank" rel="noreferrer">${escapeHtml(profile.github)}</a></li>
  `;

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
    telephone: profile.phone,
    jobTitle: profile.role,
    affiliation: {
      "@type": "CollegeOrUniversity",
      name: "Beijing University of Posts and Telecommunications",
    },
    sameAs: [profile.github],
  });
  document.head.appendChild(ldScript);
})();
