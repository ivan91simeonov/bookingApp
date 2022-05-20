import express from 'express';
import Hotel from '../models/Hotel.js';
import { createHotel , updateHotel , deleteHotel , getHotel , getAllHotels} from '../controllers/hotel.js';

const router = express.Router();

router.post('/', createHotel);

router.put('/:id', updateHotel);

router.delete('/:id',deleteHotel );

router.get('/:id', getHotel );

router.get('/', getAllHotels);



export default router;
