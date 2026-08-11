(function () {
  const data = window.siteData;

  if (!data) {
    return;
  }

  const $ = (selector) => document.querySelector(selector);

  const escapeHtml = (value) =>
    String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");

  const setText = (selector, value) => {
    const element = $(selector);
    if (element) {
      element.textContent = value;
    }
  };

  const setHref = (selector, value) => {
    const element = $(selector);
    if (element) {
      element.href = value;
    }
  };

  const externalLink = (url, label) => {
    if (!url) {
      return escapeHtml(label);
    }

    return `<a href="${escapeHtml(url)}" target="_blank" rel="noreferrer">${escapeHtml(label)}</a>`;
  };

  const profile = data.profile;

  setText("#profile-availability", profile.availability);
  setText("#profile-cn-name", profile.cnName);
  setText("#profile-role", profile.role);
  setText("#profile-intro", profile.intro);
  setText("#footer-email-label", profile.email);
  setText("#publication-count", `${data.fullPublications.length} papers`);
  setText("#current-year", new Date().getFullYear());

  setHref("#header-email", `mailto:${profile.email}`);
  setHref("#hero-email", `mailto:${profile.email}`);
  setHref("#footer-email", `mailto:${profile.email}`);
  setHref("#hero-github", profile.github);

  $("#research-tags").innerHTML = profile.researchAreas
    .map((area) => `<li>${escapeHtml(area)}</li>`)
    .join("");

  $("#hero-details").innerHTML = `
    <div><span>Location</span><strong>${escapeHtml(profile.location)}</strong></div>
    <div><span>Graduation</span><strong>June 2027</strong></div>
    <div><span>Email</span><a href="mailto:${escapeHtml(profile.email)}">${escapeHtml(profile.email)}</a></div>
  `;

  $("#profile-stats").innerHTML = profile.stats
    .map(
      (item) => `
        <article class="fact-item">
          <strong>${escapeHtml(item.value)}</strong>
          <div>
            <p>${escapeHtml(item.label)}</p>
            <span>${escapeHtml(item.note)}</span>
          </div>
        </article>
      `
    )
    .join("");

  $("#project-list").innerHTML = data.projects
    .map(
      (project) => `
        <article class="work-card">
          <p class="work-type">${escapeHtml(project.type)}</p>
          <h3>${escapeHtml(project.title)}</h3>
          <p class="work-description">${escapeHtml(project.description)}</p>
          <div class="work-footer">
            <strong>${escapeHtml(project.impact)}</strong>
            <a href="${escapeHtml(project.link)}" target="_blank" rel="noreferrer">
              ${escapeHtml(project.linkLabel)} ↗
            </a>
          </div>
        </article>
      `
    )
    .join("");

  const renderExperience = (items, startingIndex = 0) =>
    items
      .map(
        (item, index) => `
          <li class="experience-item">
            <div class="experience-period">
              <span>${String(startingIndex + index + 1).padStart(2, "0")}</span>
              <div class="experience-logo">
                <img
                  src="${escapeHtml(item.logo)}"
                  alt="${escapeHtml(item.organization)} logo"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <p>${escapeHtml(item.period)}</p>
            </div>
            <article class="experience-content">
              <div class="experience-heading">
                <div>
                  <h3>${externalLink(item.organizationUrl, item.organization)}</h3>
                  <p>${escapeHtml(item.organizationCn)}</p>
                </div>
                ${item.featured ? '<span class="current-role"><i></i> Current</span>' : ""}
              </div>
              <p class="experience-role">${escapeHtml(item.role)} · ${escapeHtml(item.location)}</p>
              <ul>
                ${item.bullets.map((bullet) => `<li>${escapeHtml(bullet)}</li>`).join("")}
              </ul>
            </article>
          </li>
        `
      )
      .join("");

  $("#experience-list").innerHTML = renderExperience(data.experience.slice(0, 4));
  $("#earlier-experience-list").innerHTML = renderExperience(data.experience.slice(4), 4);

  const renderPublications = (items) =>
    items
      .map((item, index) => {
        const title = item.link
          ? `<a href="${escapeHtml(item.link)}" target="_blank" rel="noreferrer">${escapeHtml(item.title)} ↗</a>`
          : escapeHtml(item.title);
        const statusClass = item.status.toLowerCase().replace(/\s+/g, "-");

        return `
          <li class="publication-item">
            <span class="publication-number">${String(index + 1).padStart(2, "0")}</span>
            <article>
              <div class="publication-heading">
                <p>${escapeHtml(item.venue)} · ${escapeHtml(item.year)}</p>
                <span class="publication-status status-${escapeHtml(statusClass)}">${escapeHtml(item.status)}</span>
              </div>
              <h3>${title}</h3>
              <p class="publication-authors">${item.authorsHtml}</p>
            </article>
          </li>
        `;
      })
      .join("");

  $("#representative-publications-list").innerHTML = renderPublications(data.representativePublications);
  $("#full-publications-list").innerHTML = renderPublications(data.fullPublications);

  $("#footer-links").innerHTML = `
    <a href="${escapeHtml(profile.github)}" target="_blank" rel="noreferrer">GitHub ↗</a>
    <a href="tel:${escapeHtml(profile.phone.replace(/\s/g, ""))}">${escapeHtml(profile.phone)}</a>
    <span>${escapeHtml(profile.location)}</span>
  `;

  const navLinks = [...document.querySelectorAll(".primary-nav a")];
  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if ("IntersectionObserver" in window) {
    const navObserver = new IntersectionObserver(
      (entries) => {
        const activeEntry = entries.find((entry) => entry.isIntersecting);
        if (!activeEntry) {
          return;
        }

        navLinks.forEach((link) => {
          link.classList.toggle("is-active", link.getAttribute("href") === `#${activeEntry.target.id}`);
        });
      },
      { rootMargin: "-25% 0px -65% 0px", threshold: 0 }
    );

    sections.forEach((section) => navObserver.observe(section));
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
    address: profile.location,
    affiliation: {
      "@type": "CollegeOrUniversity",
      name: profile.affiliation,
    },
    worksFor: {
      "@type": "Organization",
      name: "Tencent Advertising",
    },
    knowsAbout: profile.researchAreas,
    sameAs: [profile.github],
  });
  document.head.appendChild(ldScript);
})();
