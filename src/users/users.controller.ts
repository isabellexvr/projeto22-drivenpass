import { Body, Controller } from '@nestjs/common';
import { Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dtos/create-user.dto';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) { }
    @Post()
    async createUser(@Body() body: CreateUserDTO) {
        return await this.usersService.createUser(body)
    }
}
