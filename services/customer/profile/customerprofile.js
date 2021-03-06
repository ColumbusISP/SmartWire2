const Customer = require('../../../models/profile');

// Find a Customer by Id
exports.findById = (req, res) => {	
	//Customer.findById(req.params.id).then(customer => {
	Customer.findByPk(req.params.id).then(customer => {
			console.log('REST Profile'+ customer);
			res.json(customer);

		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
};

// Update a Customer
exports.update = (req, res) => {
	const id = req.body.id;
	Customer.update( req.body, 
			{ where: {id: id} }).then(() => {
				res.status(200).json( { mgs: "Updated Successfully -> Customer Id = " + id } );
			}).catch(err => {
				console.log(err);
				res.status(500).json({msg: "error", details: err});
			});
};
    