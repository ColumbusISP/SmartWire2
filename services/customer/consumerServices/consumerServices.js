var Sequelize = require('sequelize');

var db = require('../../../services/database');
// vsql = "SELECT * FROM \"vwConsumerContext\"";
// console.log('Context SQL: '+ vsql);

exports.getServicesById = (req, res) => {	
	db.query("SELECT * FROM \"vwConsumerServices\"", { type:Sequelize.QueryTypes.SELECT})
   .then((consumerServices) => 
		res.json(consumerServices) )
}
