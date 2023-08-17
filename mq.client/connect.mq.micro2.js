const qmqp = require('amqplib');

// Соединение с RabbitMQ

module.exports = async function connect () {
    try {
        const connection = await qmqp.connect(process.env.URL_MQ || 'amqp://guest:guest@localhost:5672');
        const channel = await connection.createChannel();

        await channel.assertQueue('taskQueue');

        return channel;
    } catch (error) {
        console.log(error);
    }
};