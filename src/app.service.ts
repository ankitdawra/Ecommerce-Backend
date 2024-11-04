import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { UserDTO } from './types/user.type';

@Injectable()
export class AppService {
  constructor() // @Inject('AUTHENTICATION')
  // private readonly authenticationClient: ClientProxy,
  {}

  // userSignIn(userDTO: UserDTO) {
  //   return this.authenticationClient.send({ cmd: 'login' }, userDTO);
  // }

  // getCurrentUser() {
  //   return this.authenticationClient.send({ cmd: 'getCurrentUser' }, {});
  // }
}
