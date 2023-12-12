import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 25 })
    task_name: string;

    @Column({ length: 100 })
    description: string;

    @Column()
    is_done: boolean;
}
