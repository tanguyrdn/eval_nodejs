const Project = require('../models/project.model.js');

exports.create = (req, res) => {
    //validate request
    if(!req.body) {
        return res.status(400).send({
            message: "all properties have to be written"
        });
    }
    const project = new Project({
        //create a project
        name: req.body.name,
        description: req.body.description,
        start: req.body.start || 'Unknown date',
        end: req.body.end || 'Unknown date',
        value: req.body.value,
        status: req.body.status
    });
    //save project in database
    project.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the project."
        });
    });
};
//Retrieve and return all projects from database
exports.findAll = (req, res) => {
    Project.find()
    .then(projects => {
        res.send(projects);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving projects."
        });        
    });
};
// Find a single project with an id
exports.findOne = (req, res) => {
    Project.findById(req.params.id)
   .then(project => {
       if(!project) {
           return res.status(404).send({
               message: "project not found with id " + req.params.id
           });
       }
       res.send(project);
   }).catch(err => {
       if(err.kind === 'ObjectId') {
           return res.status(404).send({
               message: "project not found with id " + req.params.id
           });
       }
       return res.status(500).send({
           message: "Error retrieving project with id " + req.params.id
       });
   });
};
//Update a project's properties
exports.update = (req, res) => {
    //Validate request
    if(!req.body) {
        return res.status(400).send({
            message: "project content cannot be empty"
        })
    }

    Project.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        description: req.body.description,
        start: req.body.start,
        end: req.body.end,
        value: req.body.value,
        status: req.body.status
    })
    .then(project => {
        if (!project) {
            return res.status(404).send({
                message: "project not found with Id" + req.params.id
            });
        }
        res.send({message: "Update done"});
    }).catch(err => {
        if(err.kind=== 'ObjectId' || err.name=== 'NotFound') {
            return res.status(404).send({
                message: "project not found with id " + req.params.id
            });
        }
        return res.status(500).send({
            message: err.message || "Some error occurred while updating project."
        });
    });
};
//Remove a project
exports.delete = (req, res) => {
    Project.findByIdAndRemove(req.params.id)
    .then(project => {
        if (!project) {
            return res.status(404).send({
                message: "project not found with Id" + req.params.id
            });
        }
        res.send({message: "project deleted"});
    }).catch(err => {
        if(err.kind=== 'ObjectId' || err.name=== 'NotFound') {
            return res.status(404).send({
                message: "project not found with id " + req.params.id
            });
        }
        return res.status(500).send({
            message: err.message || "Some error occurred while updating project."
        });
    });
};