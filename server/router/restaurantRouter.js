const router = require('express').Router();
const restaurantController = require('../controllers/restaurant');

router.get('/all', restaurantController.getAll);
router.get('/one', restaurantController.getOne);

exports.restaurantRouter = router;