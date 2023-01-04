const express = require('express');

const path = require('path');

const rootDir = require('../url/path');

const router = express.Router();

//  /admin/add-product => GET
router.get('/add-product', (req,res, next)=> {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    // res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html')); // we can replave ../ with .. 
});

//  /admin/product => POST . we can also use same path in different methods. 
router.post('/add-product', (req,res, next)=> {
    console.log(req.body);
    res.redirect('/shop');
});


// router.post('/Contactus', (req,res, next)=> {
//     //console.log(req.body);
//     res.redirect(path.join(__dirname, 'views', 'success'));
// });


module.exports = router;