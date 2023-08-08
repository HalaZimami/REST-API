const express = require('express');
const bodyParser = require('body-parser');
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

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.post('/api/cars', (req, res) => {
    const newCar = req.body;
    newCar.id = cars.length + 1;
    cars.push(newCar);
    res.json({ message: 'Car added!', car: newCar });

})