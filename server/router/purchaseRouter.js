const router = require('express').Router();
const purchaseController = require('../controllers/purchase');

router.post('/:id', purchaseController.postPurchase);
router.get('/get/:id', purchaseController.getAllPurchases);

exports.purchaseRouter = router;