const express = require('express');

const router = express.Router();

//  /admin/add-product => GET
router.get('/add-product', (req,res, next)=> {
    res.send(
        '<form action="/admin/product" method="POST"><input type="text" name="title"><input type="number" name="size"><button type="submit"> Add Product </buttom></form>');
});

//  /admin/product => POST . we can also use same path in different methods. 
router.post('/product', (req,res, next)=> {
    console.log(req.body);
    res.redirect('/shop/');
});

module.exports = router;