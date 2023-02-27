var express = require('express');
var router = express.Router();
const {index, about,notEntry, admin} = require("../controllers/indexController")
const accessAdmin= require('../middlewares/accesAdmin');
 /* GET home page. */
router.get('/index', index)
router.get('/admin', accessAdmin, admin)
router.get('/notEntry', notEntry)

module.exports = router;
