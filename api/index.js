import express from 'express';
import dotenv from 'dotenv';
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

app.use('/auth', authRoute);
app.use('/users', usersRoute);
app.use('/hotels', hotelsRoute);
app.use('/rooms', roomsRoute);

app.listen(5000, () => {
  connect();
  console.log('Connected to beck');
});