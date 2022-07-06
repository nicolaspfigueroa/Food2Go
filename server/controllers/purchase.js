const db = require('../models/index.js');

exports.getAllPurchases = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const purchases = await db.UserPurchase.findAll({where: {userId: id}});
    res.status(201).send(purchases);
  } catch (error) {
    console.log(error);
    res.status(500).send({error, message: 'Could not load purchases' });
  }
};

exports.postPurchase = async (req, res) => {
  try {
    //const { userId } = req.params;
    const {userId, purchase, price} = req.body;
    const item = await db.UserPurchase.create({userId, purchase, price});
    res.status(201).send({item});
  } catch (error) {
    console.log(error);
  }
}