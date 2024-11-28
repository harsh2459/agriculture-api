var express = require('express');
var router = express.Router();
var admin = require('../controller/admincontroller')
var user = require('../controller/userconroller')
var item = require('../controller/itemcontroller')
var categary = require('../controller/categryconttoller')

/* admin */
router.post('/add_admin', admin.add_admin);
router.post('/admin_login', admin.admin_login);
router.get('/admin_logout', admin.admin_logout);
router.get('/admin_show', admin.show_admin);
router.post('/update_admin/:id', admin.update_admin);
router.get('/delete_admin/:id', admin.delete_admin);

// user
router.post('/add_user', user.add_user);
router.post('/user_login', user.user_login);
router.get('/user_logout', user.user_logout);
router.get('/user_show',  user.show_user);
router.post('/update_user/:id', user.update_user);
router.get('/delete_user/:id', user.delete_user);


//item
router.post('/add_item', item.add_item);
router.post('/update_item/:id', item.update_item);
router.get('/delete_item/:id', item.delete_item);
router.get('/show_item', item.show_item);




//categary
router.post('/add_categary', categary.add_categary);
router.post('/update_categary/:id', categary.update_categary);
router.get('/delete_categary/:id', categary.delete_categary);
router.get('/show_categary', categary.show_categary);


//cart
router.post('/add_tocart', user.addto_cart);
router.get('/view_cart/:id', user.view_cart);
router.post('/update_cart/:id', user.update_cart);
router.get('/delete_cart/:id', user.delete_cart);



//payment
router.get('/payment_req/:id', user.payment);





module.exports = router;
