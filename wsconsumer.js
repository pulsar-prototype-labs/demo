const WebSocket = require('ws');

// If set enableTLS to true, your have to set tlsEnabled to true in conf/websocket.conf.
const enableTLS = false;
const topic = `${enableTLS ? 'wss' : 'ws'}://localhost:8080/ws/v2/consumer/persistent/public/default/my-topic/my-sub`;
const ws = new WebSocket(topic);

ws.on('message', function(message) {
    var receiveMsg = JSON.parse(message);
    console.log('Received: %s - payload: %s', message, new Buffer(receiveMsg.payload, 'base64').toString());
    var ackMsg = {"messageId" : receiveMsg.messageId};
    ws.send(JSON.stringify(ackMsg));
});