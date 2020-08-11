const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        message: 'Meower! ^^'
    })
});

app.listen(5000, () => {
    console.log('Listening on http://localhost:5000');
});