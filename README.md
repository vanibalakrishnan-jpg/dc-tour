# 🗝️ National Treasure DC Tour

An interactive, GPS-powered web app for touring all the famous Washington D.C. locations featured in the *National Treasure* films (2004 & 2007).

## Features

- 🗺️ **Interactive Leaflet Map** — All 10 film locations pinned on a live map
- 📍 **GPS Integration** — Your real-time location shown on the map with distance to each site
- 📜 **Rich History** — Deep historical context for every location
- 🎬 **Film Scene Details** — What happened at each spot in the movies
- 💡 **Visit Tips** — Hours, admission, insider tips for every location
- ✅ **Visit Tracker** — Mark sites as visited, progress bar tracks your journey
- ⌨️ **Keyboard Navigation** — Arrow keys to browse, Escape to close
- 💾 **Persistent Progress** — Your visited sites are saved across sessions

## Sites Covered

1. National Archives *(Declaration of Independence heist)*
2. Lincoln Memorial *(shadow map clue)*
3. Washington Monument *(obelisk solar alignment)*
4. Library of Congress *(Freemason research)*
5. U.S. Capitol Building *(Masonic cornerstone)*
6. Independence Hall origin *(the Gates family legend)*
7. National Mall *(the treasure trail axis)*
8. Smithsonian American History Museum *(America's attic)*
9. White House *(Book of Secrets)*
10. George Washington Masonic Memorial *(the secret society)*

## How to Use

Just open `index.html` in any modern web browser — no build step, no server needed.

For the best experience:
- Allow GPS/location access when prompted
- Visit sites in order (they roughly follow the Mall's layout)
- Tap each card or map marker to explore history
- Mark sites as visited as you tour!

## Tech Stack

- Vanilla HTML, CSS, JavaScript
- [Leaflet.js](https://leafletjs.com/) for mapping
- OpenStreetMap tiles (free, no API key needed)
- Google Fonts (Cinzel + Crimson Pro)
- Browser Geolocation API for GPS
- LocalStorage for visit persistence

## Deployment

This is a static site — deploy for free on:
- **GitHub Pages**: Enable in repo Settings → Pages → main branch
- **Netlify**: Drag & drop the folder
- **Vercel**: `vercel --prod`

---

*"Someone has to go first."* — Benjamin Franklin Gates
