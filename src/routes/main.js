
const express = require('express')
const router= express.Router();
const main= require('../controllers/main');

router.get("/", main.index);
router.get("/register", main.register);
router.get("/login",main.login);
 
module.exports = router;
