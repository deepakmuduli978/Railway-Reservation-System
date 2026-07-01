# 🚆 Railway Reservation System

A full-stack **Railway Reservation System** built using the **MERN Stack (MongoDB, Express.js, React.js, and Node.js)**. The application allows users to register, log in securely, search for trains, book railway tickets, view booking history, cancel reservations, and manage their profiles through a modern and responsive interface.

---

## 📌 Features

* 🔐 User Registration & Login using JWT Authentication
* 🚆 Search trains by source, destination, and journey date
* 🎫 Book railway tickets
* 💺 Select different travel classes
* 💰 Automatic fare calculation
* 📋 View booked tickets
* ❌ Cancel booked tickets
* 👤 User profile management
* 📱 Responsive UI for desktop and mobile
* ⚡ RESTful API integration
* 🗄️ MongoDB database for storing users, trains, and bookings

---

## 🛠️ Tech Stack

### Frontend

* React.js
* React Router DOM
* Axios
* HTML5
* CSS3

### Backend

* Node.js
* Express.js
* JWT Authentication
* bcrypt.js
* CORS
* dotenv

### Database

* MongoDB
* Mongoose

---

## 📂 Project Structure

```text
Railway-Reservation-System/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── assets/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── .env
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/Railway-Reservation-System.git
cd Railway-Reservation-System
```

---

### 2. Install Backend Dependencies

```bash
cd backend
npm install
```

---

### 3. Install Frontend Dependencies

```bash
cd ../frontend
npm install
```

---

### 4. Configure Environment Variables

Create a `.env` file inside the **backend** folder.

```env
PORT=5000
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

### 5. Start the Backend Server

```bash
cd backend
npm start
```

or

```bash
node server.js
```

---

### 6. Start the Frontend

```bash
cd frontend
npm run dev
```

---

## 🚀 Usage

1. Register a new account.
2. Log in using your credentials.
3. Search for available trains.
4. Select your preferred train and travel class.
5. Book your ticket.
6. View your booking history.
7. Cancel tickets when required.
8. Update your profile information.

---

## 🔐 Authentication

* JWT (JSON Web Token)
* Password encryption using bcrypt.js
* Protected routes for authenticated users

---

## 📸 Screenshots

Add screenshots of your application here.

```
Home Page

Login Page

Register Page

Search Train Page

Book Ticket Page

My Bookings

Profile Page
```

---

## 🌟 Future Enhancements

* Online payment gateway integration
* PNR status checking
* Seat availability management
* Admin dashboard
* Email ticket confirmation
* SMS notifications
* PDF ticket generation
* Live train tracking

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository.
2. Create a feature branch.

```bash
git checkout -b feature-name
```

3. Commit your changes.

```bash
git commit -m "Added new feature"
```

4. Push to GitHub.

```bash
git push origin feature-name
```

5. Open a Pull Request.

---

## 📄 License

This project is developed for educational and learning purposes.

---

## 👨‍💻 Developers

**Deepak Muduli**



---

## ⭐ Support

If you found this project useful, please give it a ⭐ on GitHub.
