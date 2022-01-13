const express = require('express');

const readerController = require('../controllers/readers');

const router = express.Router();

router.post('/', readerController.create);

router.get('/', readerController.read);

//router.get('/:readerID', readerController.readById);

router.patch('/:readerID', readerController.update);

router.delete('/:readerID', readerController.destroy);


module.exports = router;