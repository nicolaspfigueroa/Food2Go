const { Router } =  require('express');
const {userRouter} =  require('./userRouter');
const {restaurantRouter} = require('./restaurantRouter');
const {stripeRouter} = require('./stripeRouter');

const rootRouter = Router();

rootRouter.use('/user', userRouter);
rootRouter.use('/restaurant', restaurantRouter);
rootRouter.use('/payment', stripeRouter);

exports.router = rootRouter;