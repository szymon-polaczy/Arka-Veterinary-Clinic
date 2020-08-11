const express = require('express');
const { response } = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (request, respond) => {
    respond.json({
        message: 'Meower! ^^'
    })
});

app.listen(5000, () => {
    console.log('Listening on http://localhost:5000');
});