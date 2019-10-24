const router = require('express').Router();

const apiRoutes = require('./apiRoutes');

router.use(express.static('public'));

router.use('/api', apiRoutes);

module.exports = router;
