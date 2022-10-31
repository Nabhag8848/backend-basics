const express = require('express');
const app = express();
const path = require('path');
const port = 5000
const birds = require('./routers/birds');
// https://www.freecodecamp.org/news/express-explained-with-examples-installation-routing-middleware-and-more/
app.use('/static', express.static(path.join(__dirname, 'public')));
// app.use(express.static('public'));

app.all('*', (req, res, next) => {
  console.log('*** A request ***');
  console.log('method: ' + req.method);
  console.log('url: ' + req.url);
  console.log('*****************');

  next();
})

app.use('/birds', birds);
app.get('/[$]hello', (req, res) => {
  res.send('Hello World!')
})

app.post('/', (req, res) => {
  res.send('Got a POST request')
})
app.put('/user', (req, res) => {
  res.send('Got a PUT request at /user')
})

app.delete('/user', (req, res) => {
  res.send('Got a DELETE request at /user')
})

app.get('/random.text', (req, res) => {
  res.send('random.text');
})

app.get('/random-text', (req, res) => {
  res.send('random.text');
})

app.get('/ab?cd', (req, res) => {
  res.send('? for optional')
})

app.get('/ab+cde', (req, res) => {
  res.send('ab+cd,+ any number of times')
})

app.get('/xy*z', (req, res) => {
  res.send('* means any string including nothing there');
})

app.get('/xy(cd)+e', (req, res) => {
  res.send('() can be used to merge the string pattern')
})

// app.get(/.*book$/, (req, res) => {
//   res.send('Macbook');  
// })

app.get('/product/:id', (req ,res) => {
  res.send(req.params);
})

app.get('/flights/:from-:to', (req, res) => {
  res.send(req.params);
})

// app.get(/a/, (req, res) => {
//   res.send('will match anything have a in it');
// })

app.get(/.*fly$/, (req, res) => {
  res.send('/.*fly$/')
})

app.get('/example/b', (req, res, next) => {
  console.log('the response will be sent by the next function ...')
  next()
}, (req, res) => {
  res.send('Hello from B!')
})

const cb0 = function (req, res, next) {
  console.log('CB0')
  next()
}

const cb1 = function (req, res, next) {
  console.log('CB1')
  next()
}

const cb2 = function (req, res) {
  res.send('Hello from C!')
}

app.get('/example/c', [cb0, cb1, cb2]);

app.get('/example/d', [cb0, cb1], (req, res, next) => {
  console.log('the response will be sent by the next function ...')
  next()
}, (req, res) => {
  res.send('Hello from D!')
})

app.get('/lefthanging', (req, res) => {
  console.log('hanging');
  res.send('terminate')
})

app.get('/json', (req, res) => {
  res.sendStatus(200);
  res.json(null)
})

app.route('/book')
  .get((req, res) => {
    res.send('Get a random book')
  })
  .post((req, res) => {
    res.send('Add a book')
  })
  .put((req, res) => {
    res.send('Update the book')
  })

  
// add routes dynamically at runtime on an instance of express.Router() so the routes are not superseded by a middleware function.
app.use( (req, res, next) => {
  res.status(400).send('404 not found');
})

app.use((err, req, res, next) => {
  res.status(500).send('500 internal server error')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
