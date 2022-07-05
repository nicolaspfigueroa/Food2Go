const express = require ('express');
const cors = require('cors');
const app = express();
const PORT = 3001; 
const { router } = require('./router/index');
const db = require('./models');

app.use(cors());
app.use(express.json());
app.use(router);
app.get('*', (req, res) => {
    res.status(404).send('Not found');
})

app.listen(PORT, async (err) => {
    await db.sequelize.sync();
    if (err) {
        console.log(`Something went wrong ${err}`)
    } else {
        console.log(`Server listening on port ${PORT}`)
    }
})