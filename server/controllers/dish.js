const db = require('../models/index.js');

exports.getAll = async (req, res) => {
  try {
    const dishes = await db.Dishes.findAll();
    res.status(201).send(dishes);
  } catch (error) {
    res.status(500).send({error, message: 'Could not load dishes' });
  }
};

exports.getAllRestaurant = async (req, res) => {
  try {
    const { id } = req.params;
    console.log('server', id)
    const dishes = await db.Dishes.findAll({where: {restaurantId: id}});
    console.log(dishes);
    res.status(201).send(dishes);
  } catch (error) {
    res.status(500).send({error, message: 'Could not load dishes' });
  }
}

exports.getOne = async (req, res) => {
  try {
    const { id } = req.params;
    const dish = await db.Dishes.findOne({where: {id: id}});
    res.status(201).send(dish);
  } catch (error) {
    res.status(500).send({error, message: 'Could not load dish' });
  }
};