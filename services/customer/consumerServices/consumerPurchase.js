var Purchase = require('../../../models/purchase');
var returnhelper = require('../../returnHelper');
var config = require('../../../config/db-config');
var db = require('../../database');
var Sequelize = require('sequelize');

const SUCCESS = 1;
const SUCCESS_INFO = 2;
const ERROR = 4;
const ERROR_INFO = 8;

// To Do: Move to seperate controller
exports.purchaseService = function(req, res) {
    if(!req.body.id || !req.body.ServiceID || !req.body.ServicePrice) {

        res.status(200).json(returnhelper.setJSON(ERROR_INFO,'Purchase01'));
        
    } else {
        var newPurchase = {
            id: req.body.id,
            ServiceID: req.body.ServiceID,
            ServicePrice: req.body.ServicePrice,
            PurchaseTime: req.body.PurchaseTime
        };
        console.log("SI2: " + JSON.stringify( newPurchase));
        db.sync().then(function() {
            return Purchase.create(newPurchase).then(() => {
                res.status(200).json(returnhelper.setJSON(SUCCESS,'Purchase03'));
            })
            .catch(function(error) {
            console.log(error);
            res.status(200).json(returnhelper.setJSON(ERROR_INFO,'Purchase04'));
            })
        }).catch(function(error) {
            console.log(error);
            res.status(200).json(returnhelper.setJSON(ERROR_INFO,'Purchase02'));
        })
    }
}


exports.getPurchasesById = (req, res) => {	
	db.query("SELECT * FROM \"vwConsumerPurchases\" where id=" + req.params.id, { type:Sequelize.QueryTypes.SELECT})
   .then((consumerServices) => 
		res.json(consumerServices) )
}
