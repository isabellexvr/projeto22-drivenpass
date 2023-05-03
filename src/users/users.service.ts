import { CreateUserDTO } from './dtos/create-user.dto';
import { UsersRepository } from './users.repository';
import { Injectable, NotFoundException } from '@nestjs/common';
import * as bcrypt from "bcrypt";

@Injectable()
export class UsersService {

    private ROUNDS = 10;

    constructor(private usersRepository: UsersRepository) { }

    async createUser(user: CreateUserDTO) {
        return await this.usersRepository.create({ ...user, password: bcrypt.hashSync(user.password, this.ROUNDS) });
    }

    async getUserById(id: number) {
        const user = await this.usersRepository.getById(id);
        if (!user) throw new NotFoundException("Usuário não encontrado.")
        return user;
    }
}
