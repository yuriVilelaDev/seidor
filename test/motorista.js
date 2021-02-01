var request = require('supertest'),
    assert  = require('assert'),
    app     = require('../app'),
    db      = require('../Db/mongo'),
    _id;


describe('Motorista Endpoints', function(){
  beforeEach(function(done) {
    db.collection('motorista').remove({}, done);
  });

  it.only('GET /motorista', function(done){
    db.collection('motorista').insert({ 'name': 'Walter White' }, function(){
      db.collection('motorista').insert({ 'name': 'Goku' }, function(){

        request(app)
          .get('/motorista')
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

  it('GET /motorista/:id', function(done){
    request(app)
      .get('/motorista/' + _id)
      .expect(200)
      .end(function(err, res){
        var data = res.body;

        assert.equal(data.length, 4);
        done();
      });
  });

  it('POST /motorista', function(done){
    request(app)
      .post('/motorista')
      .send({ 'name': 'Other name'})
      .expect(200)
      .end(function(err, res){
        var data = res.body;

        assert.equal(data.length, 4);
        done();
      });
  });

  it('PUT /motorista/:id', function(done){
    request(app)
      .put('/motorista/' + _id)
      .send({ 'name': 'Other name' })
      .expect(200)
      .end(function(err, res){
        var data = res.body;

        assert.equal(data.length, 4);
        done();
      });
  });

  it('DELETE /motorista/:id', function(done){
    request(app)
      .delete('/motorista/' + _id)
      .expect(200)
      .end(function(err, res){
        var data = res.body;

        assert.equal(data.length, 4);
        done();
      });
  });
});