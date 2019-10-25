const mysql = require('./../config/connection');

module.exports = {
    getAvs: (req, res) => {
        const query = `SELECT * FROM audiovisual AS av 
            INNER JOIN audio ON av.fk_audio_id = audio.id
            INNER JOIN visual ON av.fk_visual_id = visual.id;`;
        mysql.query(query, (err, result) => {
            if(err) {
                return res.status(404).send(err);
            }
            res.json(result);
        });
    },
    createAv: async (req, res) => {
        const { audioUrl, visualUrl } = req.body;
        let query, audioId, visualId;
        query = `SELECT * FROM audio WHERE url = ?`;
        try {
            let {audioId: id} = await mysql.query(query, audioUrl);
            if (!audioId) {
                query = `INSERT INTO audio (url, title) VALUES (?)`;
                let { audioId: insertId } = await mysql.query(query, audioUrl);
            }
        } catch (err) {
            console.log(err);
        }
        query = `SELECT * FROM audio WHERE url = ?`;
        try {
            let {visualId: id} = await mysql.query(query, visualUrl);
            if (!visualId) {
                query = `INSERT INTO visual (url, title) VALUES (?)`;
                let { visualId: insertId } = await mysql.query(query, visualUrl);
            }
        } catch (err) {
            console.log(err);
        }
        query = `INSERT INTO audiovisual (fk_audio_id, fk_visual_id) VALUES (?)`;
        await mysql.query(query, [audioId, visualId], (err, response) => {
            if(err) {
                return res.status(403).send(err);
            }
            res.send(response); 
        });
    },
    getAv: (req, res) => {
        const { avId } = req.params;
        const query = `SELECT * FROM audiovisual AS av WHERE ?`;
        mysql.query(query, {id: avId}, (err, result) => {
            if(err) {
                return res.status(404).send(err);
            }
            const av = avs[0];
            res.json(av);
        });
    },
    deleteAv: (req, res) => {
        const { avId } = req.params;
        const query = `DELETE FROM audiovisual WHERE ?`;
        mysql.query(query, { id: avId }, (err, result) => {
            if(err) {
                return res.status(404).send(err);
            }
            res.json(result);
        });
    }
};
