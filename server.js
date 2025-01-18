const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const mysql = require('mysql');

const cors = require('cors');
const app = express();

// Enable CORS for all routes
app.use(cors());
app.options("*",cors());

app.use(cors({
  origin: 'http://127.0.0.1:5500', // Allow only this origin
  methods: ['GET', 'POST'], // Allow only specific methods
  allowedHeaders: ['Content-Type'], // Allow specific headers
}));


const PORT = 3000;

// Middleware
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'md181023',
  database: 'user_registration',
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err.message);
  } else {
    console.log("Database connected successfully!");
  }
});
    
// 1. User Signup
app.post('/signup', async (req, res) => {
  const { full_name, username, email, phone_number, password } = req.body;

  if (!full_name || !username || !email || !password) {
    return res.status(400).json({ message: 'All required fields must be provided' });
  }

  const checkUserQuery = 'SELECT * FROM users WHERE username = ? OR email = ?';
  db.query(checkUserQuery, [username, email], async (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Server error', err });
    }

    if (results.length > 0) {
      return res.status(400).json({ message: 'Username or email already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const insertUserQuery = `
      INSERT INTO users (full_name, username, email, phone_number, password)
      VALUES (?, ?, ?, ?, ?)`;

    db.query(insertUserQuery, [full_name, username, email, phone_number, hashedPassword], (err) => {
      if (err) {
        return res.status(500).json({ message: 'Error creating user', err });
      }

      res.status(201).json({ message: 'User created successfully' });
    });
  });
});

// 2. User Login
app.post('/login', (req, res) => {
  const { Email,Password} = req.body;

  if (!Email ) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  const getUserQuery = 'SELECT * FROM users WHERE email = ?';

  db.query(getUserQuery, [Email], async (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Server error', err });
    }

    if (results.length === 0) {
      return res.status(400).json({ message: 'Invalid username or password' });
    }

    const user = results[0];
    const isPasswordValid = await bcrypt.compare(Password, user.password);

    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid username or password' });
    }

    //const token = jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: '1h' });
    res.status(200).json({ message: 'Login successful' });
  });
});



// Start Server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
