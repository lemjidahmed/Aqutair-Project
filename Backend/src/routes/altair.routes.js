const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController')

/* POST  */
router.post('/addUser', userController.add);

module.exports = router;