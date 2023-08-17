const express = require('express');
const connect = require('./mq.client/connect.mq.micro1');

let channel;
const app = express();
const PORT = 3001;

app.use(express.json());

// Обпаботка корневого маршрута
app.get('/:productId/:count', (req, res) => {
    channel.sendToQueue('taskQueue', Buffer.from(JSON.stringify({productId: req.params.productId, count: req.params.count})));
    channel.close();
    res.send('Hello microservice');
});

// Прослушка серевера на порту 3000 - inviroment variable
app.listen(PORT , async () => {
    channel = await connect.connect();

    console.log(`microservice listening on port ${PORT}`);
});