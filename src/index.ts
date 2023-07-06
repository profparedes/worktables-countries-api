import express from 'express';
import 'dotenv/config';
const cors = require('cors');
import Api from './services/Api';
import Config from './Config';

const app = express();
app.use(cors());

app.get('/weather/:country', async (req, res) => {
    try {
        const { data } = await Api.get('/current.json', {
            params: {
                key: Config.api.key,
                q: req.params.country,
            },
        });

        res.send(data);
    } catch (error) {
        res.status(500).send({ message: 'An error occurred', error });
    }
});

app.listen(Config.app.port, () => {
    console.log(`Server running at http://localhost:${Config.app.port}`);
});