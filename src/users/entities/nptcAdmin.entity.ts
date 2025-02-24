import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class nptcAdmin {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;
    
    @OneToOne(() => User, (user) => user.nptcAdmin)
    user: User;
}
