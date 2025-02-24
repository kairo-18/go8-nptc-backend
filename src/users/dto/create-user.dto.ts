import { UserRole } from '../entities/user.entity';

export class CreateUserDto {
  role: UserRole;
  LastName: string;
  FirstName: string;
  BirthDate: Date;
  Address: string;
  ContactNumber: number;
  Email: string;
  Password: string;
  nptcAdmin?: {
    username: string;
  };
  vrAdmin?: {
    username: string;
  };
  operatorAdmin?: {
    username: string;
  };
  driver?: {
    username: string;
    Status: string;
    License: string;
    LicenseNumber: number;
    Photo: string;
    NBI_clearance: string;
    Police_clearance: string;
    BIR_clearance: string;
  };
}
