const express = require('express');
const axios = require('axios');

const app = express();

app.get('/count', async (_req, res) =>  {
    try {
        const {data} = await axios.get('https://api.countapi.xyz/hit/purple/1ccb732e-b55a-4404-ad3f-0f99c02fe44e');
        return res.send(200, data.value);
    } catch (error) {
        console.error(error);
        return res.send(500, 'Something broke!');
    }
});

app.listen(8080);