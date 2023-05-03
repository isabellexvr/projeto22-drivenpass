import { Module } from '@nestjs/common';
import { CredentialsController } from './credentials.controller';
import { CredentialsService } from './credentials.service';
import { UsersModule } from 'src/users/users.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CredentialsRepository } from './credentials.repository';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [CredentialsController],
  providers: [CredentialsService, CredentialsRepository],
  imports: [UsersModule, PrismaModule, AuthModule]
})
export class CredentialsModule {}
