import express from 'express';
import request from 'request';
const app = express();

app.get('/proxy-image', (req, res) => {
    const imageUrl = req.query.url;
    if (!imageUrl) {
        return res.status(400).send('URL is required');
    }
    request(imageUrl).pipe(res).on('error', () => {
        res.status(500).send('Error fetching image');
    });
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Proxy server is running on port ${PORT}`);
});
