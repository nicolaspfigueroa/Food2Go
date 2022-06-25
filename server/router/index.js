const { Router } =  require('express');
const {userRouter} =  require('./userRouter');
const {restaurantRouter} = require('./restaurantRouter');

const rootRouter = Router();

rootRouter.use('/user', userRouter);
rootRouter.use('/restaurant', restaurantRouter);

exports.router = rootRouter;