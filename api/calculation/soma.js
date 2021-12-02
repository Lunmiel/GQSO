const { Router } = require('express');
const { buildErrorResponse } = require('./errorResponse.js');

const somaRouter = Router();

function soma(params) {
    const number1 = Number(params.num1);
    const number2 = Number(params.num2);
          
    return number1 + number2;
}

function resultIsOk(result) {
    const isZero = (result === 0);
    const isTruthyNumber = Boolean(Number(result));

    return isTruthyNumber || isZero;
}

somaRouter.get('/', buildErrorResponse);

somaRouter.get('/:param', buildErrorResponse);

somaRouter.get('/:num1/:num2', (request, response) => {
    const result = soma(request.params);
    const goodResult = resultIsOk(result);

    return goodResult
        ? response.send(`${result}`)
        : buildErrorResponse(request, response);
});

module.exports = somaRouter;