const router = require('express').Router();
const dishController = require('../controllers/dish');

router.get('/all', dishController.getAll);
router.get('/:id', dishController.getOne);
router.get('/restaurant-dishes/:id', dishController.getAllRestaurant);

exports.dishRouter = router;