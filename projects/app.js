const express = require('express');
const app = express();
const {schema} = require('./models/form');
const multer = require('multer');

const multerStorage = multer.diskStorage({
    destination: (req ,file ,cb) => {
        cb(null, 'uploads/img')
    },
    filename: (req, file, cb) => {
        const originalfile = file.originalname;
        cb(null, originalfile);
    }
})

const multerFilter = (req, file, cb) => {
    
    const fileType = file.mimetype.split('/')[1];
    if(fileType == 'png'){
        cb(null, true)
    }else{
        cb(new Error('Not a png file!'), false);
    }
}


// const upload = multer({dest: 'uploads/img/'});
const upload = multer({
    storage: multerStorage,
    fileFilter: multerFilter
})

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

app.post('/login', (req, res) => {
    try{
        res.send(req.body);
    }catch(err) {
        res.send(err);
    }
})

app.get('/login', ( req, res ) => {
    try {
        res.render('login', {
            title: 'sign up/in'
        })

    }catch(err) {
        res.status(500).send(err);
    }
})

app.get('/multer', (req, res) => {
    res.render('multer', {
        title: 'Explore multer file upload'
    })
})

app.post('/photo/upload', upload.single('profile'), (req, res) => {
    
    try{

        console.log("file properties: ", req.file);
        res.send({
            data: req.file
        })

    }catch(err){
        res.status(400).send(err)
    }
    
})

app.post('/photos/upload', upload.array('profile', 3), (req, res) => {
    try{

        console.log("file properties: ", req.files);

        res.send({
            data: req.files
        })

    }catch(err){
        res.status(400).send(err);
    }
})


app.listen(5000, () => {
    console.log(`Server is up and running on port:5000`);
})