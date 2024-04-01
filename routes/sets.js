const express = require('express');
const path = require('path');
const fs = require('fs');
const router = express.Router();

router.get('/', (req, res) => {
    const filesPath = path.join(__dirname, '..', 'assets');
    fs.readdir(filesPath, (err, files) => {
        if (err) {
            console.error('Error reading directory:', err);
            return res.status(500).json({ error: 'Internal server error' });
        }
        const jsonFiles = files.filter(file => path.extname(file) === '.json').map(file => path.basename(file, '.json'));
        res.json(jsonFiles);
    });
});

router.get('/:setName', (req, res) => {
    const setName = req.params.setName.toLowerCase();
    const filePath = path.join(__dirname, '..', 'assets', `${setName}.json`);
    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            return res.redirect('/404');
        }
        res.sendFile(filePath);
    });
});

module.exports = router;