const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.send('<h2>blackList season 1000</h2>')
})

// router.get('/all-services',(req,res)=>{
//     res.send('<h2> All Services Page</h2>')
// })


module.exports = router;