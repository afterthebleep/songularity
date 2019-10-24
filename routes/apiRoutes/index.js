const router = require('express').Router();

const avRoutes = require('./avRoutes');

router.use('/av', avRoutes);

module.exports = router;
