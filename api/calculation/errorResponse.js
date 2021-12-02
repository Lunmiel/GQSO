function buildErrorResponse(request, response) {
    return response.status(400).send('status code 400 (Bad Request)');
}

module.exports = {
    buildErrorResponse
};