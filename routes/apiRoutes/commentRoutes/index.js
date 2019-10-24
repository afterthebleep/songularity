const router = require('express').Router();
const commentsController = require('./../../../controllers/commentsController');

router.route('/')
    .get(commentsController.getComments)

// /api
module.exports = router;




// /api/blogs/:blogId/


