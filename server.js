const express = require('express');
const app = express();
const serviceRouter =  require('./routes/services')

// setting up views-engine and router usage
app.set('view engine','ejs')
app.use('/services', serviceRouter)

// original homepage - first webpage... renders index.js
app.get('/',(req,res)=>{
    const services = [
        {
            servPro: "Amin car wash",
            owner: "Amina",
            servInfo: "wash your car with us @ an affordable cost",
            location: "accra",
            tel: "234567890"
        },
        {
            servPro: "Juwels P.",
            owner: "Portibiya",
            servInfo: "Hand made jewery",
            location: "Osu - accra",
            tel: "234-555-639"
        },
        {
            servPro: "Juwels P.",
            owner: "Poriya",
            servInfo: "Delivery services",
            location: "Ring Road - accra",
            tel: "234-487-639"
        },

    ]
    // very 1st services links to services in 'index.ejs'
    res.render('index.ejs',{services:services})
})

app.listen(4000,function(){
    console.log('port is functional..')
})