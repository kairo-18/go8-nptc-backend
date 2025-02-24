import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class driver {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    Status: string;

    @Column()
    License: string;

    @Column()
    LicenseNumber: number;

    @Column()
    Photo: string;

    @Column()
    NBI_clearance: string;

    @Column()
    Police_clearance: string;

    @Column()
    BIR_clearance: string;

    @OneToOne(() => User, (user) => user.nptcAdmin)
    user: User;
}