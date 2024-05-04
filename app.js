const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const setsRoutes = require('./routes/sets');
const filesRoutes = require('./routes/files');
//const multer = require('multer');

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/sets', setsRoutes);
app.use('/files', filesRoutes);

app.get('/404', (req, res) => {
  res.status(404).send('Requested resource not found');
});

app.listen(3000);

//module.exports = storage;
