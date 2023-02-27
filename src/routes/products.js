var express = require('express');
var router = express.Router();
const{products} = require("../controllers/productsController")
/* GET users listing. */
router.get('/products', products)

module.exports = router;