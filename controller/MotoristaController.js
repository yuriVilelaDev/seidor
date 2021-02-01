var MotoristaModel = require('../model/MotoristaModel');
var Promise = require('bluebird');


function MotoristaController(Model) {
  this.Model = Promise.promisifyAll(Model);
}

MotoristaController.prototype.create = function(req, res) {
    var data = req.body;
  
    this.Model.createAsync(data)
      .then(function(result) {
        res.json(result);
      })
      .catch(function(err) {
        console.log(err)
      });
  };
  
  MotoristaController.prototype.findOne = function(req, res) {
    var _id = req.params._id;
  
    this.Model.findOneAsync(_id)
      .then(function(result) {
        res.json(result);
      })
      .catch(function(err) {
        console.log(err)
      });
  };
  
  MotoristaController.prototype.findAll = function(req, res) {
    var data = req.body;
  
    this.Model.findAllAsync()
      .then(function(result) {
        res.json(result);
      })
      .catch(function(err) {
        console.log(err)
      });
  };
  
  MotoristaController.prototype.update = function(req, res) {
    var data = req.body,
        _id = req.params.id;
  
    this.Model.updateAsync(data, _id)
      .then(function(result) {
        res.json(result);
      })
      .catch(function(err) {
        console.log(err)
      });
  };
  
  
  MotoristaController.prototype.delete = function(req, res) {
    var _id = req.params.id;
  
    this.Model.deleteAsync(_id)
      .then(function(result) {
        res.json(result);
      })
      .catch(function(err) {
        console.log(err)
      });
  };
  
  module.exports = new MotoristaController(MotoristaModel);