import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/dbconnection.js';
import authRouter from './routes/auth.routes.js';
dotenv.config();

const app = express();
const PORT = 8000;

//connect to database
connectDB();

//middleware
app.use(express.json());
app.use('/api/auth', authRouter);

//routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

//start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


