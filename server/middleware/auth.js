const jwt = require('jsonwebtoken');
const db = require('../models/index.js');
const SECRET_KEY = 'Vivaelperu';

const authMiddleware = async(req, res, next) => {
    const authHeaders = req.headers['authorization'];
    if (!authHeaders) {
        console.log('no headers');
        return res.sendStatus(403);
    }
    const token = authHeaders.split(' ')[1];

    try {
        console.log('inside try middleware');
        const {id} = jwt.verify(token, SECRET_KEY);
        console.log('after id', id);
        const user = await db.User.findOne({where: {id: id}})
        console.log('user in middleware', user)
        if (!user) return res.sendStatus(401);
        req.user = user;
        next();

    } catch (error) {
        console.log('error in middleware');
        res.sendStatus(401);
    }
}

module.exports = authMiddleware;