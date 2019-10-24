const router = require('express').Router();

const blogRoutes = require('./avRoutes');
const commentRoutes = require('./commentRoutes');

router.use('/av', visionRoutes);
// router.use('/comments', commentRoutes);

module.exports = router;
