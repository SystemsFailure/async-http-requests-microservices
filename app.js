const express = require('express');

const app = express();
const PORT = 3001;
// Обпаботка корневого маршрута
app.get('/', (req, res) => {
    res.send('Hello microservice');
});

// Прослушка серевера на порту 3000 - inviroment variable

app.listen(PORT ,() => {
    console.log(`microservice listening on port ${PORT}`);
});

