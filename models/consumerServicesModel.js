// The Customer Profile model.
'use strict'; 

var Sequelize = require('sequelize');

var config = require('../config/db-config');
var db = require('../services/database');

// var ConsumerServiceModel = sequelize.query("SELECT * FROM `vwConsumerServices`", { type: sequelize.QueryTypes.SELECT})
//   .then(consumerServices => { return consumerServices;
//   })

var ConsumerServiceModel = db.query("SELECT * FROM \"vwConsumerServices\"", { type:Sequelize.QueryTypes.SELECT})
   .then(function(consumerServices) {
      return consumerServices
  })  
// var ConsumerServicesModelDefinition = {
//     ServiceCategoryID: {
//         type: Sequelize.INTEGER,
//         unique: true,
//         allowNull: false
//     },
//     ServiceCategoryName: {
//         type: Sequelize.STRING,
//         unique: true,
//         allowNull: false
//     },
//     ServiceID: {
//         type: Sequelize.INTEGER,
//         unique: true,
//         allowNull: false
//     },
//     ServiceName: {
//         type: Sequelize.STRING,
//         unique: true,
//         allowNull: false
//     },
//     ServicePrice: {
//         type: Sequelize.DOUBLE,
//         unique: true,
//         allowNull: false
//     },
//     ServiceDescription: {
//         type: Sequelize.STRING,
//         unique: true,
//         allowNull: false
//     },
//     BuildingComplexID: {
//         type: Sequelize.INTEGER,
//         unique: true,
//         allowNull: false
//     },
    
// };


// var ConsumerServiceModel = db.define('vwConsumerServices', ConsumerServicesModelDefinition);

module.exports = ConsumerServiceModel;