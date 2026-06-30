require('dotenv').config();
const cors = require('cors');
const express = require('express');
const app = express();
const router = express.Router();


// Middleware to parse JSON
app.use(cors());
app.use(express.json());

// Database Connection
require('./config/db');
// Routes
const webRoutes = require('./routes/TrainRoutes');
const webRoutes1 = require('./routes/authRoutes');
const userRoutes = require("./routes/userRoutes");
const trainRoutes = require("./routes/TrainRoutes");
const bookRoutes = require("./routes/bookingRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");

//Use Routes
app.use('/', webRoutes);
app.use('/api/auth',webRoutes1);
app.use('/api/user',userRoutes);
app.use('/api/train',trainRoutes);
app.use('/api/booking',bookRoutes);
app.use('/api/dashboard',dashboardRoutes);




console.log("Control reached here");


// Server Port
const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});