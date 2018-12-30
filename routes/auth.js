'use strict';

var router = require('express').Router();

var config = require('../config/db-config');
var AuthController = require('../services/controllers/AuthController');
var allowOnly = require('../services/routesHelper').allowOnly;
var UserController = require('../services/controllers/UserController');
var AdminController = require('../services/controllers/AdminController');
var contentService = require('../services/get-view-content');
var testService = require('../services/test-service');
    
const customers = require('../services/customer/profile/customerprofile');
const consumerServices = require('../services/customer/consumerServices/consumerServices');
const consumerContext = require('../services/customer/consumerContext/consumerContext');

var APIRoutes = function(passport) {
    let auth = passport.authenticate('jwt', { session: false });

    router.post('/signup', AuthController.signUp);
    
    router.post('/authenticate', AuthController.authenticateUser);

    router.get('/get-view-content', contentService.getList); 
        
    // Requires Auth

    // Retrieve a single Customer by Id
    router.get('/customer/:id', auth, customers.findById);

    // Retrieve available services by Id
    router.get('/consumerServices/:id', auth, consumerServices.getServicesById);

    // Retrieve Consumer Context services by Id
    router.get('/consumerContext/:id', auth, consumerContext.getContextById);

    // Update a Customer with Id
    router.put('/customer', auth, customers.update);
    
    return router;
    
};

module.exports = APIRoutes;


//Use this to diagnose problems with Passport and JWT
// router.get('/customer/:id', function(req, res, next) {
//   passport.authenticate('jwt', function(err, user, info) {
//     if (err) { return next(err) }
//     if (!user) {
//       // *** Display message without using flash option
//       // re-render the login form with a message
//       return res.json({ message: info.message })
//     }
//     req.logIn(user, function(err) {
//       if (err) { return next(err); }
//       return res.json({user : user.username});
//     });
//   })(req, res, next)
// });