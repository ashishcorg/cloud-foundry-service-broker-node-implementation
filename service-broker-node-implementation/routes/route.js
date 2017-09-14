var express = require('express');
var router = express.Router(),
catalogJSON = require('./../metadata/service-catalog.json'),
basicAuth = require('express-basic-auth'),
validator = require('./../validator/validator'),
validate = require("express-validation");

/**
 * Middleware for authorization check
 */
router.use(basicAuth({
    users: { 'admin': 'supersecret' },
    challenge: true,
    realm: 'Imb4T3st4pp'
}));

/**
 * end point for service catalog
 */
router.get('/catalog', function(req,res){
	res.send(catalogJSON);
});

/**
 * end point for service instance create
 */
router.put('/service_instances/:instance_id',validate(validator.serviceInstanceCreateRequestValidator), function(req,res){
	res.status(201).send();
});

/**
 * end point for service instance update
 */
router.patch('/service_instances/:instance_id',validate(validator.serviceInstanceUpdateRequestValidator), function(req,res){
	res.status(200).send({});
});

/**
 * end point for service instance delete
 */
router.delete('/service_instances/:instance_id',validate(validator.deleteRequestValidator), function(req,res){
	res.status(200).end();
});


/**
 * end point for service instance binding
 */
router.put('/service_instances/:instance_id/service_bindings/:binding_id',validate(validator.bindServiceInstanceRequestValidator), function(req,res){
	res.status(201).send();
});

/**
 * end point for service instance unbinding
 */
delete.put('/service_instances/:instance_id/service_bindings/:binding_id',validate(validator.deleteRequestValidator), function(req,res){
	res.status(200).end();
});
module.exports = router;