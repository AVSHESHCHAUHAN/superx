# 🎓 Student Information Management System

A full-stack web application to manage student data including login, attendance, academic records, fees, and more. Built using HTML, CSS, JavaScript, Node.js, Express, and MongoDB.

---

## 🚀 Features

* 👨‍🎓 Student Login System
* 👤 Personal Details
* 📅 Attendance Tracking
* 📚 Course Management
* 💳 Fee Management
* 🧾 Academic Records
* 👨‍🏫 Faculty Information
* 📊 Admin Dashboard
* 🔐 Backend API with MongoDB

---

## 🛠️ Tech Stack

### Frontend

* HTML5
* CSS3
* JavaScript

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas

---

## 📁 Project Structure

```
project-root/
│
├── frontend/
│   ├── index.html
│   ├── student-login.html
│   ├── student-dashboard.html
│   ├── attendance.html
│   ├── courses.html
│   ├── fees.html
│   ├── faculty.html
│   ├── academic-records.html
│   └── student.css
│
├── backend/
│   ├── server.js
│   ├── package.json
│   └── .env
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```
git clone https://github.com/your-username/student-management-system.git
cd student-management-system/backend
```

---

### 2️⃣ Install dependencies

```
npm install
```

---

### 3️⃣ Setup environment variables

Create a `.env` file inside the `backend` folder:

```
MONGO_URI=your_mongodb_connection_string
PORT=8080
```

---

### 4️⃣ Run the server

```
npm start
```

Server will run on:

```
http://localhost:8080
```

---

## 🌐 Deployment

### Backend (Railway)

1. Push backend to GitHub
2. Connect repository to Railway
3. Add environment variable:

```
MONGO_URI=your_mongodb_url
```

4. Deploy 🚀

---

### Frontend

You can deploy frontend using:

* GitHub Pages
* Netlify
* Vercel

---

## 🔐 Environment Variables

| Variable  | Description                     |
| --------- | ------------------------------- |
| MONGO_URI | MongoDB Atlas connection string |
| PORT      | Server port (auto on Railway)   |

---

## ⚠️ Important Notes

* Do NOT upload `.env` file to GitHub
* Always use environment variables for sensitive data

---

## 👨‍💻 Author

Your Name
GitHub: https://github.com/your-username

---


## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
