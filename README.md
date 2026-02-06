# 📰 The Daily. — Full-Stack News Web App

🔗 **Live Application (Frontend + Backend):**  
👉 https://newsapp-three-zeta.vercel.app

---

## 📌 Project Overview

**The Daily.** is a responsive, full-stack news web application built using **React + TypeScript** with a **Node.js + Express backend**.

The app allows users to explore real-time news from across the world with features such as keyword search, category filtering, sorting, and country-based top headlines — all presented in a clean, modern UI inspired by professional news platforms.

To overcome browser restrictions, improve security, and reduce unnecessary API usage, the application uses a **backend proxy layer with intelligent caching**, ensuring efficient and controlled access to external news APIs.

---

## 🚀 Live Preview

👉 **Frontend + Backend (Vercel):**  
https://newsapp-three-zeta.vercel.app

---

## 🧠 Tech Stack

| Layer | Technology |
|----|----|
| Frontend | React (Vite) + TypeScript |
| Backend | Node.js + Express |
| Routing | React Router DOM |
| UI Styling | Bootstrap 5 + Custom CSS + TailwindCSS |
| API Handling | Backend Proxy + Fetch API |
| State Management | React Hooks (useState, useEffect) |
| Performance | In-memory caching |
| Deployment | Vercel (Monorepo – Frontend + Backend) |

---

## ✨ Features

- 🔍 Search news by keyword  
- 🌍 View top headlines by country  
- 🗂 Filter news by category  
- 📊 Sort results by popularity, relevancy, or publish date  
- ⚡ Intelligent caching to reduce redundant API calls  
- 🔐 Secure API handling via backend proxy  
- 🔗 Client-side routing with React Router  
- 📱 Fully responsive design  

---

## ⚙️ How the App Works

### 🖥 Backend (Proxy + Cache Architecture)

- A dedicated **Express backend** acts as a middle layer between the frontend and NewsAPI
- API keys are stored securely using environment variables and are never exposed to the browser
- The backend:
  - Forwards requests to NewsAPI
  - Normalizes and filters responses
  - Caches results in memory to avoid duplicate API calls
- This architecture:
  - Prevents CORS issues
  - Protects API keys
  - Reduces NewsAPI quota usage
  - Improves performance for repeat requests

---

### ⚡ Backend Caching Strategy

To avoid wasting limited NewsAPI requests:

- Requests are cached using a **composite cache key**
- Cache keys include:
  - Search keyword
  - Sort option
  - Page context (e.g., top headlines vs everything)
- Identical requests reuse cached responses instead of triggering new API calls

Example cache behavior:
- Searching `apple` with `publishedAt` → API call made once
- Searching `apple` again with the same sort → served from cache
- Changing sort option → new cache entry created

This ensures:
- Faster UI updates
- Fewer unnecessary network requests
- Better API quota management

---

### 🧩 Frontend Flow

#### 🔍 Search
- Users type a keyword in the navbar
- Search state is lifted to `App.tsx`
- Requests are sent to the backend only when necessary

#### 📰 Top Headlines
- Displays country-specific headlines
- Frontend sends country code to backend
- Backend fetches data from NewsAPI `top-headlines`

#### 📄 Everything Page
- Displays keyword-based results
- Supports sorting and filtering
- Backend controls final response shape

#### 🔄 Data Fetching
- Frontend communicates **only with the backend**
- No direct external API calls from the browser
- UI updates automatically when search, filters, or sorting change

---

## 🧪 Challenges & Learnings

### 🚧 1. CORS & Browser API Restrictions
- NewsAPI blocks direct browser requests
- Learned why **backend proxies are essential** for production apps
- Implemented a secure server-side API layer

### 🚧 2. Reducing Unnecessary API Calls
- Faced strict API request limits
- Implemented in-memory caching to reuse identical responses
- Learned how caching keys must include all query-affecting parameters

### 🚧 3. Backend Error Handling
- Backend crashes caused frontend hangs
- Learned to always return structured error responses
- Added defensive checks for failed API calls

### 🚧 4. React Router Context Issues
- Encountered `useLocation()` errors due to missing Router context
- Fixed by correctly wrapping the app in `<BrowserRouter>`

### 🚧 5. State Management Complexity
- Coordinating search, filters, and sorting across pages
- Solved by lifting shared state to `App.tsx`

### 🚧 6. Monorepo Deployment on Vercel
- Deployed frontend and backend from a single repository
- Configured correct root directories and build commands
- Learned production-ready deployment workflows

---

## 📁 Folder Structure

```text
newsapp/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Filter.tsx
│   │   │   ├── Sortby.tsx
│   │   │   └── Footer.tsx
│   │   ├── pages/
│   │   │   ├── Topheadlines.tsx
│   │   │   └── Everything.tsx
│   │   ├── data/
│   │   │   ├── news.ts
│   │   │   └── everything.ts
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── vite.config.ts
│   └── package.json
├── backend/
│   ├── src/
│   │   ├── routes/
│   │   ├── controllers/
│   │   └── server.js
│   ├── .env
│   └── package.json
└── README.md
