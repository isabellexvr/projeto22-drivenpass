import { Injectable, ExecutionContext, CanActivate } from "@nestjs/common";
import { Observable } from "rxjs";
import { AuthService } from "src/auth/auth.service";
import { UsersService } from "src/users/users.service";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private authService: AuthService,
        private usersService: UsersService
    ) { }

    async canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const req = context.switchToHttp().getRequest();
        const { authorization } = req.headers;

        try{
            const data = this.authService.checkToken((authorization ?? "").split(" ")[1]);
        }
    }
}