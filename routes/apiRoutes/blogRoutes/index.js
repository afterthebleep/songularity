const router = require('express').Router();
const blogController = require('./../../../controllers/blogsController');


// /api/blogs
router.route('/')
    .get(blogController.getBlogs)
    .post(blogController.createBlog)

// /api/blogs
router.route('/:blogId')
    .get(blogController.getBlog)
    .post(blogController.addComment)
    .delete(blogController.deleteBlog)

// /api/blogs/comments/:blogId
router.route('/comments/:blogId')
    .get(blogController.getBlogsComments);

module.exports = router;