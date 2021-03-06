import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser'
import mongoose from 'mongoose';
import authRoute from './routes/auth.js';
import usersRoute from './routes/users.js';
import hotelsRoute from './routes/hotels.js';
import roomsRoute from './routes/rooms.js';

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log('Connected to mongoDB');
  } catch (error) {
    throw error;
  }
};

app.use(cookieParser())
app.use(express.json());

app.use('/auth', authRoute);
app.use('/users', usersRoute);
app.use('/hotels', hotelsRoute);
app.use('/rooms', roomsRoute);

app.use((err ,req , res , next) => {

  const errorStatus = err.status || 500
  const errorMessage = err.message || 'Something went wrong!'

  return res.status(errorStatus).json(errorMessage)
})

app.listen(5000, () => {
  connect();
  console.log('Connected to beck');
});
