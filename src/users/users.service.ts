import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User, UserRole } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { nptcAdmin } from './entities/nptcAdmin.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const hashedPassword = await bcrypt.hash(createUserDto.Password, 10);
    const user = this.usersRepository.create({
      role: createUserDto.role,
      LastName: createUserDto.LastName,
      FirstName: createUserDto.FirstName,
      BirthDate: createUserDto.BirthDate,
      Address: createUserDto.Address,
      ContactNumber: createUserDto.ContactNumber,
      Email: createUserDto.Email,
      Password: hashedPassword,
      nptcAdmin: createUserDto.nptcAdmin,
      vrAdmin: createUserDto.vrAdmin,
      operatorAdmin: createUserDto.operatorAdmin,
      driver: createUserDto.driver,
    });

    return this.usersRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async findOne(id: number): Promise<User | undefined> {
    const user = await this.usersRepository.findOne({ where: { id }});
    return user || undefined;
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User | null> {
    const user = await this.usersRepository.findOne({ where: { id } });
  
    if (!user) {
      return null;
    }
  
    if (updateUserDto.Password) {
      updateUserDto.Password = await bcrypt.hash(updateUserDto.Password, 10);
    }
  
    await this.usersRepository.update(id, updateUserDto);
    return this.usersRepository.findOne({ where: { id } });
  }
  
  async remove(id: number): Promise<boolean> {
    const result = await this.usersRepository.delete(id);
    return result.affected ? true : false;
  }
  
}
