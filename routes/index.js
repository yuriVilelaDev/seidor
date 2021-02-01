
var express = require('express');
var router = express.Router();

var MotoristaController = require('../controller/MotoristaController');
var VeiculoController = require('../controller/VeiculoController');


router.get ('/motorista',      MotoristaController.findAll.bind(MotoristaController));
router.get ('/motorista/:_id', MotoristaController.findOne.bind(MotoristaController));
router.post('/motorista',      MotoristaController.create.bind(MotoristaController));
router.put ('/motorista/:_id', MotoristaController.update.bind(MotoristaController));
router.delete('/motorista/:_id', MotoristaController.delete.bind(MotoristaController));

router.get ('/veiculo',      VeiculoController.findAll.bind(VeiculoController));
router.get ('/veiculo/:_id', VeiculoController.findOne.bind(VeiculoController));
router.post('/veiculo',      VeiculoController.create.bind(VeiculoController));
router.put ('/veiculo/:_id', VeiculoController.update.bind(VeiculoController));
router.delete('/veiculo/:_id', VeiculoController.delete.bind(VeiculoController));

module.exports = router;


