const express = require('express');


const fruitsRouter = require('../cars/cars-router.js');

const server = express();


server.use(express.json());

server.use('/api/cars', fruitsRouter);

server.get('/', (req, res) => {
    res.send('<h3>Schema</h3>');
  });
  

module.exports = server;
