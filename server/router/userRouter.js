const router = require('express').Router();
const userController = require('../controllers/user');
const authMiddleware = require('../middleware/auth');

router.post('/register', userController.create);
router.post('/login', userController.login);
router.get('/me', authMiddleware, userController.profile);


exports.userRouter = router;
