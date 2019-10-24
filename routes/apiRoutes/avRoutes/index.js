const router = require('express').Router();
const avController = require('./../../../controllers/avController');

router.route('/')
    .get(avController.getAvs)
    .post(avController.createAv);

// /api/av
router.route('/:avId')
    .get(avController.getAv)
    .delete(avController.deleteAv);

module.exports = router;
