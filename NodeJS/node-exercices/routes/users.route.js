module.exports = (app) => {
    const worker = require('../controllers/workers.controller.js');

    //Create a new Worker
    app.post('/workers', worker.create);
    //Retrieve all Workers
    app.get('/workers', worker.findAll);
    // Retrieve a single worker with noteId
    app.get('/workers/:id', worker.findOne);
    //edit a worker
    app.put('/workers/:id', worker.update);
    //remove a worker
    app.delete('/workers/:id',worker.delete);
   
    const customer = require('../controllers/customers.controller.js');

    //Create a new customer
    app.post('/customers', customer.create);
    //Retrieve all customers
    app.get('/customers', customer.findAll);
    // Retrieve a single customer with noteId
    app.get('/customers/:id', customer.findOne);
    //edit a customer
    app.put('/customers/:id', customer.update);
    //remove a customer
    app.delete('/customers/:id',customer.delete);

    const project = require('../controllers/projects.controller.js');

    //Create a new project
    app.post('/projects', project.create);
    //Retrieve all projects
    app.get('/projects', project.findAll);
    // Retrieve a single project with noteId
    app.get('/projects/:id', project.findOne);
    //edit a project
    app.put('/projects/:id', project.update);
    //remove a project
    app.delete('/projects/:id',project.delete);
}