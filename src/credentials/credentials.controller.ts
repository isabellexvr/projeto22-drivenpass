import { Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/guards/auth.guard';
import { CredentialsService } from './credentials.service';

@Controller('credentials')
export class CredentialsController {
    constructor(private credentialsService: CredentialsService, ) { }

    @UseGuards(AuthGuard)
    @Post()
    createNewCredential() {

    }
}
