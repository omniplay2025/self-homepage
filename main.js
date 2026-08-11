(function () {
  const data = window.siteData;

  if (!data) {
    return;
  }

  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => [...document.querySelectorAll(selector)];

  const escapeHtml = (value) =>
    String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");

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

  const externalLink = (url, label, className = "inline-link") => {
    if (!url) {
      return escapeHtml(label);
    }

    return `<a class="${className}" href="${escapeHtml(url)}" target="_blank" rel="noreferrer">${escapeHtml(label)}</a>`;
  };

  const profile = data.profile;

  setText("#profile-availability", profile.availability);
  setText("#profile-intro", profile.intro);
  setText("#profile-monogram", profile.cnName);
  setText("#profile-role", profile.role);
  setText("#biography-text", data.biography);
  setText("#footer-email-label", profile.email);
  setText("#current-year", new Date().getFullYear());
  setText("#publication-count", `${data.fullPublications.length} papers`);

  setHref("#topbar-email", `mailto:${profile.email}`);
  setHref("#hero-email", `mailto:${profile.email}`);
  setHref("#footer-email", `mailto:${profile.email}`);
  setHref("#hero-github", profile.github);

  $("#profile-meta").innerHTML = profile.meta
    .map(
      (item) => `
        <div class="hero-meta-item">
          <span>${escapeHtml(item.label)}</span>
          <strong>${escapeHtml(item.value)}</strong>
        </div>
      `
    )
    .join("");

  $("#profile-stats").innerHTML = profile.stats
    .map(
      (item, index) => `
        <article class="stat-item">
          <span class="stat-index">0${index + 1}</span>
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
      (project, index) => `
        <article class="project-card reveal${index === 0 ? " project-card-featured" : ""}">
          <div class="project-card-top">
            <span class="project-number">0${index + 1}</span>
            <span class="project-type">${escapeHtml(project.type)}</span>
          </div>
          <div class="project-card-body">
            <p class="project-impact">${escapeHtml(project.impact)}</p>
            <h3>${escapeHtml(project.title)}</h3>
            <p>${escapeHtml(project.description)}</p>
          </div>
          <a class="project-link" href="${escapeHtml(project.link)}" target="_blank" rel="noreferrer">
            ${escapeHtml(project.linkLabel)} <span aria-hidden="true">↗</span>
          </a>
        </article>
      `
    )
    .join("");

  $("#experience-list").innerHTML = data.experience
    .map(
      (item, index) => `
        <li class="experience-item reveal${item.featured ? " experience-item-current" : ""}">
          <div class="experience-period">
            <span>0${index + 1}</span>
            <p>${escapeHtml(item.period)}</p>
          </div>
          <article class="experience-body">
            <div class="experience-title-row">
              <div>
                <h3>${externalLink(item.organizationUrl, item.organization, "organization-link")}</h3>
                <p class="organization-cn">${escapeHtml(item.organizationCn)}</p>
              </div>
              ${item.featured ? '<span class="current-badge"><i></i> Current</span>' : ""}
            </div>
            <p class="experience-role">${escapeHtml(item.role)} <span>·</span> ${escapeHtml(item.location)}</p>
            <ul>
              ${item.bullets.map((bullet) => `<li>${escapeHtml(bullet)}</li>`).join("")}
            </ul>
          </article>
        </li>
      `
    )
    .join("");

  const renderPublications = (items) =>
    items
      .map((item, index) => {
        const title = item.link
          ? `<a href="${escapeHtml(item.link)}" target="_blank" rel="noreferrer">${escapeHtml(item.title)} <span aria-hidden="true">↗</span></a>`
          : escapeHtml(item.title);
        const statusClass = item.status.toLowerCase().replace(/\s+/g, "-");

        return `
          <li class="publication-item reveal">
            <span class="publication-number">${String(index + 1).padStart(2, "0")}</span>
            <article>
              <div class="publication-meta">
                <span>${escapeHtml(item.venue)} · ${escapeHtml(item.year)}</span>
                <span class="publication-status status-${escapeHtml(statusClass)}">${escapeHtml(item.status)}</span>
              </div>
              <h3>${title}</h3>
              <p>${item.authorsHtml}</p>
            </article>
          </li>
        `;
      })
      .join("");

  $("#representative-publications-list").innerHTML = renderPublications(data.representativePublications);
  $("#full-publications-list").innerHTML = renderPublications(data.fullPublications);

  $("#education-list").innerHTML = data.education
    .map(
      (item) => `
        <article class="education-item">
          <div class="education-period">${escapeHtml(item.period)}</div>
          <h3>${escapeHtml(item.school)}</h3>
          <p>${escapeHtml(item.degree)}</p>
          ${item.note ? `<span>${escapeHtml(item.note)}</span>` : ""}
        </article>
      `
    )
    .join("");

  const renderPlainList = (items) => items.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  $("#services-list").innerHTML = renderPlainList(data.services);
  $("#other-work-list").innerHTML = renderPlainList(data.otherWork);

  $("#footer-links").innerHTML = `
    <a href="${escapeHtml(profile.github)}" target="_blank" rel="noreferrer">GitHub ↗</a>
    <a href="tel:${escapeHtml(profile.phone.replace(/\s/g, ""))}">${escapeHtml(profile.phone)}</a>
    <span>${escapeHtml(profile.location)}</span>
  `;

  const revealElements = $$(".reveal");

  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    revealElements.forEach((element) => revealObserver.observe(element));
  } else {
    revealElements.forEach((element) => element.classList.add("is-visible"));
  }

  const navLinks = $$(".nav-link");
  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if ("IntersectionObserver" in window) {
    const navObserver = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);
        if (!visibleEntry) {
          return;
        }

        navLinks.forEach((link) => {
          link.classList.toggle("is-active", link.getAttribute("href") === `#${visibleEntry.target.id}`);
        });
      },
      { rootMargin: "-30% 0px -58% 0px", threshold: 0 }
    );

    sections.forEach((section) => navObserver.observe(section));
  }

  let scrollTicking = false;
  const updateProgress = () => {
    const availableScroll = document.documentElement.scrollHeight - window.innerHeight;
    const progress = availableScroll > 0 ? window.scrollY / availableScroll : 0;
    document.documentElement.style.setProperty("--scroll-progress", progress);
    scrollTicking = false;
  };

  window.addEventListener(
    "scroll",
    () => {
      if (!scrollTicking) {
        window.requestAnimationFrame(updateProgress);
        scrollTicking = true;
      }
    },
    { passive: true }
  );
  updateProgress();

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
