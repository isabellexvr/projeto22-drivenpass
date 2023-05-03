import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/guards/auth.guard';
import { CredentialsService } from './credentials.service';
import { CreateCredentialDTO } from './dtos/create-credential.dto';
import { LoggedUser } from 'src/decorators/logged-user.decorator';

@Controller('credentials')
export class CredentialsController {
    constructor(private credentialsService: CredentialsService, ) { }

    @UseGuards(AuthGuard)
    @Post()
    async createNewCredential(@Body() body: CreateCredentialDTO, @LoggedUser() user) {
        return await this.credentialsService.createCredential(body, user.id)
    }
}
