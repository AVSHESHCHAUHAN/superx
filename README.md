# 🎓 Student Information Management System (SuperX)

A full-stack **cloud-based web application** to manage student data including login, attendance, academic records, fees, and more.

The system is built using **HTML, CSS, JavaScript, Node.js, Express, and MongoDB Atlas**, and deployed using modern cloud platforms.

---

# 🚀 Features

### 🔹 Functional Features

* 👨‍🎓 Student Login System
* 👤 Personal Details
* 📅 Attendance Tracking
* 📚 Course Management
* 💳 Fee Management
* 🧾 Academic Records
* 👨‍🏫 Faculty Information
* 📊 Admin Dashboard

### 🔹 Technical Features

* 🔐 REST API with Node.js & Express
* 🌐 JSON-based data communication
* 🔄 CRUD operations (Create, Read, Update, Delete)
* 🔑 Secure environment variables

### 🔹 Cloud Features

* ☁️ Frontend hosted on Vercel
* ☁️ Backend deployed on Render
* ☁️ Database managed via MongoDB Atlas
* 🌍 Accessible from anywhere via internet

---

# 🛠️ Tech Stack

### 💻 Frontend

* HTML5
* CSS3
* JavaScript

### ⚙️ Backend

* Node.js
* Express.js

### 🗄️ Database

* MongoDB Atlas

---

# 📁 Project Structure

```
superx/
│
├── frontend/
│   ├── index.html
│   ├── student-login.html
│   ├── admin-login.html
│   ├── student-dashboard.html
│   ├── admin-dashboard.html
│   ├── student.css
│   ├── admin.css
│   ├── student.js
│   └── admin.js
│
├── server.js
├── package.json
├── package-lock.json
└── README.md
```

---

# ⚙️ Installation & Setup

## 1️⃣ Clone the repository

```
git clone https://github.com/your-username/superx.git
cd superx
```

---

## 2️⃣ Install dependencies

```
npm install
```

---

## 3️⃣ Setup environment variables

Create a `.env` file in the root directory:

```
MONGO_URL=your_mongodb_connection_string
PORT=8080
```

---

## 4️⃣ Run the server

```
npm start
```

Server will run on:

```
http://localhost:8080
```

---

# 🌐 Deployment

## 🔹 Backend (Render)

* Push code to GitHub
* Create new Web Service on Render
* Add environment variable:

```
MONGO_URL=your_mongodb_url
```

* Start command:

```
node server.js
```

* Deploy 🚀

---

## 🔹 Frontend (Vercel)

* Connect GitHub repo to Vercel
* Set **Root Directory = frontend**
* Deploy

---

## 🔗 Cloud Architecture

```
User → Vercel (Frontend)
     → Render (Backend API)
     → MongoDB Atlas (Database)
```

---

# 🔐 Environment Variables

| Variable  | Description                     |
| --------- | ------------------------------- |
| MONGO_URL | MongoDB Atlas connection string |
| PORT      | Server port                     |

---

# ⚠️ Important Notes

* Do NOT upload `.env` file to GitHub
* Always use environment variables for sensitive data
* Ensure MongoDB Atlas allows network access

---

# 👨‍💻 Author

**Avshesh Chauhan**
GitHub: https://github.com/AVSHESHCHAUHAN

---

# ⭐ Support

If you like this project, give it a ⭐ on GitHub!


---


## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
