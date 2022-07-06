const { Router } =  require('express');
const {userRouter} =  require('./userRouter');
const {restaurantRouter} = require('./restaurantRouter');
const {stripeRouter} = require('./stripeRouter');
const {dishRouter} = require('./dishRouter');
const {purchaseRouter} = require('./purchaseRouter');

const rootRouter = Router();

rootRouter.use('/user', userRouter);
rootRouter.use('/restaurant', restaurantRouter);
rootRouter.use('/payment', stripeRouter);
rootRouter.use('/dish', dishRouter);
rootRouter.use('/purchase', purchaseRouter);

exports.router = rootRouter;