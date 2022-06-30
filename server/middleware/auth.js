const jwt = require('jsonwebtoken');
const db = require('../models/index.js');
const SECRET_KEY = 'Vivaelperu';

const authMiddleware = async(req, res, next) => {
    const authHeaders = req.headers['authorization'];
    if (!authHeaders) {
        return res.sendStatus(403);
    }
    const token = authHeaders.split(' ')[1];

    try {
        const {id} = jwt.verify(token, SECRET_KEY);
        const user = await db.User.findOne({where: {id: id}})
        if (!user) return res.sendStatus(401);
        req.body = user;
        next();

    } catch (error) {
        res.sendStatus(401);
    }
}

module.exports = authMiddleware;