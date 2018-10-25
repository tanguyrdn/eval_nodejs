const Customer = require('../models/customer.model.js');

exports.create = (req, res) => {
    //validate request
    if(!req.body.name) {
        return res.status(400).send({
            message: "name has to be written"
        });
    }
    const customer = new Customer({
        //create a customer
        name: req.body.name,
        adress: req.body.adress,
        contact: {
            name: req.body.contact.name,
            firstname: req.body.contact.firstname,
            phonenumber: req.body.contact.phonenumber,
            mailto: req.body.contact.mailto
        },        
        position: req.body.position
    });
    //save customers in database
    customer.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the customer."
        });
    });
};
//Retrieve and return all customers from database
exports.findAll = (req, res) => {
    Customer.find()
    .then(customers => {
        res.send(customers);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving customers."
        });        
    });
};
// Find a single customer with an id
exports.findOne = (req, res) => {
    Customer.findById(req.params.id)
   .then(customer => {
       if(!customer) {
           return res.status(404).send({
               message: "customer not found with id " + req.params.id
           });
       }
       res.send(customer);
   }).catch(err => {
       if(err.kind === 'ObjectId') {
           return res.status(404).send({
               message: "Customer not found with id " + req.params.id
           });
       }
       return res.status(500).send({
           message: "Error retrieving customer with id " + req.params.id
       });
   });
};
//Update a customer's properties
exports.update = (req, res) => {
    //Validate request
    if(!req.body) {
        return res.status(400).send({
            message: "Customer content cannot be empty"
        })
    }

    Customer.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        adress: req.body.adress,
        contact: {
            name: req.body.contact.name,
            firstname: req.body.contact.firstname,
            phonenumber: req.body.contact.phonenumber,
            mailto: req.body.contact.mailto
        },        
        position: req.body.position
    })
    .then(customer => {
        if (!customer) {
            return res.status(404).send({
                message: "Customer not found with Id" + req.params.id
            });
        }
        res.send({message: "Update done"});
    }).catch(err => {
        if(err.kind=== 'ObjectId' || err.name=== 'NotFound') {
            return res.status(404).send({
                message: "customer not found with id " + req.params.id
            });
        }
        return res.status(500).send({
            message: err.message || "Some error occurred while updating customer."
        });
    });
};
//Remove one customer
exports.delete = (req, res) => {
    Customer.findByIdAndRemove(req.params.id)
    .then(customer => {
        if (!customer) {
            return res.status(404).send({
                message: "Customer not found with Id" + req.params.id
            });
        }
        res.send({message: "Customer deleted"});
    }).catch(err => {
        if(err.kind=== 'ObjectId' || err.name=== 'NotFound') {
            return res.status(404).send({
                message: "Customer not found with id " + req.params.id
            });
        }
        return res.status(500).send({
            message: err.message || "Some error occurred while updating customer."
        });
    });
};