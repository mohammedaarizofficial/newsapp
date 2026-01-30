# 📰 Everyday Paper — News Web App

🔗 **Live Demo:** https://everydaypaper.netlify.app

---

## 📌 Project Overview

**Everyday Paper** is a responsive news web application built using **React + TypeScript** that allows users to explore real-time news from across the world.

The app integrates with **NewsAPI** and provides features such as keyword search, category filtering, sorting, and country-based top headlines — all wrapped in a clean, readable UI inspired by modern news platforms.

---

## 🚀 Live Preview

👉 https://everydaypaper.netlify.app

---

## 🧠 Tech Stack

| Layer | Technology |
|------|------------|
| Frontend | React (Vite) + TypeScript |
| Routing | React Router DOM |
| UI Styling | Bootstrap 5 + Custom CSS |
| API Handling | Fetch API |
| State Management | React Hooks (`useState`, `useEffect`) |
| Deployment | Netlify |

---

## ✨ Features

- 🔍 Search news by keyword
- 🌍 View top headlines by country
- 🗂 Filter news by category
- 📊 Sort results by popularity, relevancy, or date
- 🔗 Client-side routing
- 📱 Fully responsive design

---

## ⚙️ How the App Works

1. **Search**
   - Users enter a keyword in the navbar search
   - The query is lifted to the parent component and used in API requests

2. **Top Headlines**
   - Displays country-specific headlines
   - Uses NewsAPI `top-headlines` endpoint

3. **Everything Page**
   - Shows keyword-based news results
   - Users can filter by category and sort results

4. **Data Fetching**
   - API requests are triggered via `useEffect`
   - UI updates dynamically when query, filters, or sort options change

---

## 🧪 Challenges & Learnings

### 🚧 1. CORS & API Restrictions
- NewsAPI blocks direct browser requests
- Public proxies like `allorigins` were unreliable
- Learned why backend proxies are important for production apps

### 🚧 2. React Router Context Errors
- Encountered `useLocation()` errors due to missing Router context
- Fixed by wrapping the app with `<BrowserRouter>`

### 🚧 3. jQuery vs React DOM
- Mixing jQuery dropdowns with React caused state conflicts
- Learned to rely on React state instead of DOM manipulation

### 🚧 4. State Management Complexity
- Coordinating search, filters, and sort across components
- Solved by lifting state to `App.tsx` and passing handlers as props

### 🚧 5. Conditional UI Rendering
- Filter and sort components only needed on specific routes
- Implemented route-based conditional rendering using `useLocation`

---

## 📁 Folder Structure

```text
src/
├── components/
│   ├── Navbar.tsx
│   ├── Filter.tsx
│   ├── Sortby.tsx
│   └── Footer.tsx
├── pages/
│   ├── Topheadlines.tsx
│   └── Everything.tsx
├── data/
│   ├── news.ts
│   └── everything.ts
├── App.tsx
├── main.tsx
├── App.css
└── vite.config.ts
