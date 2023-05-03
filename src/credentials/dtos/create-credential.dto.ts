import { IsString, IsUrl } from "class-validator";

//titulo, url, user, senha

export class CreateCredentialDTO {

    @IsString()
    title: string;

    @IsUrl()
    url: string;

    @IsString()
    user: string;
    
    @IsString()
    password: string;

}