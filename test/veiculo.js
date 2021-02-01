var request = require('supertest'),
    assert  = require('assert'),
    app     = require('../app'),
    db      = require('../Db/mongo'),
    _id;


describe('Veiculo Endpoints', function(){
  beforeEach(function(done) {
    db.collection('Veiculo').remove({}, done);
  });

  it.only('GET /Veiculo', function(done){
    db.collection('Veiculo').insert({ 'name': 'Walter White' }, function(){
      db.collection('Veiculo').insert({ 'name': 'Goku' }, function(){

        request(app)
          .get('/Veiculo')
          .expect(200)
          .end(function(err, res){
            var data = res.body;

            assert.equal(data[0].name, 'Walter White');
            assert.equal(data[1].name, 'Goku');
            assert.equal(data.length, 2);
            done();
          });
      });
    });
  });

  it('GET /Veiculo/:id', function(done){
    request(app)
      .get('/Veiculo/' + _id)
      .expect(200)
      .end(function(err, res){
        var data = res.body;

        assert.equal(data.length, 4);
        done();
      });
  });

  it('POST /Veiculo', function(done){
    request(app)
      .post('/Veiculo')
      .send({ 'placa': 'kjkl-4959','cor':'azul','marca':'chevrolet'})
      .expect(200)
      .end(function(err, res){
        var data = res.body;

        assert.equal(data.length, 4);
        done();
      });
  });

  it('PUT /Veiculo/:id', function(done){
    request(app)
      .put('/Veiculo/' + _id)
      .send({ 'cor': 'preto' })
      .expect(200)
      .end(function(err, res){
        var data = res.body;

        assert.equal(data.length, 4);
        done();
      });
  });

  it('DELETE /Veiculo/:id', function(done){
    request(app)
      .delete('/Veiculo/' + _id)
      .expect(200)
      .end(function(err, res){
        var data = res.body;

        assert.equal(data.length, 4);
        done();
      });
  });
});