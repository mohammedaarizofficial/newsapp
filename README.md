# 📰 The Daily. — Full-Stack News Web App

🔗 **Live UI (Frontend + Backend):**  
👉 https://newsapp-eijme2vt4-mohammedaarizofficials-projects.vercel.app

---

## 📌 Project Overview

**The Daily.** is a responsive, full-stack news web application built using **React + TypeScript** with a **Node.js + Express backend**.

The application allows users to explore real-time news from across the world with features such as keyword search, category filtering, sorting, and country-based top headlines — all wrapped in a clean, readable UI inspired by modern news platforms.

To overcome NewsAPI browser restrictions and improve security, the app now uses a **backend proxy layer** that securely communicates with external APIs and controls the data sent to the frontend.

---

## 🚀 Live Preview

👉 **Frontend + Backend (Vercel):**  
https://newsapp-eijme2vt4-mohammedaarizofficials-projects.vercel.app

---

## 🧠 Tech Stack

| Layer | Technology |
|----|----|
Frontend | React (Vite) + TypeScript |
Backend | Node.js + Express |
Routing | React Router DOM |
UI Styling | Bootstrap 5 + Custom CSS |
API Handling | Backend Proxy + Fetch API |
State Management | React Hooks (useState, useEffect) |
Deployment | Vercel (Frontend + Backend) |

---

## ✨ Features

- 🔍 Search news by keyword  
- 🌍 View top headlines by country  
- 🗂 Filter news by category  
- 📊 Sort results by popularity, relevancy, or date  
- 🔐 Secure API handling via backend proxy  
- 🔗 Client-side routing  
- 📱 Fully responsive design  

---

## ⚙️ How the App Works

### Backend (New Architecture)

- A dedicated **Express backend** acts as a middle layer between the frontend and NewsAPI
- API keys are stored securely in `.env` files and never exposed to the browser
- Backend reshapes and filters data before sending it to the frontend
- Prevents CORS issues and API abuse

### Frontend

#### Search
- Users enter a keyword in the navbar
- Search state is lifted to `App.tsx`
- Backend endpoint receives query parameters and fetches filtered news

#### Top Headlines
- Displays country-specific headlines
- Frontend sends country code to backend
- Backend calls NewsAPI `top-headlines` endpoint

#### Everything Page
- Displays keyword-based results
- Supports sorting and filtering
- Backend controls final data shape

#### Data Fetching
- Frontend fetches data only from the backend
- UI updates dynamically when search, filters, or sort options change

---

## 🧪 Challenges & Learnings

### 🚧 1. CORS & API Restrictions
- NewsAPI blocks direct browser requests
- Learned why **backend proxies are essential** for production apps
- Implemented secure server-side API handling

### 🚧 2. Backend Error Handling
- Backend crashes caused frontend to hang
- Learned to always return structured error responses instead of crashing
- Implemented defensive API checks

### 🚧 3. React Router Context Errors
- Encountered `useLocation()` errors due to missing Router context
- Fixed by wrapping the app with `<BrowserRouter>`

### 🚧 4. State Management Complexity
- Coordinating search, filters, and sorting across pages
- Solved by lifting state to `App.tsx`

### 🚧 5. Monorepo Deployment
- Learned how to deploy a project with separate frontend and backend folders
- Configured correct root directory and build commands for Vercel

---

## 📁 Folder Structure (Updated)

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
