const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./utils/db');
const cookieParser = require('cookie-parser');

dotenv.config();
const app = express();

const PORT = process.env.PORT || 8000;

connectDB();

// app.use(cors());
app.use(express.json({limit:"50mb"}));
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.use('/api/auth', require('./routes/auth'));
app.use('/api/users', require('./routes/users'));
app.use('/api/admin', require('./routes/admin'));

app.listen(PORT, () => {
    console.log('Server is running on port 8000');
})
