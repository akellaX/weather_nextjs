const mockServer = require('node-mock-server');
const path = require('path');

const options = {
    restPath: path.join(__dirname, '/mocks'),
    dirName: __dirname,
    uiPath: '/mock', // the URL path of the mock server UI
    title: 'API mock server',
    version: 1,
    urlBase: 'http://localhost:3001',
    urlPath: '/rest/v1',
    port: 3001,
    contentType: 'application/json',
    accessControlExposeHeaders: 'X-Total-Count',
    accessControlAllowOrigin: '*',
    accessControlAllowMethods: 'GET, POST, PUT, OPTIONS, DELETE, PATCH, HEAD',
    accessControlAllowHeaders: 'origin, x-requested-with, content-type',
    accessControlAllowCredentials: 'true',
    headers: {},
};

mockServer(options);
