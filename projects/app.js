const express = require('express');
const app = express();
const {schema} = require('./models/form');

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

app.use(express.urlencoded({extended:true}))

app.get('/profile', (req, res) => {
    res.render('index', {
        title: 'Profile Page'
    });
})

app.post('/submit', async (req, res) => {
    try{

        await schema.validateAsync(req.body);
        res.status(200).send({
            data: req.body
        });

    }catch(err) {
        res.status(400).send({
            status:400,
            err: err
        })
    }
    
})

app.listen(5000, () => {
    console.log(`Server is up and running on port:5000`);
})