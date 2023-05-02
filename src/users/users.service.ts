import { CreateUserDTO } from './dtos/create-user.dto';
import { UsersRepository } from './users.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    constructor( private usersRepository: UsersRepository){}

    async createUser(user: CreateUserDTO){
        return await this.usersRepository.create(user);
    }
}
