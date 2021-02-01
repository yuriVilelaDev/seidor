var mongo = require('../Db/mongo.js');

function MotoristaModel() {

}

MotoristaModel.prototype.create = function(data, callback) {
  mongo.collection('motorista').save(data, callback);
};

MotoristaModel.prototype.findOne = function(_id, callback) {
  mongo.collection('motorista').findOne({ "_id": mongo.ObjectId(_id) }, callback);
};

MotoristaModel.prototype.findAll = function(callback) {
  mongo.collection('motorista').find({}, callback);
};

MotoristaModel.prototype.update = function(data, _id, callback) {
  mongo.collection('motorista').update(data, callback);
};

MotoristaModel.prototype.delete = function(_id, callback) {
  mongo.collection('motorista').remove({ _id: _id }, callback);
};

module.exports = new MotoristaModel();