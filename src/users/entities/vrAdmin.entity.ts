import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class vrAdmin {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    username: string;
    @OneToOne(() => User, (user) => user.nptcAdmin)
    user: User;
}