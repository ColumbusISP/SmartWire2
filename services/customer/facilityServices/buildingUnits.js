var Sequelize = require('sequelize');
var returnhelper = require('../../returnHelper');
var db = require('../../../services/database');

const SUCCESS = 1;
const SUCCESS_INFO = 2;
const ERROR = 4;
const ERROR_INFO = 8;

exports.getBuildingUnits = (req, res) => {	
	db.query("SELECT * FROM \"vwUnitInfo\"", { type:Sequelize.QueryTypes.SELECT})
   .then((buildingUnits) => 
		res.json(buildingUnits) )
}

exports.setUserBuildingUnit = (req, res) => {	
	var sql = "update \"Users\" set \"BuildingUnitID\" = " + req.body.BuildingUnitID + " where \"id\" = " + req.body.id ;
	console.log('req BI: '+ req.body.BuildingUnitID);
	db.query(sql, { type:Sequelize.QueryTypes.SELECT})
   		.then((buildingUnits) => 
			res.status(200).json(returnhelper.setJSON(SUCCESS,'SetBuildingID-01')));
}
