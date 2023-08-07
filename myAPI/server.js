const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
const cars = require('./cars.json');
app.get('/api/cars', (req, res) => {
    res.json(cars);
});



app.listen(port, () => {
    console.log(`Server is listening on Port: ${port}`)
});