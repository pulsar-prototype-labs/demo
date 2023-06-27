const WebSocket = require('ws');

// If set enableTLS to true, your have to set tlsEnabled to true in conf/websocket.conf.
const enableTLS = false;
const topic = `${enableTLS ? 'wss' : 'ws'}://localhost:8080/ws/v2/producer/persistent/public/default/my-topic`;
const ws = new WebSocket(topic);

var message = {
  "payload" : new Buffer.from("Hello World").toString('base64'),
  "properties": {
    "key1" : "value1",
    "key2" : "value2"
  },
  "context" : "1"
};
// Buffer.from(string[, encoding])
ws.on('open', function() {
  // Send one message
  ws.send(JSON.stringify(message));
});

ws.on('message', function(message) {
  console.log('received ack: %s', message);
});