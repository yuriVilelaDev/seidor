var VeiculoModel = require('../model/VeiculoModel');
var Promise = require('bluebird');


function VeiculoController(Model) {
  this.Model = Promise.promisifyAll(Model);
}

VeiculoController.prototype.create = function(req, res) {
    var data = req.body;
  
    this.Model.createAsync(data)
      .then(function(result) {
        res.json(result);
      })
      .catch(function(err) {
        console.log(err)
      });
  };
  
  VeiculoController.prototype.findOne = function(req, res) {
    var _id = req.params._id;
  
    this.Model.findOneAsync(_id)
      .then(function(result) {
        res.json(result);
      })
      .catch(function(err) {
        console.log(err)
      });
  };
  
  VeiculoController.prototype.findAll = function(req, res) {
    var data = req.body;
  
    this.Model.findAllAsync()
      .then(function(result) {
        res.json(result);
      })
      .catch(function(err) {
        console.log(err)
      });
  };
  
  VeiculoController.prototype.update = function(req, res) {
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
  
  
  VeiculoController.prototype.delete = function(req, res) {
    var _id = req.params.id;
  
    this.Model.deleteAsync(_id)
      .then(function(result) {
        res.json(result);
      })
      .catch(function(err) {
        console.log(err)
      });
  };
  
  module.exports = new VeiculoController(VeiculoModel);