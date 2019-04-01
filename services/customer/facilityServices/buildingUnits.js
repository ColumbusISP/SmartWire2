var Sequelize = require('sequelize');

var db = require('../../../services/database');


exports.getBuildingUnits = (req, res) => {	
	db.query("SELECT * FROM \"vwUnitInfo\"", { type:Sequelize.QueryTypes.SELECT})
   .then((buildingUnits) => 
		res.json(buildingUnits) )
}
