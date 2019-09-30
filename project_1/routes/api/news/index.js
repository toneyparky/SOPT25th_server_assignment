var express = require('express');
var router = express.Router();

/* GET home page. */

console.log('trace: /api/news/index.js');
/* GET home page. */
router.get('/', (req, res)=>{
    res.status(200).send({ 
        message: "this is /api/news/"
    })
})



router.use('/like', require('./like'));

module.exports = router;
