# Globae Lens — Video Archive

A responsive, static React + Vite mobile videography portfolio. Browse 50 editable sample projects, filter the complete archive, open an individual shareable video page, and customize the About page. Contact options appear before the footer on every page, with a floating WhatsApp shortcut. There is no backend, database, authentication, or paid API.

## Run locally

```sh
npm install
npm run dev
```

Create the production files in `dist/` with `npm run build`. Run the built site locally with `npm run preview`.

## Customize the project

- **Videos:** Edit the 50 clearly marked sample records and category-specific thumbnail photos in `src/data/videos.js`. Archive thumbnails feature Nigerian weddings, fashion, festivals, markets, and everyday life. Each photo displays a photographer and license credit linked to its Wikimedia Commons source. The records also have `id`, `title`, `description`, `category`, `videoUrl`, `embedUrl`, `date`, `duration`, `featured`, and location fields. Set `videoUrl` to your own direct, browser-accessible video file URL (for example an MP4 hosted on your own static host) to enable native playback, or set `embedUrl` to a provider-approved embed URL for an externally hosted video.
- **Categories:** Edit `src/data/categories.js` to rename, add, or remove categories. Update the matching category values in `videos.js` so archive filters and category cards stay in sync.
- **Owner and contact details:** Update `src/config/siteConfig.js` with your name, biography, profile image, email, phone number, WhatsApp number, location, and social profile URLs. Phone numbers should include the international country code. WhatsApp links are generated in the required `https://wa.me/COUNTRYCODENUMBER` format. Contact links stay inactive until real details are provided.
- **Brand:** Change `brandName` and `brandTagline` in the same configuration file.
- **Appearance:** Use the navigation theme control to switch between light and dark mode. The selected theme is saved in this browser.

All 50 film entries and biography/contact details currently use demonstration or editable placeholder content. Replace them and use images and video files you have permission to publish.

## Pages and sharing

- `#/` — Home and featured sample projects
- `#/archive` — Complete searchable, filterable, sortable archive
- `#/about` — Owner profile and biography
- Contact options — Available before the footer on every page
- `#/watch/1` — An individual film page; every video record has its own URL

This project uses React Router's hash routing. Film links can be refreshed or shared on GitHub Pages, Netlify, Vercel, or another static host without server-side route rewrites. The native share menu is used where supported; otherwise, the film URL is copied to the clipboard.

## Deploy

Run `npm run build` and publish the generated `dist/` directory:

- **GitHub Pages:** Enable Pages for the repository and publish the Vite build output using GitHub Actions. The relative Vite asset base and hash routes support repository subpaths and direct film links.
- **Netlify:** Set the build command to `npm run build` and the publish directory to `dist`.
- **Vercel:** Import the project with the Vite framework preset, build command `npm run build`, and output directory `dist`.

Video files are loaded only on their individual film page; thumbnails are lazy-loaded in the archive.
