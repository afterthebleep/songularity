const connection = require('./../config/connection');

module.exports = {
    getComments: (req, res) => {
        const query = `SELECT * FROM comments`;
        connection.query(query, (err, comments) => {
            if(err) {
                return res.status(403).send(err);
            }
            res.json(comments);
        });
    }
};