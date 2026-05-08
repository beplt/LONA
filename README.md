# Lona
**A location-based artist marketplace and portfolio platform — Baguio City, PH**

---

## What This Is

Lona is a web platform that connects Filipino artists with local customers. It functions as a combined digital portfolio, social feed, and artist marketplace — built with plain HTML, CSS, and vanilla JavaScript. No frameworks, no dependencies, no build step.

---

## Pages

| File | Purpose |
|------|---------|
| `index.html` | Registration page — user signs up and data is saved to localStorage |
| `profile.html` | Personal profile — avatar upload, bio, and stream posts grid |
| `Stream.html` | Social feed — compose and browse posts with like/edit/delete |
| `Gallery.html` | Artist gallery — lightbox image viewer with category filtering |
| `artistSample.html` | Sample artist profile page (CloudMan2000) — demonstrates artist view |
| `message.html` | Direct messaging interface between users |
| `About.html` | Platform info — mission, what Lona means, artist and customer value props |

---

## Files

```
project/
├── index.html              — Registration / landing page
├── profile.html            — User profile page
├── Stream.html             — Social stream / feed
├── Gallery.html            — Art gallery with lightbox
├── artistSample.html       — Sample artist profile
├── message.html            — Messaging page
├── About.html              — About Lona page
│
├── style.css               — Registration page styles
├── shared-nav.css          — Shared navigation, footer, and utility styles
├── profile.css             — Profile page styles
├── Stream.css              — Stream page styles
├── Gallery.css             — Gallery page styles
├── artistSample.css        — Artist sample profile styles
├── Message.css             — Messaging page styles
├── About.css               — About page styles
│
├── lona-storage.js         — Shared localStorage API (profile + posts)
├── lona-footer.js          — Auto-injects sticky footer on all inner pages
│
├── LONA.png                — Icon/symbol mark
└── LONA_full_sign.PNG      — Full wordmark logo used in nav
```

---

## Features

- **Registration flow** — sign-up form saves name and email to localStorage, redirects to profile
- **Profile page** — editable avatar (upload from device), display name, bio, and a grid of the user's stream posts
- **Social stream** — compose posts with a 300-character limit and lined textarea, like, edit, and delete posts; posts persist via `LonaPostsDB`
- **Gallery** — image grid with lightbox viewer, category filter tabs, and hover overlays
- **Artist profiles** — dedicated pages showing an artist's portfolio, services, and social posts
- **Messaging** — direct message interface between users
- **Categorized search** — nav search bar with category dropdown (Artist Name, Art Name, Services with subcategories)
- **Avatar dropdown** — nav avatar opens a menu with Profile and Log Out options
- **Mobile hamburger nav** — collapses nav links into a dropdown on screens ≤ 480px
- **Mobile search overlay** — full-screen search overlay on mobile replacing the inline search bar
- **Sticky footer** — injected automatically on all inner pages via `lona-footer.js`
- **Shared nav** — consistent navigation across all pages via `shared-nav.css`

---

## How Data Persists

All user data is stored in `localStorage` — no backend or server required.

- **`lonaProfile`** — stores name, email, avatar (base64), and bio
- **`lonaPosts`** — stores all stream posts; managed via `LonaPostsDB` in `lona-storage.js`

`lona-storage.js` also handles syncing the nav avatar across all pages automatically on load.

---

## How to Run

Just open `index.html` in a browser. No installs, no build step needed.

For best results use a local server (e.g. VS Code Live Server) so scripts and images load correctly.

---

## Credits

Built and designed by **[Your Name]**
© 2026 Lona
