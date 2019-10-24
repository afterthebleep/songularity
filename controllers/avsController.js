const connection = require('./../config/connection');

module.exports = {
    getAvs: (req, res) => {
        const query = `SELECT * FROM av 
            INNER JOIN audio ON av.fk_audio_id = audio.id
            INNER JOIN video ON av.fk_video_id = video.id;`;
        connection.query(query, (err, avs) => {
            if(err) {
                return res.status(404).send(err);
            }
            res.json(avs);
        });
    },
    createAv: (req, res) => {
        const { audio_url, video_url } = req.body;
        let query, audio_id, video_id;
        query = `SELECT * FROM audio WHERE url = ?`;
        if (/*query result*/) {
            audio_id = /*result-id*/
        } else {
            query = `INSERT INTO audio (url) VALUES (?)`;
            connection.query(query, audio_url);
            // get line number from result;
        }
        if (/*query result*/) {
            video_id = /*result-id*/
        } else {
            query = `INSERT INTO video (url) VALUES (?)`;
            connection.query(query, video_url);
            // get line number from result;
        }
        query = `INSERT INTO av (fk_audio_id, fk_ideo_id) VALUES(?)`;
        connection.query(query, [audio_id, video_id], (err, response) => {
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
