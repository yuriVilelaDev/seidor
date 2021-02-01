const test = require('tape');
const index = require('./index');

test('cadastrar motorista', (t) => {
    t.assert(index.(5,10) === 0, "Descontou corretamente")
    t.end()
})