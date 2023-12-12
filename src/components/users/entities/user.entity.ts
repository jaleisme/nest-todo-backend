import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Task as Task } from 'src/tasks/task/task.entity';

@Entity()
export class Users {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column({ default: null, type:"datetime"})
    created_at:  Date;

    @Column({ default: null, type:"datetime"})
    updated_at:  Date;
}