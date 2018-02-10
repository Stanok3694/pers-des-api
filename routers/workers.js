var express = require('express')
var router = express.Router();

// get all workers list:
router.get('/', (req, res) => {
    res.send('list of workers...');
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    res.send(`information about worker by id: ${id}`);
});

module.exports = router;