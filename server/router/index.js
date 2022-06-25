const { Router } =  require('express');
const {userRouter} =  require('./userRouter');

const rootRouter = Router();

rootRouter.use('/user', userRouter);

exports.router = rootRouter;