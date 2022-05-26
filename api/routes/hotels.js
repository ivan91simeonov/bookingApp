import express from 'express';
import Hotel from '../models/Hotel.js';
import {
  createHotel,
  updateHotel,
  deleteHotel,
  getHotel,
  getAllHotels,
} from '../controllers/hotel.js';
import {verifyAdmin , verifyUser , verifyToken} from '../utils/verifyToken.js'

const router = express.Router();

router.post('/', verifyAdmin ,createHotel);

router.put('/:id',verifyAdmin ,updateHotel);

router.delete('/:id',verifyAdmin ,deleteHotel);

router.get('/:id', getHotel);

router.get('/', getAllHotels);

export default router;
