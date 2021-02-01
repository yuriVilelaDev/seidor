var mongo = require('../Db/mongo.js');

function RelacaoUsoModel() {

}

RelacaoUsoModel.prototype.create = function(data, callback) {
  mongo.collection('relacaouso').save(data, callback);
};

RelacaoUsoModel.prototype.findOne = function(_id, callback) {
  mongo.collection('relacaouso').findOne({ "_id": mongo.ObjectId(_id) }, callback);
};

RelacaoUsoModel.prototype.findAll = function(callback) {
  mongo.collection('relacaouso').find({}, callback);
};

RelacaoUsoModel.prototype.update = function(data, _id, callback) {
  mongo.collection('relacaouso').update(data, callback);
};

RelacaoUsoModel.prototype.delete = function(_id, callback) {
  mongo.collection('relacaouso').remove({ _id: _id }, callback);
};

module.exports = new RelacaoUsoModel();