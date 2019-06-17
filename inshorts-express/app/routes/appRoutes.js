'use strict';

const express = require('express');
const router = express.Router();


// Import contact controller
// var transactionTodoList = require('../controller/transactionController');


  router.route('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!',
    });
});

// router.route('/transaction')
// .get(transactionTodoList.list_all_transaction)
// .post(transactionTodoList.create_a_transaction)
// .put(transactionTodoList.updatetransaction);


module.exports = router;