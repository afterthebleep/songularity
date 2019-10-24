const connection = require('./../config/connection');

module.exports = {
    getBlogs: (req, res) => {
        const query = `SELECT * FROM blogs;`;
        connection.query(query, (err, blogs) => {
            if(err) {
                return res.status(404).send(err);
            }
            res.json(blogs);
        });
    },
    createBlog: (req, res) => {
        const { blog } = req.body;
        const query = `INSERT INTO blogs (blog) VALUES(?)`;            
        connection.query(query, blog, (err, response) => {
            if(err) {
                return res.status(403).send(err);
            }
            res.send(response); 
        });
    },
    getBlog: (req, res) => {
        const { blogId } = req.params;
        const query = `SELECT * FROM blogs WHERE ?`;
        connection.query(query, {id: blogId}, (err, blogs) => {
            if(err) {
                return res.status(404).send(err);
            }
            const blog = blogs[0];
            res.json(blog);
        });
    },
    deleteBlog: (req, res) => {
        const { blogId } = req.params;
        const query = `DELETE FROM blogs WHERE ?`;
        connection.query(query, { id: blogId }, (err, result) => {
            if(err) {
                return res.status(404).send(err);
            }
            res.json(result);
        });
    },
    addComment: (req, res) =>  {
        const { blogId } = req.params;
        const { comment } = req.body;
        const query = `INSERT INTO comments(comment, blog_id) VALUES(?,?);`
        connection.query(query, [comment, blogId], (err, comments) => {
            if(err){
                console.log(err);
                return res.status(403).send(err);
            }            
            res.json(comments);
        });
    },
    getBlogsComments: (req, res) => {
        const { blogId } = req.params;
        let query = `SELECT blogs.id as blogId, blogs.blog, comments.id, comment FROM comments `;
        query += `INNER JOIN blogs `;
        query += `ON comments.blog_id = blogs.id `;
        query += `WHERE blog_id = ?`;
        connection.query(query, parseInt(blogId), (err, comments) => {
            if(err) {
                return res.status(403).send(err);
            }
            console.log(comments);
            res.json(comments);
        });
    }
};