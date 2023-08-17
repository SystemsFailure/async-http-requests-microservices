const qmqp = require('amqplib');

// Соединение с RabbitMQ
let channel;
module.exports.connect = async function connect () {
    try {
        const connection = await qmqp.connect(process.env.URL_MQ || 'amqp://guest:guest@localhost:5672');
        channel = await connection.createChannel();

        await channel.assertQueue('taskQueue');
        return channel;
    } catch (error) {
        console.log(error);
    }
};

module.exports.channel = channel