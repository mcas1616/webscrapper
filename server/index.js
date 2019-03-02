const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const http = require('http');
const url = require('url');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

app.get('/api/greeting', (req, res) => {
    const name = req.query.name || 'World';
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});



app.get('/api/getpageresult',
    async (req, res) => {
        try {
            console.log('/api/getpageresult');
            const https = require('https');

            https.get('https://www.naver.com', (resp) => {
                let data = '';

                // A chunk of data has been recieved.
                resp.on('data', (chunk) => {
                    data += chunk;
                });

                // The whole response has been received. Print out the result.
                resp.on('end', () => {
                    res.json({
                        data
                    });
                });

            }).on("error", (err) => {
                console.log("Error: " + err.message);
            });
        } catch (error) {
            res.status(500).send({ error });
        }
    }
);

app.listen(3001, () =>
    console.log('Express server is running on localhost:3001')
);