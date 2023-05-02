import { IsStrongPassword, IsEmail } from "class-validator";

export class CreateUserDTO {
    @IsEmail()
    email: string;

    @IsStrongPassword({
        minLength: 10,
        minLowercase: 1,
        minNumbers: 1,
        minUppercase: 1,
        minSymbols: 1
    })
    password: string;
}