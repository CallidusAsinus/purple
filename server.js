const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

const isProduction = process.env.NODE_ENV === 'production';

// TODO: it would be good to disable this in production builds
const clientCors = cors({origin: 'http://localhost:8080'});

app.get('/count/:id', clientCors, async (req, res) =>  {
    const {id} = req.params;
    if(id === undefined) {
        return res.send(400, 'Please provide a counter id');
    }
    try {
        const {data} = await axios.get(`https://api.countapi.xyz/hit/purple/${id}`);
        return res.send(200, data.value);
    } catch (error) {
        console.error(error);
        return res.send(500, 'Something broke!');
    }
});

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('build'));
    console.log('serving build directory');
}

const PORT = 3000;

app.listen(PORT);
console.log(`starting server on port ${PORT}`);
console.log(`server running in prod mode: ${isProduction}`)