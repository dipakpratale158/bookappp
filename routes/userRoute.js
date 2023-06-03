const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/getUsers', userController.getUsers);
router.get('/deleteUser', userController.deleteUser);
router.post('/updateUser', userController.updateUser);
router.post('/users/createUser', userController.createUser);
router.get('/', userController.getAppointmentPage);

module.exports = router;