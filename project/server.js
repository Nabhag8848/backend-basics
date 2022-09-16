'use strict';

const app = require('express')();
const PORT = 8080;
const HOST = '0.0.0.0';

app.get('/', ( req, res ) => {
    res.send('Health Check');
})

app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
});
