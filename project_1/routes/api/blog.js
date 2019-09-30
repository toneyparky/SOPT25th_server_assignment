var express = require('express');
var router = express.Router();

console.log('trace: /api/blog.js');
/* GET home page. */
router.get('/', (req, res)=>{
    res.status(200).send({ 
        message: "this is /api/blog"
    })
})
module.exports = router;
