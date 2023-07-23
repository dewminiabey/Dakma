const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');

router.post('/loginS', (req, res) => res.send('Student Login Route'));

module.exports = router;
