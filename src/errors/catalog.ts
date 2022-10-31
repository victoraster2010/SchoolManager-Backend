export enum ErrorTypes {
  ObjectNotFound = 'ObjectNotFound',
  InvalidYear = 'InvalidYear',
  NoClassFoundYear = 'NoClassFoundYear',
  ClassAlreadyExists = 'ClassAlreadyExists',
  NoClassFoundId = 'NoClassFoundId',
  InvalidFieldCreateClass = 'InvalidFieldCreateClass',
}

type ErrorResponseObject = {
  message: string;
  httpStatus:number;
}

export type ErrorCatalog = Record<ErrorTypes, ErrorResponseObject>;

export const errorCatalog:ErrorCatalog = {
  ObjectNotFound: {
    message: 'Object not found',
    httpStatus: 404
  },
  InvalidYear:{
    message:'Invalid year, must be the current one or old ones',
    httpStatus: 400
  },
  NoClassFoundYear:{
    message:'No class where found for this Year',
    httpStatus: 404
  },
  ClassAlreadyExists: {
    message:'This Class is already registered',
    httpStatus:409
  },
  NoClassFoundId:{
    message:'No class was found for this id',
    httpStatus:404
  },
  InvalidFieldCreateClass: {
    message:'Invalid or missing fields to create a class',
    httpStatus:400
  }
}