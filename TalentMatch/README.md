# TalentMatch — Prototype v2

A front-end demo for tech job aggregation and transparent, rule-based job/candidate matching. Uses sample data and browser `localStorage`; it is not connected to live job boards and must not be used for real hiring decisions.

## Run locally

1. Keep the folder structure unchanged.
2. Open `index.html` in a modern browser.
3. For best results, use VS Code Live Server or another static local server.

No build step or package installation is required.

## Project structure

- `index.html` — page markup and screen inventory.
- `css/style.css` — base visual styles.
- `css/responsive.css` — responsive breakpoints.
- `js/data.js` — sample jobs, candidate profiles, storage keys and shared state.
- `js/scoring.js` — normalization and documented rule-based scoring.
- `js/applicant.js` — applicant search, profile, saved jobs and application tracking.
- `js/recruiter.js` — recruiter dashboard, candidate ranking, status actions and CSV export.
- `js/app.js` — shared UI helpers, navigation, rendering orchestration and initialization.

## Scoring model

Score = 60% required-skill coverage + 20% nice-to-have coverage + 10% experience fit + 10% location/remote fit. Results are rounded to an integer from 0 to 100. This simplified score is for demonstration and learning only.

## Persistence

The browser stores demo data under `talentmatch_jobs`, `talentmatch_profiles`, `talentmatch_applications`, and `talentmatch_prefs`. Use the Reset demo data control to restore the sample.

## Important limitation

All listings and candidate profiles are fictional sample data. There is no live scraping, external job-board API, server-side account system, resume parsing, or machine-learning hiring model.
