# 🛡️ CertifyPro - Online Certificate Verification System

CertifyPro is a full-stack MERN web application that enables institutions to issue, manage, and verify digital certificates securely. The platform helps reduce certificate forgery by providing unique Certificate IDs and an online verification system.

---

## 🚀 Features

- 🎓 Issue Digital Certificates
- 🔍 Verify Certificates using Certificate ID
- 📋 Admin Dashboard
- ✏️ Update Certificate Details
- 🗑️ Delete Certificates
- 📱 Responsive User Interface
- 🎨 Modern UI built with Tailwind CSS
- ⚡ Smooth Animations using AOS
- ☁️ MongoDB Atlas Database
- 🔗 RESTful API Integration with Axios

---

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router DOM
- Tailwind CSS
- Axios
- AOS (Animate On Scroll)

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas
- Mongoose

### Version Control
- Git
- GitHub

---

## 📂 Project Structure

```
CertifyPro/
│
├── client/
│   ├── src/
│   │   ├── assets/
│   │   ├── api/
│   │   ├── components/
│   │   ├── layouts/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/10zn-g-T/CertifyPro.git
```

### Go to Project Folder

```bash
cd CertifyPro
```

---

## Frontend Setup

```bash
cd client
npm install
npm run dev
```

Runs on

```
http://localhost:5173
```

---

## Backend Setup

```bash
cd server
npm install
npm run dev
```

Runs on

```
http://localhost:5000
```

---

## Environment Variables

Create a `.env` file inside the server folder.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

---

## API Endpoints

### Get All Certificates

```
GET /api/certificates
```

### Get Certificate by ID

```
GET /api/certificates/:id
```

### Create Certificate

```
POST /api/certificates
```

### Update Certificate

```
PUT /api/certificates/:id
```

### Delete Certificate

```
DELETE /api/certificates/:id
```

---

## Future Improvements

- QR Code Verification
- PDF Certificate Download
- Email Notification
- JWT Authentication
- Role-based Access Control
- Certificate Analytics
- Search & Filters
- Dark Mode

---

## Learning Outcomes

Through this project I learned:

- React Component Architecture
- React Router
- State Management using Hooks
- REST API Integration
- CRUD Operations
- MongoDB Atlas
- Express.js APIs
- Axios
- Tailwind CSS
- Git & GitHub Workflow

---

## Author

**Tenzing Tamang**

B.Tech Computer Science & Engineering

GitHub:
https://github.com/10zn-g-T

---

## License

This project is developed for educational purposes.
