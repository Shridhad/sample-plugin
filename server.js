'use strict';

const Hapi = require('hapi');

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 8000
});

// Add the route
server.route({
    method: 'GET',
    path:'/webhook',
    handler: function (request, reply) {
        return reply('hello world');
    }
});

server.route({
    method: 'POST',
    path:'/webhook',
    handler: function (request, reply) {
        return reply('hello world');
    }
});

// Add the route
server.route({
    method: 'GET',
    path:'/',
    handler: function (request, reply) {
        console.log("GET /");
        return reply('Welcome');
    }
});

// Add the route
server.route({
    method: 'POST',
    path:'/',
    handler: function (request, reply) {
        console.log("POST /");
        return reply('Welcome');
    }
});



// Start the server
server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});
