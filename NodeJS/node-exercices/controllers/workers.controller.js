const Worker = require('../models/worker.model.js');

exports.create = (req, res) => {
    //validate request
    if(!req.body) {
        return res.status(400).send({
            message: "all properties have to be written"
        });
    }
    const worker = new Worker({
        //create a worker
        name: req.body.name,
        firstname: req.body.firstname,
        username: req.body.username,
        birthdate: req.body.birthdate,
        adress: req.body.adress,
        phonenumber: req.body.phonenumber,
        mailto: req.body.mailto,
        position: req.body.position
    });
    //save worker in database
    worker.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the worker."
        });
    });
};
//Retrieve and return all workers from database
exports.findAll = (req, res) => {
    Worker.find()
    .then(workers => {
        res.send(workers);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving workers."
        });        
    });
};
// Find a single worker with an id
exports.findOne = (req, res) => {
    Worker.findById(req.params.id)
   .then(worker => {
       if(!worker) {
           return res.status(404).send({
               message: "worker not found with id " + req.params.id
           });
       }
       res.send(worker);
   }).catch(err => {
       if(err.kind === 'ObjectId') {
           return res.status(404).send({
               message: "Worker not found with id " + req.params.id
           });
       }
       return res.status(500).send({
           message: "Error retrieving worker with id " + req.params.id
       });
   });
};
//Update a worker's properties
exports.update = (req, res) => {
    //Validate request
    if(!req.body) {
        return res.status(400).send({
            message: "Worker content cannot be empty"
        })
    }

    Worker.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        firstname: req.body.firstname,
        username: req.body.username,
        birthdate: req.body.birthdate,
        adress: req.body.adress,
        phonenumber: req.body.phonenumber,
        mailto: req.body.mailto,
        position: req.body.position
    })
    .then(worker => {
        if (!worker) {
            return res.status(404).send({
                message: "Worker not found with Id" + req.params.id
            });
        }
        res.send({message: "Update done"});
    }).catch(err => {
        if(err.kind=== 'ObjectId' || err.name=== 'NotFound') {
            return res.status(404).send({
                message: "worker not found with id " + req.params.id
            });
        }
        return res.status(500).send({
            message: err.message || "Some error occurred while updating worker."
        });
    });
};
//Remove a worker
exports.delete = (req, res) => {
    Worker.findByIdAndRemove(req.params.id)
    .then(worker => {
        if (!worker) {
            return res.status(404).send({
                message: "Worker not found with Id" + req.params.id
            });
        }
        res.send({message: "Worker deleted"});
    }).catch(err => {
        if(err.kind=== 'ObjectId' || err.name=== 'NotFound') {
            return res.status(404).send({
                message: "Worker not found with id " + req.params.id
            });
        }
        return res.status(500).send({
            message: err.message || "Some error occurred while updating worker."
        });
    });
};