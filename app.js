const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const setsRoutes = require('./routes/sets');

const app = express();

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/sets', setsRoutes);

app.get('/404', (req, res) => {
    res.status(404).send('Requested resource not found');
});

app.listen(3000);
