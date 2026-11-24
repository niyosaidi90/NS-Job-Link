# NS WorkLink — Homepage Starter

**Brand:** NS WorkLink  
**Tagline:** Connect. Work. Grow.

A mobile-responsive HTML, CSS, and JavaScript homepage starter designed to open in Visual Studio Code.

## Files
- `index.html` — page structure and content
- `styles.css` — brand styles, responsive layout, cards, mobile menu, dialog
- `script.js` — sample listings, keyword/location search, filters, save-in-preview, job details

## Run locally in Visual Studio Code
1. Extract `ns-worklink-starter.zip` to a folder you can find.
2. Open Visual Studio Code.
3. Choose **File → Open Folder…** and select the extracted `ns_worklink` folder.
4. Open `index.html`.
5. For the easiest preview, install the VS Code extension **Live Server** (by Ritwick Dey), then right-click `index.html` and choose **Open with Live Server**.
6. Your browser should open the homepage. Save changes in VS Code and refresh if needed.

You can also double-click `index.html` to open it in a browser. Live Server is more convenient while developing.

## Important
All job listings are clearly labelled as **sample/demo content**. They are not real or verified vacancies. The save feature only remembers jobs while the current page is open. Search and filters run in the browser only. No accounts, employer submissions, database, real application links, or email alerts are connected yet.

## Recommended next development steps
1. **Set up Git:** initialize a repository and make a first commit so changes can be tracked.
2. **Replace demo jobs safely:** add only reviewed listings with the employer's official source URL, apply URL, date checked, country eligibility, and deadline. Keep the moderation/review step.
3. **Create job detail pages:** use real vacancy data and show employer, location, work type, eligibility, pay range if verified, deadline, source, and official application link.
4. **Add a backend/database:** use Supabase (PostgreSQL) or another trusted backend for jobs, user profiles, saved jobs, employer submissions, review status, and reports.
5. **Add authentication and roles:** job seeker, employer, editor/reviewer, and admin. Enforce permissions on the backend, not just in JavaScript.
6. **Build an admin review dashboard:** draft → pending review → needs changes/rejected → published → expired/closed. Employer payment must never bypass review.
7. **Add real saved jobs and alerts:** store saved jobs in the database and connect an email provider with consent and unsubscribe controls.
8. **Security and privacy:** enable database access policies, validate input on the server, protect secrets, add privacy/terms/report pages, and never put service-role keys in frontend code.
9. **Test before launch:** check mobile and desktop sizes, keyboard navigation, accessibility, performance, broken links, and listing expiry.
10. **Deploy:** publish the static front end (for example with GitHub Pages or Vercel). A production backend and secure environment settings are needed for dynamic features.

## Current interaction checklist
- Keyword search: title, company, description, type, workplace, experience
- Location search
- Job type filter
- Workplace filter
- Experience level filter
- Reset filters / browse all
- Sample job detail dialog
- Save button (temporary in-page state only)
- Mobile navigation menu
