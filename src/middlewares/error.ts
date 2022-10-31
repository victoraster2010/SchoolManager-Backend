import { ErrorRequestHandler,Request,Response } from 'express';
import { ErrorTypes,errorCatalog } from '../errors/catalog';

const errorHandler:ErrorRequestHandler = (
  err:Error | any,
  _req: Request,
  res: Response,
  _next,
  ) => {
    console.log('passou aqui');
    
    const messageAsErrorType = err.message as ErrorTypes;
    const mappedError = errorCatalog[messageAsErrorType];
    if (mappedError) {
      const {httpStatus,message} = mappedError;
      return res.status(httpStatus).json({error:message});
    }
    console.error(err);
    return res.status(500).json({message:'Uncaught Error'})
  }

  export default errorHandler;