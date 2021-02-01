var mongo = require('../Db/mongo.js');

function VeiculoModel() {

}

VeiculoModel.prototype.create = function(data, callback) {
  mongo.collection('veiculo').save(data, callback);
};

VeiculoModel.prototype.findOne = function(_id, callback) {
  mongo.collection('veiculo').findOne({ "_id": mongo.ObjectId(_id) }, callback);
};

VeiculoModel.prototype.findAll = function(callback) {
  mongo.collection('veiculo').find({}, callback);
};

VeiculoModel.prototype.update = function(data, _id, callback) {
  mongo.collection('veiculo').update(data, callback);
};

VeiculoModel.prototype.delete = function(_id, callback) {
  mongo.collection('veiculo').remove({ _id: _id }, callback);
};

module.exports = new VeiculoModel();