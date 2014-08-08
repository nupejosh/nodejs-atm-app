var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var record = require('../models/record');


/* GET home page. */
router.get('/', function(req, res) {
		res.render('index', { title: 'ATM' });
	});

/* POST ATM input*/
router.post('/statement', function(req, res) {
	if (req.body.pin != record['pin']){
		var message = "Sorry wrong pin dude, try 1234 : )";
		res.render('index', {error_message: message}); 
	}
	else{
	var withdrawn = record['last_withdrawn'] = req.body.withdraw;
	var deposit = record['last_deposit'] = req.body.deposit;
	var balance = record['balance'] = record.balance;
	balance = parseInt(balance) + parseInt(deposit);
	balance = parseInt(balance) - parseInt(withdrawn);
	res.render('statement', {balance: balance, withdraw: withdrawn, deposit: deposit});
	}
		});

module.exports = router;
