/*
*
*   uncomment to setup standard MQTT Broker
*
*/
const aedes = require('aedes')()
const server = require('net').createServer(aedes.handle)
const port = 8080

server.listen(port, function () {
    console.log('server started and listening on port ', port);
    aedes.publish({ topic: 'test/broker/isWorking', payload: "I'm broker" });
})


/*
*
*   uncomment to setup MQTT over websockets
*
*/
// const aedes = require('aedes')()
// const httpServer = require('http').createServer()
// const ws = require('websocket-stream')
// const port = process.env.PORT || 3000

// ws.createServer({ server: httpServer }, aedes.handle);

// httpServer.listen(port, function () {
//     // console.log('Starting MQTT broker on port:', port);
//     aedes.publish({ topic: 'test/MQTTbroker/isWorking', payload: "I'm broker" });
// });



// aedes.on('subscribe', function (subscriptions, client) {
//     console.log('MQTT client \x1b[32m' + (client ? client.id : client) +
//         '\x1b[0m subscribed to topics: ' + subscriptions.map(s => s.topic).join('\n'), 'from broker', aedes.id)
// })

// aedes.on('unsubscribe', function (subscriptions, client) {
//     console.log('MQTT client \x1b[32m' + (client ? client.id : client) +
//         '\x1b[0m unsubscribed to topics: ' + subscriptions.join('\n'), 'from broker', aedes.id)
// })

// // fired when a client connects
// aedes.on('client', function (client) {
//     console.log('Client Connected: \x1b[33m' + (client ? client.id : client) + '\x1b[0m')
// })

// // fired when a client disconnects
// aedes.on('clientDisconnect', function (client) {
//     console.log('Client Disconnected: \x1b[31m' + (client ? client.id : client) + '\x1b[0m')
// })

// // fired when a message is published
// aedes.on('publish', async function (packet, client) {
//     console.log('Client \x1b[31m' + (client ? client.id : 'BROKER_' + aedes.id) + '\x1b[0m has published', packet.payload.toString(), 'on', packet.topic)
// })


