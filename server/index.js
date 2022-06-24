const express = require ('express');
const cors = require('cors');
const app = express();
const PORT = 3001; 
const router = require('./router');
const db = require('./models');

const corsConfig = {
    origin: 'http://localhost:3000',
    credentials: true,
}

app.use(cors(corsConfig));
app.use(express.json());
app.use(router);
app.get('*', (req, res) => {
    res.status(404).send('Not found');
})

app.listen(PORT, async (err) => {
    //await sequelize.authenticate();
    await db.sequelize.sync({force: true});
    if (err) {
        console.log(`Something went wrong ${err}`)
    } else {
        console.log(`Server listening on port ${PORT}`)
    }
})