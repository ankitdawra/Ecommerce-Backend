// import { ArgumentsHost, Catch, ExceptionFilter, Logger } from '@nestjs/common';
// import { RpcException } from '@nestjs/microservices';
// import { Response } from 'express';

// @Catch(RpcException)
// export class RpcExceptionFilter implements ExceptionFilter {
//   catch(exception: RpcException, host: ArgumentsHost) {
//     const error: any = exception.getError();
//     const ctx = host.switchToHttp();
//     const response = ctx.getResponse<Response>();
//     Logger.log(response);
//     response.status(error.statusCode).json(error);
//   }
// }
