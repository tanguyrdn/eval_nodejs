module.exports = (app) => {
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
}