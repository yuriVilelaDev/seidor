const express = require('express');
const server = express();

server.use(express.json());

const motorista = ['Brendon' ,  'Lara' ,  'Gregory' ,  'Hunter'];

server.use((req, res, next) => { 
    console.time('Request'); 
    console.log(`Método: ${req.method}; URL: ${req.url}; `);
  
    next(); 
  
    console.log('Finalizou'); 
  
    console.timeEnd('Request'); 
});
function checkMotoristaExists(req, res, next) {
    if (!req.body.name) {
      return res.status(400).json({ error: 'motorista name is required' });
      
    }
    return next(); 
} 

function checkMotoristaInArray(req, res, next) {
    const motorista = geeks[req.params.index];
    if (!motorista) {
      return res.status(400).json({ error: 'motorista does not exists' });
    } 
  
    req.motorista = motorista;
  
    return next();
  }
  

server.get('/motorista', (req, res) => {
    return res.json( motorista);
});

server.get('/motorista/:index',checkMotoristaInArray,(req,res)=>{
    return res.json(req.user);
})

server.post('/motorista',checkMotoristaExists,(req, res) =>{
    const {name} = req.body;
    motorista.push(name);
    return res.json( motorista);

})

server.put('/motorista',checkMotoristaInArray,checkMotoristaExists,(req,res)=>{
    const { index } = req.params;
    const { name } = req.body;
    motorista[index] = name;
    return res.json(motorista);
})

server.delete('/motorista/:index',checkMotoristaInArray, (req, res) => {
    const { index } = req.params;
    motorista.splice(index, 1);
    return res.send();
})
server.listen(3000);