import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { nptcAdmin } from './entities/nptcAdmin.entity';
import { driver } from './entities/driver.entity';
import { operatorAdmin } from './entities/operatorAdmin.entity';
import { vrAdmin } from './entities/vrAdmin.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, nptcAdmin, vrAdmin, operatorAdmin, driver])],
  controllers: [UsersController],
  providers: [UsersService],
  exports:[UsersService]
})
export class UsersModule {}
