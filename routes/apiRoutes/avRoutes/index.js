const router = require('express').Router();
const blogController = require('./../../../controllers/visualsController');

router.route('/')
    .get(avController.getAv)
    .post(avController.createAv);

// /api/blogs
// router.route('/:blogId')
//     .get(blogController.getBlog)
//     .post(blogController.addComment)
//     .delete(blogController.deleteBlog)

module.exports = router;
