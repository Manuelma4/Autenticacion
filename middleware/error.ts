import { Request, Response, NextFunction } from 'express';

const errorMiddleware = (error: Error, req: Request, res: Response, next: NextFunction) => {
  const status = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(status).send({
    message: error.message,
    stack: process.env.NODE_ENV === 'production' ? '' : error.stack,
  });
};

export default errorMiddleware;