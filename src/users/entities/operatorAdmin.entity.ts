import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class operatorAdmin {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @OneToOne(() => User, (user) => user.operatorAdmin)
    user: User;
}           