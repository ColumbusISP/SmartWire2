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

var APIRoutes = function(passport) {
    let auth = passport.authenticate('jwt', { session: false });

    router.get('/profile', passport.authenticate('jwt', { session: false }), allowOnly(config.accessLevels.user, UserController.index));

    router.post('/signup', AuthController.signUp);
    
    router.post('/authenticate', AuthController.authenticateUser);

    router.get('/get-view-content', contentService.getList); 
    
    // Retrieve all Customer
    router.get('/customer', customers.findAll);
   
    // Retrieve a single Customer by Id
    router.get('/customer/:id', auth, customers.findById);
    //router.get('/profile', passport.authenticate('jwt', { session: false }), allowOnly(config.accessLevels.user, UserController.index));

    // Update a Customer with Id
    router.put('/customer', customers.update);

    router.get('/api/test-service', function(req, res, next) {
        var vTitle = testService.title,
          vDesc = testService.description;
        res.send('results of test-service, title:' + vTitle + ' and desc:' + vDesc);
      
      });
    
    return router;
    
};

module.exports = APIRoutes;

//Use this to diagnose problems with Passport and JWT
    // router.get('/customer/:id', function(req, res, next) {
    //     passport.authenticate('jwt', function(err, user, info) {
    //       if (err) { return next(err) }
    //       if (!user) {
    //         // *** Display message without using flash option
    //         // re-render the login form with a message
    //         return res.json({ message: info.message })
    //       }
    //       req.logIn(user, function(err) {
    //         if (err) { return next(err); }
    //         return res.json({user : user.username});
    //       });
    //     })(req, res, next)
    //   });
