import { Entity, Column, CreateDateColumn, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { nptcAdmin } from './nptcAdmin.entity';
import { vrAdmin } from './vrAdmin.entity';
import { operatorAdmin } from './operatorAdmin.entity';
import { driver } from './driver.entity';

export enum UserRole {
    nptcAdmin = "NPTC Admin",
    vrAdmin = "VR Admin",
    operator = "Operator",
    driver = "Driver",
}

@Entity() 
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'enum', enum: UserRole, default: UserRole.driver })
  role: UserRole; 

  
  @OneToOne(() => nptcAdmin, (nptcAdmin) => nptcAdmin.user, { cascade: true })
  @JoinColumn()
  nptcAdmin: nptcAdmin;

  @OneToOne(() => vrAdmin, (vrAdmin) => vrAdmin.user, { cascade: true })
  @JoinColumn()
  vrAdmin: vrAdmin;
  
  @OneToOne(() => operatorAdmin, (operatorAdmin) => operatorAdmin.user, { cascade: true })
  @JoinColumn()
  operatorAdmin: operatorAdmin;

  @OneToOne(() => driver, (driver) => driver.user, { cascade: true })
  @JoinColumn()
  driver: driver;

  @Column()
  LastName: string;

  @Column()
  FirstName: string;

  @CreateDateColumn()
  BirthDate: Date;

  @Column()
  Address: string;

  @Column()
  ContactNumber: number;

  @Column()
  Email: string;

  @Column()
  Password: string;
}
