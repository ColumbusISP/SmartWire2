var Sequelize = require('sequelize');

var db = require('../../../services/database');

exports.getContextById = (req, res) => {	
	db.query("SELECT * FROM \"vwConsumerContext\" where id=" + req.params.id	, { type:Sequelize.QueryTypes.SELECT})
   .then((consumerContext) => 
		res.json(consumerContext) )
}
