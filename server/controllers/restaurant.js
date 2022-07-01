const db = require('../models/index.js');

exports.getAll = async (req, res) => {
  try {
    const restaurants = await db.Restaurants.findAll();
    console.log('server', restaurants);
    res.status(201).send(restaurants);
  } catch (error) {
    res.status(500).send({error, message: 'Could not load restaurants' });
  }
};

exports.getOne = async (req, res) => {
  try {
    const { id } = req.params;
    const restaurant = await db.Restaurants.findOne({where: {id: id}});
    res.status(201).send(restaurant);
  } catch (error) {
    res.status(500).send({error, message: 'Could not load restaurants' });
  }
};