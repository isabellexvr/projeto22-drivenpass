import { Injectable, NotFoundException } from '@nestjs/common';
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

    async findAllUserCredentials(userId) {
        return await this.credentialsRepository.findAllByUser(userId);
    }

    async findById(credentialId: number, userId: number) {
        const credential = await this.credentialsRepository.isUserTheCredentialOwner(credentialId, userId);
        if (!credential) throw new NotFoundException('A credencial não existe ou não pertence ao usuário.');
        return { ...credential, password: cryptr.decrypt(credential.password) }
    }

}


//TO-DO: criar validação pra ver se email ja existe antes de cadastrar!