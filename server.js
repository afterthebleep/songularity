const express = require('express');

const app = express();
app.use(express.static('public'));
app.use(require('./routes'));
app.listen(3001);

