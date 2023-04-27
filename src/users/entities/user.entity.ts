import { BaseEntity, Column, Entity } from 'typeorm';
import { IUSER } from 'src/interface/user.interface';


@Entity({name: 'users'})
export class UserEntity extends BaseEntity implements IUSER {
    @Column()
    firstName: string;
    @Column()
    lastName: string;
    @Column()
    age: number;
    @Column()
    email: string;
    @Column()
    username: string;
    @Column()
    password: string;
    @Column()
    role: string;
}