# Blog Platform (MERN Stack)

A simple personal blog platform built with **MongoDB, Express.js, React.js, Node.js**, and **Vite** frontend.  
It supports **full CRUD** (Create, Read, Update, Delete) operations for blog posts.

---

## 🚀 Features
- Add, view, edit, and delete blog posts
- MongoDB database for data storage
- RESTful API built with Express.js & Node.js
- React frontend with Vite
- Styled using CSS Modules
- Environment-based API URLs (.env)
- Fully responsive UI

---

## 🛠 Tech Stack
### **Frontend**
- React (Vite)
- React Router
- CSS Modules

### **Backend**
- Node.js
- Express.js
- MongoDB (Mongoose)
- CORS enabled

---

## 📂 Project Structure
```
project-root/
│── backend/          # Express.js + MongoDB backend
│   ├── models/       # Mongoose schemas
│   ├── routes/       # API routes
│   ├── server.js     # Backend entry point
│   └── package.json
│
│── frontend/         # Vite + React frontend
│   ├── src/
│   │   ├── pages/    # React pages (Home, AddPost, EditPost)
│   │   ├── components/ # UI components
│   │   ├── App.jsx   # Main app file
│   │   └── main.jsx
│   ├── package.json
│   ├── .env.development
│   └── .env.production
│
└── README.md
```

---

## ⚙️ Installation

### **1️⃣ Clone the repository**
```bash
git clone https://github.com/moinshaikh03/01_Blog_Website.git
cd 01_Blog_Website
```

### **2️⃣ Setup Backend**
```bash
cd blog-backend
npm install
```
Create `.env` file inside backend folder:
```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```
Run backend:
```bash
npm start
```

### **3️⃣ Setup Frontend**
```bash
cd ../frontend
npm install
```
Create `.env.development` file:
```
VITE_API_URL=http://localhost:5000
```
Create `.env.production` file:
```
VITE_API_URL=https://your-backend-on-render.com
```
Run frontend:
```bash
npm run dev
```

---

## 🌍 Deployment
### **Backend** (Render)
- Push backend to GitHub
- Create new Web Service on Render
- Set Root Directory to `backend` if needed
- Build Command: `npm install`
- Start Command: `npm start`
- Add `MONGO_URI` in Render environment variables

### **Frontend** (Vercel/Netlify)
- Push frontend to GitHub
- Import to Vercel/Netlify
- Add `VITE_API_URL` as environment variable

---

## 📌 API Endpoints
| Method | Endpoint       | Description         |
|--------|---------------|---------------------|
| GET    | /api/posts     | Get all posts       |
| GET    | /api/posts/:id | Get single post     |
| POST   | /api/posts     | Create a post       |
| PUT    | /api/posts/:id | Update a post       |
| DELETE | /api/posts/:id | Delete a post       |

