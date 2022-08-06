const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

const clientCorsConfig = {
    origin: 'http://localhost:3000'
};

app.get('/count/:id', cors(clientCorsConfig), async (req, res) =>  {
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

const PORT = 8080;

app.listen(PORT);
console.log(`start api server on port ${PORT}`);