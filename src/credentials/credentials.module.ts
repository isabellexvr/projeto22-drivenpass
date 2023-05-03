import { Module } from '@nestjs/common';
import { CredentialsController } from './credentials.controller';
import { CredentialsService } from './credentials.service';
import { UsersModule } from 'src/users/users.module';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [CredentialsController],
  providers: [CredentialsService],
  imports: [UsersModule, PrismaModule]
})
export class CredentialsModule {}
