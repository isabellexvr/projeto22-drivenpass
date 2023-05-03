import { Injectable } from '@nestjs/common';
import { CredentialsRepository } from './credentials.repository';
import { CreateCredentialDTO } from './dtos/create-credential.dto';
const Cryptr = require('cryptr');

const cryptr = new Cryptr(process.env.CRYPT_KEY);

@Injectable()
export class CredentialsService {

    constructor(private credentialsRepository: CredentialsRepository) { }

    async createCredential(data: CreateCredentialDTO, userId: number) {
        return await this.credentialsRepository.create({ ...data, password: cryptr.encrypt(data.password), userId });
    }

}
