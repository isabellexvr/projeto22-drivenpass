import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthSignInDTO } from './dtos/auth-sign-in.dto';
import { AuthGuard } from 'src/guards/auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService){}

    @Post("sign-in")
    async signIn(@Body() body:AuthSignInDTO){
        const {email, password} = body;
        return await this.authService.signIn(email, password);
    }
}
