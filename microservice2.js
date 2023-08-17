const express = require('express');
const connect = require('./mq.client/connect.mq.micro2');

let channel;
const app = express();
const PORT = 3002;
app.get('/', (req, res) => {
    res.send('Hello microservice2').json();
});

app.listen(PORT, async () => {
    channel = await connect();

    channel.consume('taskQueue', (message) => {
        const content = message?.content?.toString();
        console.log('Received message:', content);
        channel.ack(message);
    })

    console.log(`listening on microservice2 on port ${PORT}`);
});