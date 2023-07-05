const Pulsar = require('pulsar-client');

const produceMessage = async () => {
  // Create a client
  const client = new Pulsar.Client({
    serviceUrl: 'pulsar://localhost:6650',
  });

  // Create a producer
  const producer = await client.createProducer({
    topic: 'my-topic',
  });

  // Send messages
  for (let i = 0; i < 1; i += 1) {
    const msg = `my-message-${i}`;
    producer.send({
      data: Buffer.from(msg),
    });
    console.log(`Sent message: ${msg}`);
  }

  // Interveral
  //   let count = 0;
  //   const interval = setInterval(() => {
  //     const msg = `my-message-${count}`;
  //     producer.send({
  //       data: Buffer.from(msg),
  //     });
  //     console.log(`Sent message: ${msg}`);
  //     count++;
  //   }, 1000)

  await producer.flush();

  await producer.close();
  await client.close();
};

setInterval(() => {
  produceMessage();
}, 100);
