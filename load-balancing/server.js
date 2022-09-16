const app = require('express')();

const PORT = process.env.PORT || 3000;

app.get('/sample', ( req, res ) => {
    res.send(`Served by ${PORT}`);
})

app.listen(PORT, () => console.log(`Server is up and running on http://localhost:${PORT}`));