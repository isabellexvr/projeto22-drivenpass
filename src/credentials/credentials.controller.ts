import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/guards/auth.guard';
import { CredentialsService } from './credentials.service';
import { CreateCredentialDTO } from './dtos/create-credential.dto';
import { LoggedUser } from 'src/decorators/logged-user.decorator';

@Controller('credentials')
export class CredentialsController {
    constructor(private credentialsService: CredentialsService,) { }

    @UseGuards(AuthGuard)
    @Post()
    async createNewCredential(@Body() body: CreateCredentialDTO, @LoggedUser() user) {
        return await this.credentialsService.createCredential(body, user.id)
    }

    @UseGuards(AuthGuard)
    @Get("all")
    async findAllCredentials(@LoggedUser() user) {
        return await this.credentialsService.findAllUserCredentials(user.id);
    }

    @UseGuards(AuthGuard)
    @Get("unique/:credentialId")
    async findCredentialById(@Param("credentialId", ParseIntPipe) credentialId: number, @LoggedUser() user) {
        return await this.credentialsService.findById(credentialId, user.id);
    }

    @UseGuards(AuthGuard)
    @Delete("delete/:credentialId")
    async deleteCredential(@Param("credentialId", ParseIntPipe) credentialId: number, @LoggedUser() user){
        return await this.credentialsService.deleteOne(credentialId, user.id);
    }
}
