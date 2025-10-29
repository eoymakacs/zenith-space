# 🪐 Zenith Space

An interactive web application built with **Angular**, **Vite**, and **Builder.io** — designed for fast rendering, modular architecture, and a smooth developer experience.  
This project leverages **Builder.io**’s visual page builder and integrates it with Angular’s strong component system and Express for server-side rendering (SSR).

---

## 🚀 Tech Stack

| Layer | Technology | Description |
|-------|-------------|-------------|
| **Frontend** | [Angular](https://angular.dev/) | Component-based web framework for scalable applications. |
| **UI Builder** | [Builder.io](https://www.builder.io/) | Visual CMS and page builder with headless API and Angular SDK. |
| **Bundler / Dev Server** | [Vite](https://vitejs.dev/) | Lightning-fast dev server and build tool for modern frontends. |
| **Server / SSR** | [Node.js](https://nodejs.org/) + [Express](https://expressjs.com/) | Provides server-side rendering and dynamic route handling. |
| **Routing** | Angular Router / Express Router | Handles both client-side and server-side navigation. |
| **Styling** | TailwindCSS / SCSS | Responsive, utility-first design system (or component-scoped styles). |
| **Deployment** | Vercel / Netlify / Custom Node Server | Supports both static hosting and SSR deployments. |

---

## 📂 Project Structure

```plaintext
zenith-space/
├── src/
│   ├── app/                 # Angular application source code
│   ├── assets/              # Static assets
│   └── index.html           # Main HTML entry served by Express
├── dist/
│   └── server/              # Server build output (node-build.mjs, etc.)
├── server/                  # Express server source (if applicable)
├── package.json             # Scripts & dependencies
├── vite.config.ts           # Vite configuration
├── tsconfig.json            # TypeScript configuration
└── README.md
```

---

## ⚙️ Scripts

| Command | Description |
|----------|-------------|
| `npm run dev` | Run the app in development mode with hot reload (Vite). |
| `npm run build` | Build both client and server bundles for production. |
| `npm run build:client` | Build only the client-side bundle (Vite). |
| `npm run build:server` | Build only the server-side bundle. |
| `npm start` | Start the production server (`dist/server/node-build.mjs`). |

---

## 🧩 Features

- ⚡ **Fast builds** with Vite’s HMR and optimized dev server.  
- 🧱 **Visual editing** powered by Builder.io for drag-and-drop UI creation.  
- 🧭 **Client and server routing** for SEO-friendly single-page experience.  
- 🪶 **Lightweight architecture** with clean separation of client/server logic.  
- 🌍 **Deployable anywhere** — works with Node, Vercel, or Netlify.  
- 📱 **Responsive layout** designed with TailwindCSS or SCSS.  

---

## 🧠 Builder.io Integration Example

You can dynamically render Builder.io pages inside Angular components:

```ts
import { Component } from '@angular/core';
import { BuilderComponent } from '@builder.io/angular';

@Component({
  selector: 'app-root',
  template: `
    <builder-component model="page" apiKey="YOUR_API_KEY"></builder-component>
  `
})
export class AppComponent {}
```

## 🧪 Development Notes

- **1. Builder.io Sync:** Update content or layout visually at [Builder.io](https://builder.io) and sync your latest changes.
- **2. Vite Environment Variables:** Place environment configuration in a `.env` file (e.g., API keys, base URLs).
- **3. Static Assets:** Place global assets in `/src/assets` for client delivery.
- **4. SSR Build Output:** The production build outputs to `dist/server/node-build.mjs`.

## 🌐 Deployment

### Static Hosting (Vite build only)
Build the client bundle:

```bash
npm run build:client
```
Upload /dist/client to Netlify or Vercel.

### SSR Deployment:
```bash
npm run build
npm start
```

Deploy on Node.js hosting (Render, Railway, or custom VM).

## 💡 Future Improvements

- Add CI/CD workflow via **GitHub Actions**
- Integrate API endpoints for dynamic data
- Add end-to-end tests using **Cypress** or **Playwright**
- Configure **Builder.io** Webhooks for automatic deployments





