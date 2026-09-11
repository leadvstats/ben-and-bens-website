# Ben & Ben's Property Services — Website

A fast, SEO-friendly website built with [Eleventy](https://www.11ty.dev/) (a static
site generator) and [Decap CMS](https://decapcms.org/) (a free, browser-based content
editor). The site itself is still plain HTML/CSS once built — Eleventy and the CMS
just make the day-to-day editing easier.

## Project structure

```
src/
  _includes/
    base.njk            <- shared header, footer, meta tags for every page
    service-layout.njk   <- shared layout for the 6 individual service pages
  _data/
    site.json            <- business name, phone numbers, email, etc. (used everywhere)
  admin/
    index.html, config.yml  <- the Decap CMS editor, served at /admin
  index.njk               -> index.html      (Homepage, incl. "Meet The Bens" story)
  services.njk             -> services.html   (Services hub)
  landscaping.njk           -> landscaping.html (Landscaping hub)
  contact.njk                -> contact.html    (Contact + quote form)
  services/
    dryer-vent-cleaning.njk -> dryer-vent-cleaning.html
    lawn-mowing.njk          -> lawn-mowing.html
    garden-design.njk        -> garden-design.html
    sod-installation.njk     -> sod-installation.html
    excavation.njk           -> excavation.html
    hardscaping.njk          -> hardscaping.html
  css/, js/, images/       <- copied as-is
  robots.txt, sitemap.xml  <- copied as-is
```

Every page keeps its original flat URL (e.g. `/services.html`) via an explicit
`permalink` in its front matter, so nothing about the live site's links changes.

## Local development

```
npm install       # one-time
npm start         # builds the site and serves it at http://localhost:8080 with live reload
npm run build     # builds once into _site/ (what Netlify runs on deploy)
```

## Contact details used on the site
Phone, email, hours, and area served all live in one place now:
`src/_data/site.json`. Change them there (or via the CMS's "Business Info"
screen) and every page updates automatically on the next build.

---

## Editing the site through the CMS

Once the one-time setup below is done, go to **yoursite.com/admin**, log in,
and edit text and swap photos through a simple form — no code required.
Changes are published automatically: saving in the CMS commits the change,
which triggers Netlify to rebuild and redeploy the live site (usually live
within a minute or two).

### One-time setup (do this once, in order)

1. **Push this project to GitHub.**
   Create a new (private is fine) repository on github.com, then:
   ```
   git remote add origin <your-new-repo-url>
   git branch -M main
   git push -u origin main
   ```

2. **Connect Netlify to that GitHub repo**, instead of dragging a folder.
   In the Netlify dashboard: **Add new site → Import an existing project →
   GitHub** → pick this repo. Netlify will detect `netlify.toml` automatically
   (build command `npm run build`, publish directory `_site`).

3. **Enable Netlify Identity.**
   Site → **Project configuration → Identity → Enable Identity**.
   Under Identity settings, set registration to **Invite only**.

4. **Enable Git Gateway.**
   Still under Identity settings → **Services → Git Gateway → Enable Git Gateway**.
   This is what lets the CMS commit changes back to GitHub on his behalf,
   without him ever needing his own GitHub account.

5. **Invite him as a user.**
   Identity tab → **Invite users** → enter his email → he'll get an email to
   set a password. That's his login for `/admin`.

6. **Re-point the domain** (if a custom domain was already connected to the
   old Netlify Drop deploy) to this new git-connected site, or just use the
   new site going forward.

After that, steps 1–5 never need to be repeated — he just visits `/admin`,
logs in, and edits.

---

## Getting found on Google

The site already includes the technical SEO basics: title tags, meta
descriptions, mobile-friendly layout, a sitemap, robots.txt, and
LocalBusiness/Service structured data. `areaServed` is set to "Halifax, Nova
Scotia" across the site.

1. **Create a Google Business Profile** — the single most important step for
   a local business. Go to https://business.google.com and add the business
   name, phone, service area, and services. This is what puts you on Google
   Maps and in the local "map pack."
2. **Submit the site to Google Search Console** — https://search.google.com/search-console
   Add the site, then submit `sitemap.xml` so Google indexes the pages.
3. **Ask happy customers for Google reviews** — reviews strongly boost local ranking.
4. **Keep contact info identical everywhere** (name, phone, email) across the
   website, Google, Facebook, etc.
