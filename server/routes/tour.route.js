const express=require('express');
const { createTour, getAllTours, updateTourById, deleteTourById } = require('../controllers/tour.controller');
const router=express.Router();

router.post('/tour',createTour);
router.get('/tour', getAllTours);
router.put('/tour/:id',updateTourById)
router.delete('/tour/:id',deleteTourById)


module.exports=router
