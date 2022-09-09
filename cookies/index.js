const app = require('express')()

app.get('/', (req, res) => {
    console.log(req.headers.cookie );
    res.sendFile(`${__dirname}/index.html`);
})

app.get('/path1', (req,res) => {
    res.send(`Path1: This are the cookies client send: ${req.headers.cookie}`);
})

app.get('/path2', (req,res) => {
    res.send(`Path2: This are the cookies client send: ${req.headers.cookie}`);
})


app.get('/steal', (req, res) => {
    res.send(`i just stole your cookies and saved it in your db${req.query.v}`);
})

app.listen(8080, () => console.log('listening to port 8080'))   