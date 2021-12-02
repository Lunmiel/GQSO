const express = require('express');
const somaRouter = require('./calculation/soma.js');

const app = express();
const port = 3333;

app.use('/soma', somaRouter);

app.listen(port, () => {
  console.log(`A API está sendo executada em http://localhost:${port}`);
  });