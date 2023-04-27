import { IProject } from 'src/interface/project.interface';
import { BaseEntity, Column, Entity } from 'typeorm';


@Entity({name: 'projects'})
export class UserEntity extends BaseEntity implements IProject {
    @Column()
    name: string;
    @Column()
    description: string;
}