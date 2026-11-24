# NS WorkLink — Job Management Guide

## Option A — Admin Panel (recommended)

Open `admin.html` in your browser.

**Default login credentials:**
- Username: `admin`
- Password: `nsworklink2025`

> To change the password, open `admin.html` in a text editor and find these two lines near the top of the `<script>` section:
> ```js
> const ADMIN_USER = "admin";
> const ADMIN_PASS = "nsworklink2025";
> ```
> Change the values and save.

### What you can do in the admin panel:
| Action | How |
|---|---|
| Add a job | Click **"+ Add new job"**, fill the form, click **Save job** |
| Edit a job | Click **Edit** next to any listing |
| Remove a job | Click **Remove** → confirm |
| Move a job up/down | Use the ▲ ▼ arrows — controls the order on the website |

Changes take effect immediately on the main website (`index.html`).

---

## Option B — Edit jobs.js directly

Open `jobs.js` in any text editor and add a new block inside the `JOBS_DATA` array:

```javascript
{
  "id": 9,                                      // unique number
  "title": "Your Job Title",
  "company": "Company Name",
  "initials": "CN",                             // 2-letter logo
  "logo": "blue",                               // blue | green | orange | purple | pink | dark
  "location": "Kigali, Rwanda",
  "type": "Full-time",                          // Full-time | Part-time | Contract | Internship | Freelance
  "workplace": "Hybrid",                        // Remote | Hybrid | On-site
  "experience": "Entry level",                  // Entry level | Intermediate | Experienced
  "posted": "Posted 1 Jan 2025",
  "salary": "RWF 200,000 / month",
  "applyUrl": "https://yourcompany.com/apply",
  "description": "One sentence about the role.",
  "responsibilities": ["Task one.", "Task two.", "Task three."],
  "requirements": ["Requirement one.", "Requirement two."]
}
```

> **Note:** If you have previously used the admin panel, jobs saved there (in browser storage) take priority over `jobs.js`. To reset to the `jobs.js` data, open the browser console on the main site and run: `localStorage.removeItem("nsworklink_jobs")`

---

## How jobs are stored

- The admin panel saves jobs to your **browser's localStorage**.
- `jobs.js` is the **default/fallback** data used on first load or in a fresh browser.
- Both the main site and admin panel share the same localStorage key: `nsworklink_jobs`.
