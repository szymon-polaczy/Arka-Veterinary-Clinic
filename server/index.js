const express = require('express');

const app = express();

app.get('/', (request, respond) => {



    /*----PART THAT I HAVE NO IDEAD WHAT's GOIGN ON---*/


    // Website you wish to allow to connect
    respond.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    respond.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    respond.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    respond.setHeader('Access-Control-Allow-Credentials', true);

    
    /*----PART THAT I HAVE NO IDEAD WHAT's GOIGN ON---*/



    
    respond.json({
        message: 'Meower! ^^'
    })
});

app.listen(5000, () => {
    console.log('Listening on http://localhost:5000');
});