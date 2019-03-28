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
    router.get('/consumerServices', auth, consumerServices.getServicesById);

    // Retrieve Consumer Context services by Id
    router.get('/consumerContext/:id', auth, consumerContext.getContextById);

    // Update a Customer with Id
    router.put('/customer', auth, customers.update);
    
    return router;
    
};

module.exports = APIRoutes;
