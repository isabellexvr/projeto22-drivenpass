import { Body, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateUserDTO } from "./dtos/create-user.dto";

@Injectable()
export class UsersRepository {
    constructor(private prisma: PrismaService) { }

    create(@Body() data: CreateUserDTO) {
        return this.prisma.user.create({ data });
    }
}