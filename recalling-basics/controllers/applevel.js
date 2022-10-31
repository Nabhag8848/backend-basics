const express = require('express')
const app = express()


// order of middleware functions matters.

app.use((req, res, next) => {
  console.log('Time:', Date.now())
  next()
})

app.use('/user/:id', (req, res, next) => {
    console.log('Request Type:', req.method)
    next()
})

app.use('/user/:id', (req, res, next) => {
    console.log('Request URL:', req.originalUrl)
    next()
  }, (req, res, next) => {
    console.log('Request Type:', req.method)
    next()
  })

// app.get('/user/:id', (req, res, next) => {
//   console.log('ID:', req.params.id)
//   next()
// }, (req, res, next) => {
//   res.send('User Info')
// })

app.get('/user/:id', (req, res, next) => {
    // if the user ID is 0, skip to the next route
    if (req.params.id === '0') return next('route')
    // otherwise pass the control to the next middleware function in this stack
    next()
  }, (req, res, next) => {
    // send a regular response
    res.send('regular');
  })
  
  function logOriginalUrl (req, res, next) {
    console.log('Request URL arr:', req.originalUrl)
    next()
  }
  
  function logMethod (req, res, next) {
    console.log('Request Type arr:', req.method)
    next()
  }

app.get('/user/:id',[logOriginalUrl, logMethod], (req, res, next) => {
    res.send('USER');
})



  
app.listen(3001);
