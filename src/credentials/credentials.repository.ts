import { Body, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

type CredentialPayload = {
    userId: number;
    title: string;
    url: string;
    user: string;
    password: string;
}

@Injectable()
export class CredentialsRepository {
    constructor(private prisma: PrismaService) { }

    create(@Body() data: CredentialPayload) {
        return this.prisma.credential.create({ data })
    }
    findAllByUser(id: number) {
        return this.prisma.credential.findMany({ where: { userId: id } })
    }
    isUserTheCredentialOwner(credentialId: number, userId: number) {
        return this.prisma.credential.findFirst({
            where: {
                AND: [
                    { id: credentialId },
                    { userId }
                ]
            }
        })
    }
}