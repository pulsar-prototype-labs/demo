const Pulsar = require('pulsar-client');

const WebSocket = require('ws');



(async () => {
  // Create a client
  const client = new Pulsar.Client({
    serviceUrl: 'pulsar://localhost:6650',
  });

  // Create a consumer
  const consumer = await client.subscribe({
    topic: 'my-topic',
    subscription: 'my-subscription',
    subscriptionType: 'Exclusive',
  });

// //   // Receive messages
// //   for (let i = 0; i < 10; i += 1) {
// //     const msg = await consumer.receive();
// //     console.log(msg.getData().toString());
// //     consumer.acknowledge(msg);
// //   }

while (true) {
    const msg = await consumer.receive();
    console.log(msg.getData().toString());
    consumer.acknowledge(msg);
 }

// // Create a consumer
// const consumer = await client.subscribe({
//   topic: 'my-topic',
//   subscription: 'my-subscription',
//   subscriptionType: 'Exclusive',
//   listener: (msg, msgConsumer) => {
//     console.log(msg.getData().toString());
//     msgConsumer.acknowledge(msg);
//   },
// });

// //   await consumer.close();
// //   await client.close();
})();

// bin/pulsar-client consume my-topic -s 'my-subscription' -p Earliest -n 0
