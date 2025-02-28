const express = require('express');
const router = express.Router();
const adminController = require('../app/controllers/AdminController');

router.get('/dashboard', adminController.dashboard);
router.get('/event', adminController.event);
router.post('/event/add-event', adminController.addEvent);
router.delete('/event/:id', adminController.delEvent);
router.put('/event/:id', adminController.updateEvent);

module.exports = router;
