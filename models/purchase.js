// The Customer Profile model.
'use strict'; 

var Sequelize = require('sequelize');

var db = require('../services/database');

// 1: The model schema.
var profileModelDefinition = {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    ServiceID: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    ServicePrice: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    PurchaseTime: {
        type: Sequelize.TIME,
        unique: true,
        allowNull: false
    }

};

// 3: Define the User model.
var ProfileModel = db.define('ConsumerServicePurchases', profileModelDefinition);

module.exports = ProfileModel;